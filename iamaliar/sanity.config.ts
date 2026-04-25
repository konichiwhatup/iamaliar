import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {Iframe} from 'sanity-plugin-iframe-pane'
import {schemaTypes} from './schemaTypes'
import {CustomLayout} from './components/CustomLayout'

// ローカル開発時は localhost、本番は pages.dev を使う
const PREVIEW_URL =
  typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://iamaliar.pages.dev'
const PREVIEW_SECRET = 'iamaliar-preview-2026'

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
      defaultDocumentNode: (S, {schemaType}) => {
        if (['product', 'journal'].includes(schemaType)) {
          return S.document().views([
            S.view.form(),
            S.view
              .component(Iframe)
              .options({
                url: (doc: any) => {
                  const slug = doc?.slug?.current
                  const path =
                    schemaType === 'product'
                      ? slug
                        ? `/collection/${slug}`
                        : '/collection'
                      : slug
                        ? `/journal/${slug}`
                        : '/journal'
                  return `${PREVIEW_URL}/api/draft/enable?secret=${PREVIEW_SECRET}&slug=${path}`
                },
                reload: {button: true},
              })
              .title('Preview'),
          ])
        }
        return S.document()
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
