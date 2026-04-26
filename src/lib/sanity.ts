import { createClient } from '@sanity/client'

// 公開情報なのでハードコード(env var で上書き可)
const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '22x23c52'
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'productionenabled'

export async function getClient() {
  // 開発環境では CDN を使わず常に最新を取得(Studio での変更が即時反映)
  // 本番では CDN を使ってレスポンス高速化(最大60秒のキャッシュ)
  const isProd = process.env.NODE_ENV === 'production'

  return createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: '2026-04-19',
    useCdn: isProd,
    perspective: 'published',
  })
}
