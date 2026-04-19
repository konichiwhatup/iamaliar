import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: '質問',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: '回答',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'カテゴリー',
      type: 'string',
      options: {
        list: [
          { title: 'オーダー・購入', value: 'order' },
          { title: '配送', value: 'shipping' },
          { title: '素材・ケア', value: 'care' },
          { title: 'カスタム・受注', value: 'custom' },
          { title: 'その他', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: '表示順',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'question', subtitle: 'category' },
    prepare: ({ title, subtitle }) => ({ title, subtitle }),
  },
})
