import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: '商品 (Product)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'タイトル (英)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'artworkTitle',
      title: '作品タイトル (日)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'ステータス',
      type: 'string',
      options: {
        list: [
          { title: '販売中', value: 'active' },
          { title: 'Sold', value: 'sold' },
          { title: '受注制作', value: 'made_to_order' },
          { title: 'アーカイブ', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'active',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'カテゴリー',
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
      name: 'subtitle',
      title: 'サブタイトル',
      type: 'string',
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
      rows: 5,
    }),
    defineField({
      name: 'conceptNote',
      title: 'コンセプトノート',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'price',
      title: '価格 (JPY)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'compareAtPrice',
      title: '定価 (比較用)',
      type: 'number',
    }),
    defineField({
      name: 'tags',
      title: 'タグ',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'baseMaterial',
      title: 'ベース素材',
      type: 'string',
    }),
    defineField({
      name: 'materialDetails',
      title: '素材詳細',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'craftsmanship',
      title: '技法・クラフト',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'eraSource',
      title: '年代 (ソース)',
      type: 'string',
      description: '例: 1990s, 1980s',
    }),
    defineField({
      name: 'sourceBrand',
      title: 'ソースブランド',
      type: 'string',
      description: '例: Levi\'s, Wrangler',
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
      title: 'ギャラリー画像',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'detailShots',
      title: 'ディテール写真',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'image', title: '画像', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'caption', title: 'キャプション', type: 'string' }),
            defineField({
              name: 'focusType',
              title: 'フォーカスタイプ',
              type: 'string',
              options: {
                list: [
                  { title: 'ステッチ', value: 'stitch' },
                  { title: 'パッチワーク', value: 'patchwork' },
                  { title: '生地', value: 'fabric' },
                  { title: 'ダメージ', value: 'distress' },
                  { title: 'シルエット', value: 'silhouette' },
                  { title: 'その他', value: 'other' },
                ],
              },
            }),
          ],
          preview: {
            select: { title: 'caption', media: 'image' },
            prepare: ({ title, media }) => ({ title: title || 'ディテール', media }),
          },
        },
      ],
    }),
    defineField({
      name: 'sizes',
      title: 'サイズ情報',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'サイズラベル', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'stock', title: '在庫数', type: 'number', initialValue: 1 }),
            defineField({ name: 'sku', title: 'SKU', type: 'string' }),
            defineField({
              name: 'measurements',
              title: '寸法 (cm)',
              type: 'object',
              fields: [
                defineField({ name: 'waist', title: 'ウエスト', type: 'number' }),
                defineField({ name: 'rise', title: 'ライズ', type: 'number' }),
                defineField({ name: 'inseam', title: '股下', type: 'number' }),
                defineField({ name: 'thigh', title: 'もも幅', type: 'number' }),
                defineField({ name: 'hem', title: '裾幅', type: 'number' }),
                defineField({ name: 'shoulder', title: '肩幅', type: 'number' }),
                defineField({ name: 'chest', title: '胸囲', type: 'number' }),
                defineField({ name: 'sleeve', title: '袖丈', type: 'number' }),
                defineField({ name: 'length', title: '着丈', type: 'number' }),
              ],
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'stock' },
            prepare: ({ title, subtitle }) => ({ title, subtitle: `在庫: ${subtitle}` }),
          },
        },
      ],
    }),
    defineField({
      name: 'madeToOrder',
      title: '受注制作',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'leadTime',
      title: 'リードタイム',
      type: 'string',
      description: '例: 4〜6週間',
      hidden: ({ document }) => !document?.madeToOrder,
    }),
    defineField({
      name: 'availabilityText',
      title: '在庫テキスト',
      type: 'string',
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
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle: subtitle === 'active' ? '販売中' : subtitle === 'sold' ? 'Sold' : subtitle,
      media,
    }),
  },
})
