import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
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
            S.documentTypeListItem('product').title('商品'),
            S.documentTypeListItem('journal').title('ジャーナル'),
            S.documentTypeListItem('faq').title('FAQ'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
