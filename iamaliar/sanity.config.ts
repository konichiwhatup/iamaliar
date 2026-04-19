import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {Iframe} from 'sanity-plugin-iframe-pane'
import {schemaTypes} from './schemaTypes'

const PREVIEW_URL = 'https://iamaliar.pages.dev'
const PREVIEW_SECRET = 'iamaliar-preview-2026'

export default defineConfig({
  name: 'default',
  title: 'iamaliar',

  projectId: '22x23c52',
  dataset: 'productionenabled',

  plugins: [
    structureTool({
      structure: (S) => {
        const makeTypeList = (type: string, title: string) =>
          S.listItem()
            .title(title)
            .child(
              S.list()
                .title(title)
                .items([
                  S.listItem()
                    .title('Published')
                    .schemaType(type)
                    .child(
                      S.documentList()
                        .title('Published')
                        .schemaType(type)
                        .filter(`_type == "${type}" && !(_id in path("drafts.**"))`)
                    ),
                  S.listItem()
                    .title('Draft')
                    .schemaType(type)
                    .child(
                      S.documentList()
                        .title('Draft')
                        .schemaType(type)
                        .filter(`_type == "${type}" && _id in path("drafts.**")`)
                    ),
                ])
            )

        return S.list()
          .title('Content')
          .items([
            makeTypeList('product', '商品'),
            makeTypeList('journal', 'ジャーナル'),
            makeTypeList('faq', 'FAQ'),
          ])
      },
      defaultDocumentNode: (S, {schemaType}) => {
        if (['product', 'journal'].includes(schemaType)) {
          return S.document().views([
            S.view.form(),
            S.view
              .component(Iframe)
              .options({
                url: (doc: any) => {
                  const slug = doc?.slug?.current
                  if (!slug) return `${PREVIEW_URL}/api/draft/enable?secret=${PREVIEW_SECRET}&slug=/collection`
                  const path = schemaType === 'product' ? `/collection/${slug}` : `/journal/${slug}`
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
