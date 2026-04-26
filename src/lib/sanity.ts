import { createClient } from '@sanity/client'

// 公開情報なのでハードコード(env var が edge 環境で読めない問題への対応)
// 値を変更したい場合は env var で上書き可能
const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '22x23c52'
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'productionenabled'

export async function getClient() {
  let isPreview = false
  try {
    const { cookies } = await import('next/headers')
    const cookieStore = await cookies()
    isPreview = cookieStore.get('preview-mode')?.value === 'true'
  } catch {
    // edge runtime で cookies が使えない場合は published にフォールバック
  }

  // 開発環境では CDN を使わず常に最新を取得(Studio での変更が即時反映)
  // 本番では CDN を使ってレスポンス高速化(最大60秒のキャッシュ)
  const isProd = process.env.NODE_ENV === 'production'

  return createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: '2026-04-19',
    useCdn: isProd && !isPreview,
    token: isPreview ? process.env.SANITY_API_READ_TOKEN : undefined,
    perspective: isPreview ? 'drafts' : 'published',
  })
}
