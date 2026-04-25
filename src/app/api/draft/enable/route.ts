export const runtime = 'edge'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug') ?? '/'

  const previewSecret = process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET

  if (secret !== previewSecret) {
    return new Response('Invalid secret', { status: 401 })
  }

  const isProd = process.env.NODE_ENV === 'production'
  const response = NextResponse.redirect(new URL(slug, request.url))
  response.cookies.set('preview-mode', 'true', {
    httpOnly: true,
    // 本番(HTTPS)ではクロスオリジン iframe のため secure + SameSite=None
    // 開発(localhost HTTP)では secure を外し SameSite=Lax にしないと Cookie 自体が破棄される
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
    path: '/',
    maxAge: 60 * 60,
  })
  return response
}
