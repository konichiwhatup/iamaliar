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

  const response = NextResponse.redirect(new URL(slug, request.url))
  response.cookies.set('preview-mode', 'true', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
    maxAge: 60 * 60,
  })
  return response
}
