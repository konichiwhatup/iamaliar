import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: 'ニュース (News)',
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
          { title: 'イベント・展示', value: 'event' },
          { title: 'お知らせ', value: 'info' },
          { title: '着用紹介', value: 'styling' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '概要（一覧に表示される短い説明）',
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
    }),
    defineField({
      name: 'venue',
      title: '開催場所',
      type: 'string',
      description: '例: 代官山 蔦屋書店 2号館',
      hidden: ({ document }) => document?.category !== 'event',
    }),
    defineField({
      name: 'venueMapUrl',
      title: 'Google Maps URL',
      type: 'url',
      description: 'Google Maps のリンクを貼ってください',
      hidden: ({ document }) => document?.category !== 'event',
    }),
    defineField({
      name: 'eventDate',
      title: '開催期間',
      type: 'string',
      description: '例: 2026.06.15 — 06.30',
      hidden: ({ document }) => document?.category !== 'event',
    }),
    defineField({
      name: 'externalLink',
      title: '投稿・掲載リンク (URL)',
      type: 'url',
      description: 'Instagram 投稿や掲載ページの URL を貼ってください',
      hidden: ({ document }) => document?.category !== 'styling',
    }),
    defineField({
      name: 'publishedAt',
      title: '公開日',
      type: 'datetime',
      description:
        '一覧の並び順と表示日付に使われます。今すぐ公開する場合は右下の Publish を押してください。',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
    prepare: ({ title, subtitle, media }) => ({ title, subtitle, media }),
  },
})
