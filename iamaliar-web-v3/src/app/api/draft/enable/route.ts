export const runtime = 'edge'

import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug') ?? '/'

  const env = getRequestContext().env as any
  const previewSecret = env.SANITY_PREVIEW_SECRET ?? process.env.SANITY_PREVIEW_SECRET

  if (secret !== previewSecret) {
    return new Response('Invalid secret', { status: 401 })
  }

  const dm = await draftMode()
  dm.enable()
  redirect(slug)
}
