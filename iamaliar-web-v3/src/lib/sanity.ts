import { createClient } from '@sanity/client'
import { cookies } from 'next/headers'

export async function getClient() {
  const cookieStore = await cookies()
  const isPreview = cookieStore.get('preview-mode')?.value === 'true'

  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2026-04-19',
    useCdn: !isPreview,
    token: isPreview ? process.env.SANITY_API_READ_TOKEN : undefined,
    perspective: isPreview ? 'previewDrafts' : 'published',
  })
}
