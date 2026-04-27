import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homeHero',
  title: 'ホーム画面ヒーロー',
  type: 'document',
  // 1件のみのシングルトン想定。新規作成は Studio の Structure で抑制している。
  fields: [
    defineField({
      name: 'heroImage',
      title: 'ヒーロー画像',
      type: 'image',
      options: { hotspot: true },
      description:
        'トップページの「I AM A LIAR」ロゴの背景に表示される画像。' +
        '季節やキャンペーンに合わせて差し替えてください。' +
        '空欄にすると画像なし(現在のグラデーション背景のみ)になります。',
    }),
    defineField({
      name: 'heroCaption',
      title: 'キャプション(任意)',
      type: 'string',
      description:
        'ヒーロー画像の下に小さく表示されるラベル。' +
        '例:「Spring 2026 Selection」「今月のおすすめ」「New Arrival」など。',
    }),
    defineField({
      name: 'heroLink',
      title: 'リンク先の商品(任意)',
      type: 'reference',
      to: [{ type: 'product' }],
      description:
        'ヒーロー画像/キャプションをクリックしたときに飛ぶ商品ページ。' +
        '空欄ならクリックしても何も起きません。',
    }),
    defineField({
      name: 'heroImageOpacity',
      title: '画像の不透明度(0〜1)',
      type: 'number',
      description:
        '画像の透明度。1 だとクッキリ、0.4 くらいだと薄く重なって見える。' +
        '空欄なら 0.5 が使われます。',
      validation: (Rule) => Rule.min(0).max(1),
    }),
  ],
  preview: {
    select: { media: 'heroImage', subtitle: 'heroCaption' },
    prepare: ({ media, subtitle }) => ({
      title: 'ホームヒーロー設定',
      subtitle: subtitle || '(キャプション未設定)',
      media,
    }),
  },
})
