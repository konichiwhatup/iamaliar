import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {CustomLayout} from './components/CustomLayout'

export default defineConfig({
  name: 'default',
  title: 'iamaliar',

  projectId: '22x23c52',
  dataset: 'productionenabled',

  // Releases / Perspective 機能を無効化(Published/Draft の切替UIを隠す)
  releases: {
    enabled: false,
  },

  // Studio UI のカスタマイズ:Perspective の切替ピルをCSSで非表示化
  studio: {
    components: {
      layout: CustomLayout,
    },
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // ホームヒーロー設定はシングルトン:常に同じ 1 件を編集
            S.listItem()
              .title('ホーム画面ヒーロー')
              .id('homeHero')
              .child(
                S.document()
                  .schemaType('homeHero')
                  .documentId('homeHero')
                  .title('ホーム画面ヒーロー設定'),
              ),
            S.divider(),
            S.documentTypeListItem('product').title('商品'),
            S.documentTypeListItem('journal').title('ジャーナル'),
            S.documentTypeListItem('news').title('ニュース'),
            S.documentTypeListItem('faq').title('FAQ'),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  // homeHero はシングルトン。グローバルの「+ 新規作成」メニューから除外する。
  document: {
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === 'global'
        ? prev.filter((opt) => opt.templateId !== 'homeHero')
        : prev,
  },
})
