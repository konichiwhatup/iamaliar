import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'journal',
  title: 'ジャーナル (Journal)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'タイトル',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'カテゴリー',
      type: 'string',
      options: {
        list: [
          { title: '制作プロセス', value: 'process' },
          { title: 'コンセプト', value: 'concept' },
          { title: 'アーカイブ', value: 'archive' },
          { title: '展示・イベント', value: 'exhibition' },
          { title: 'ノート', value: 'note' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '抜粋',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: 'カバー画像',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: '本文',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: '本文', value: 'normal' },
            { title: '見出し H2', value: 'h2' },
            { title: '見出し H3', value: 'h3' },
            { title: '引用', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: '太字', value: 'strong' },
              { title: '斜体', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'caption', title: 'キャプション', type: 'string' }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'タグ',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'relatedProducts',
      title: '関連商品',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
    defineField({
      name: 'author',
      title: '著者',
      type: 'string',
      initialValue: 'IAMALIAR',
    }),
    defineField({
      name: 'publishedAt',
      title: '公開日(表示用・並び順用)',
      type: 'datetime',
      description:
        '⚠️ この「公開日」と、Sanity の「Scheduled Publishing(予約公開)」は別物です。\n' +
        '\n' +
        '【この欄(公開日)】記事一覧での並び順(新しい順)と表示日付に使われるだけの日付。' +
        'ここの日付を未来にしても自動では公開されません。今すぐ公開したいときは右下の Publish を押してください。\n' +
        '\n' +
        '【予約公開したいとき】右下の Publish ボタン横の「▼」→「Schedule…」から日時指定してください。' +
        '予約一覧は左メニューの Scheduled タブで確認できます。' +
        '予約公開する場合は、こちらの「公開日」も同じ日時に揃えておくと一覧の並び順がズレません。',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
    prepare: ({ title, subtitle, media }) => ({ title, subtitle, media }),
  },
})
