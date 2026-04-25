import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: '商品 (Product)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '題名',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: '題名から自動生成されます。手動で編集も可能。',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: '説明文',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: '値段 (JPY)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'category',
      title: 'カテゴリ',
      type: 'string',
      options: {
        list: [
          { title: 'Pants', value: 'pants' },
          { title: 'Jacket', value: 'jacket' },
          { title: 'Shirt', value: 'shirt' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'story',
      title: '制作ストーリー',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'sizes',
      title: 'サイズ表記',
      type: 'array',
      description: '自由記入。例:「フリーサイズ」「M (着丈70cm 身幅55cm)」「オーダー」など。複数追加可。',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'material',
      title: '素材',
      type: 'text',
      rows: 2,
      description: '例: コットン100% / インディゴデニム + ヴィンテージリネン',
    }),
    defineField({
      name: 'status',
      title: 'ステータス',
      type: 'string',
      options: {
        list: [
          { title: '販売中', value: 'active' },
          { title: 'Sold (販売済み)', value: 'sold' },
          { title: '受注制作', value: 'made_to_order' },
          { title: 'アーカイブ', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'active',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'メイン画像',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'その他の画像',
      type: 'array',
      description: '追加で見せたい写真(複数可)',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'publishedAt',
      title: '公開日',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'status', media: 'featuredImage' },
    prepare: ({ title, subtitle, media }) => {
      const labels: Record<string, string> = {
        active: '販売中',
        sold: 'Sold',
        made_to_order: '受注制作',
        archived: 'アーカイブ',
      }
      return {
        title,
        subtitle: labels[subtitle as string] ?? subtitle,
        media,
      }
    },
  },
})
