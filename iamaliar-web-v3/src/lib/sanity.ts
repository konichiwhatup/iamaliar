import { createClient } from '@sanity/client'
import { draftMode } from 'next/headers'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2026-04-19',
  useCdn: true,
})

export async function getClient() {
  const { isEnabled } = await draftMode()
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: '2026-04-19',
    useCdn: !isEnabled,
    token: isEnabled ? process.env.SANITY_API_READ_TOKEN : undefined,
    perspective: isEnabled ? 'previewDrafts' : 'published',
  })
}
