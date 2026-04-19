export const runtime = 'edge'

import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug') ?? '/'

  let previewSecret: string | undefined
  try {
    const { getRequestContext } = await import('@cloudflare/next-on-pages')
    const env = getRequestContext().env as any
    previewSecret = env.SANITY_PREVIEW_SECRET
  } catch {
    previewSecret = process.env.SANITY_PREVIEW_SECRET
  }

  if (secret !== previewSecret) {
    return new Response(`Got: "${secret}", Expected: "${previewSecret}", process.env: "${process.env.SANITY_PREVIEW_SECRET}"`, { status: 401 })
  }

  const dm = await draftMode()
  dm.enable()
  redirect(slug)
}
