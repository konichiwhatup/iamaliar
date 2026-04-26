export const runtime = 'edge'

import { createClient } from '@sanity/client'

// 本番で Sanity 接続が失敗している原因を切り分けるための一時的デバッグエンドポイント
export async function GET() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '22x23c52'
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'productionenabled'
  const hasToken = Boolean(process.env.SANITY_API_READ_TOKEN)

  // process.env の中で SANITY/NEXT_PUBLIC を含むキー名を一覧化(値は長さのみ)
  const allKeys = Object.keys(process.env || {})
  const sanityRelatedKeys = allKeys
    .filter((k) => /SANITY|NEXT_PUBLIC|TOKEN/i.test(k))
    .reduce<Record<string, string>>((acc, k) => {
      const v = process.env[k]
      acc[k] = v == null ? '(null/undefined)' : `length=${v.length}`
      return acc
    }, {})

  const env = {
    projectId,
    dataset,
    hasToken,
    tokenLength: process.env.SANITY_API_READ_TOKEN?.length ?? 0,
    nodeEnv: process.env.NODE_ENV,
    rawProjectIdEnv: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '(undefined)',
    rawDatasetEnv: process.env.NEXT_PUBLIC_SANITY_DATASET ?? '(undefined)',
    totalEnvKeys: allKeys.length,
    sanityRelatedKeys,
  }

  // 1) 直接 fetch で Sanity API を叩く
  let directFetch: any = null
  try {
    const url = `https://${projectId}.api.sanity.io/v2026-04-19/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22product%22%5D%5B0...3%5D`
    const res = await fetch(url)
    const json = await res.json()
    directFetch = {
      status: res.status,
      count: Array.isArray(json?.result) ? json.result.length : 'no-result-array',
      sample: json?.result?.[0]?.title ?? null,
    }
  } catch (e) {
    directFetch = { error: String(e) }
  }

  // 2) Sanity client 経由で叩く
  let clientFetch: any = null
  try {
    const c = createClient({
      projectId,
      dataset,
      apiVersion: '2026-04-19',
      useCdn: true,
    })
    const docs = await c.fetch(`*[_type == "product"][0...3]`)
    clientFetch = {
      count: Array.isArray(docs) ? docs.length : 'no-array',
      sample: docs?.[0]?.title ?? null,
    }
  } catch (e: any) {
    clientFetch = { error: e?.message || String(e), stack: e?.stack?.split('\n').slice(0, 3) }
  }

  return new Response(
    JSON.stringify({ env, directFetch, clientFetch }, null, 2),
    { headers: { 'content-type': 'application/json' } }
  )
}
