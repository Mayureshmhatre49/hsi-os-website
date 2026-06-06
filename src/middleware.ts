import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const isProd = process.env.NODE_ENV === 'production'

  // HTTPS enforcement — Nginx sets x-forwarded-proto
  if (isProd && request.headers.get('x-forwarded-proto') === 'http') {
    const url = request.nextUrl.clone()
    url.protocol = 'https:'
    return NextResponse.redirect(url, { status: 301 })
  }

  const isHtmlRoute = !request.nextUrl.pathname.startsWith('/api/')

  if (!isHtmlRoute) {
    return NextResponse.next()
  }

  // Per-request nonce for CSP — Web Crypto API works in Edge Runtime
  const nonce = btoa(crypto.randomUUID())

  /*
   * In production: 'strict-dynamic' is the source of truth — only nonced scripts
   * (and scripts they load transitively) execute. The host allowlist is a fallback
   * for browsers without CSP3 support; CSP3-aware browsers ignore it entirely.
   */
  const scriptSrc = isProd
    ? `'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com https://*.google-analytics.com`
    : `'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://*.google-analytics.com`

  const csp = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' data:",
    "img-src 'self' data: blob: https://hestiavillas.in https://www.hsios.in",
    "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
    "frame-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join('; ')

  // Forward nonce + pathname to server components via request header
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('x-pathname', request.nextUrl.pathname)

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  })

  // CSP is set here — overrides the static one in next.config.ts for HTML routes
  response.headers.set('Content-Security-Policy', csp)
  return response
}

export const config = {
  matcher: [
    /*
     * Run on all routes except Next.js internals and static assets.
     * API routes are excluded from nonce logic but still get HTTPS enforcement.
     */
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:jpg|jpeg|png|svg|gif|webp|avif|ico|woff|woff2)).*)',
  ],
}
