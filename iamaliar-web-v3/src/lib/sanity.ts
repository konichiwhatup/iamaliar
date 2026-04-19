import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '22x23c52',
  dataset: 'productionenabled',
  apiVersion: '2026-04-19',
  useCdn: true,
})
