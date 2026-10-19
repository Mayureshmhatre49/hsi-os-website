import type { NextConfig } from 'next'

/*
 * CSP is set dynamically per-request in src/middleware.ts (nonce-based in production).
 * Only static non-CSP security headers are defined here.
 */
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control',       value: 'on' },
  { key: 'Strict-Transport-Security',    value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options',              value: 'DENY' },
  { key: 'X-Content-Type-Options',       value: 'nosniff' },
  { key: 'Referrer-Policy',              value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy',           value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()' },
  { key: 'Cross-Origin-Opener-Policy',   value: 'same-origin-allow-popups' },
  { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
]

const staticCacheHeaders = [
  { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
]

// Files in /public keep stable names (logo.png, favicon.ico…), so they must
// NOT be immutable — a replaced logo would stay stale for a year. 30 days,
// revalidated in the background.
const publicAssetCacheHeaders = [
  { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
]

const legacyPages = [
  'about', 'projects', 'contact', 'insights', 'hsi-os',
  'how-it-works', 'for-homeowners', 'for-developers',
  'alibag-villa-interiors', 'mumbai-luxury-interiors',
  'pune-premium-interiors', 'goa-villa-interiors',
  'bangalore-luxury-interiors', 'nri-home-interior-management',
]

/*
 * Blog posts moved to /insights/<slug> (§3.15). Redirect the old /blog-<slug>
 * and /blog-<slug>.html URLs to the new home. The new slug is the old one with
 * the "blog-" prefix stripped.
 */
const blogSlugs = [
  'alibag-villa-guide', 'alibag-villa-cost', 'alibag-challenges', 'alibag-timeline',
  'nri-remote-management', 'nri-tracking-progress', 'nri-cost-inflation', 'sustainable-luxury',
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      { protocol: 'https', hostname: 'hestiavillas.in' },
      { protocol: 'https', hostname: 'www.hsios.in' },
    ],
  },

  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  async headers() {
    // Immutable long-lived caching is only safe for content-hashed filenames,
    // which Next.js produces in production builds. In development, chunk names
    // like /_next/static/chunks/app/layout.js are STABLE, so an immutable
    // 1-year cache makes browsers serve stale JS after every edit — which
    // surfaces as spurious hydration mismatches. Only send it in production.
    const isProd = process.env.NODE_ENV === 'production'

    return [
      { source: '/(.*)', headers: securityHeaders },
      ...(isProd
        ? [
            // Long-lived cache for hashed static assets
            { source: '/_next/static/:path*', headers: staticCacheHeaders },
            // Un-hashed public images and fonts
            { source: '/:file.:ext(jpg|jpeg|png|webp|avif|svg|ico|gif)', headers: publicAssetCacheHeaders },
            { source: '/:file.:ext(woff|woff2|ttf|otf|eot)', headers: publicAssetCacheHeaders },
          ]
        : []),
    ]
  },

  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      // Platform demo is paused — send /demo to the consultation flow (§3.13).
      { source: '/demo', destination: '/contact', permanent: true },
      // Blog posts relocated to /insights/<slug> (§3.15).
      ...blogSlugs.flatMap((slug) => [
        { source: `/blog-${slug}`,      destination: `/insights/${slug}`, permanent: true },
        { source: `/blog-${slug}.html`, destination: `/insights/${slug}`, permanent: true },
      ]),
      ...legacyPages.map((slug) => ({
        source: `/${slug}.html`,
        destination: `/${slug}`,
        permanent: true,
      })),
    ]
  },
}

export default nextConfig
