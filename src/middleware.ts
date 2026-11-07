import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  MAINTENANCE,
  MAINTENANCE_CSP,
  MAINTENANCE_HTML,
  MAINTENANCE_RETRY_AFTER_SECONDS,
} from '@/lib/maintenance'

const SECURITY_HEADERS: Record<string, string> = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
}

export function middleware(request: NextRequest) {
  // メンテナンス中は全ページで 503 のメンテ画面を返す(src/lib/maintenance.ts)
  if (MAINTENANCE) {
    return new NextResponse(MAINTENANCE_HTML, {
      status: 503,
      headers: {
        ...SECURITY_HEADERS,
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Security-Policy': MAINTENANCE_CSP,
        'Retry-After': String(MAINTENANCE_RETRY_AFTER_SECONDS),
        'Cache-Control': 'no-store',
      },
    })
  }

  const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))))
  const isDev = process.env.NODE_ENV === 'development'

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}'${isDev ? " 'unsafe-eval'" : ''} https://static.cloudflareinsights.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https://cdn.sanity.io https://images.unsplash.com",
    "connect-src 'self' https://*.sanity.io https://*.apicdn.sanity.io https://cloudflareinsights.com",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join('; ')

  // x-nonce を Next.js に渡す → Next.js が自身のインラインスクリプトへ自動付与する
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)

  const response = NextResponse.next({ request: { headers: requestHeaders } })

  response.headers.set('Content-Security-Policy', csp)
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value)
  }

  return response
}

export const config = {
  matcher: [
    {
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
