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
      title: '公開日(表示用・並び順用)',
      type: 'datetime',
      description:
        '⚠️ この「公開日」と Sanity の「Scheduled Publishing（予約公開）」は別物です。\n' +
        '\n' +
        '【この欄（公開日）】サイト一覧の並び順（新しい順）にのみ使われます。' +
        'ここの日付を未来にしても自動では公開されません。今すぐ公開したいときは右下の Publish を押してください。\n' +
        '\n' +
        '【予約公開について】現在のプランでは Scheduled Publishing は利用できません。' +
        '公開したいタイミングでこの画面を開き、右下の「Publish」ボタンを手動で押してください。',
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
