import { createClient } from '@sanity/client'

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET!

export async function getClient() {
  let isPreview = false
  try {
    const { cookies } = await import('next/headers')
    const cookieStore = await cookies()
    isPreview = cookieStore.get('preview-mode')?.value === 'true'
  } catch {
    // edge runtime で cookies が使えない場合は published にフォールバック
  }

  return createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: '2026-04-19',
    useCdn: !isPreview,
    token: isPreview ? process.env.SANITY_API_READ_TOKEN : undefined,
    perspective: isPreview ? 'previewDrafts' : 'published',
  })
}
