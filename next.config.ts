import type { NextConfig } from 'next'

const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: https: blob:",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control',    value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options',           value: 'DENY' },
  { key: 'X-Content-Type-Options',    value: 'nosniff' },
  { key: 'X-XSS-Protection',          value: '1; mode=block' },
  { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()' },
  { key: 'Content-Security-Policy',   value: ContentSecurityPolicy },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
]

const staticCacheHeaders = [
  { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
]

const legacyPages = [
  'about', 'projects', 'contact', 'insights', 'hsi-os',
  'how-it-works', 'for-homeowners', 'for-developers',
  'alibag-villa-interiors', 'mumbai-luxury-interiors',
  'pune-premium-interiors', 'goa-villa-interiors',
  'bangalore-luxury-interiors', 'nri-home-interior-management',
  'blog-alibag-villa-guide', 'blog-alibag-villa-cost',
  'blog-alibag-challenges', 'blog-alibag-timeline',
  'blog-nri-remote-management', 'blog-nri-tracking-progress',
  'blog-nri-cost-inflation',
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
    optimizePackageImports: ['framer-motion'],
  },

  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
      // Long-lived cache for hashed static assets
      { source: '/_next/static/:path*', headers: staticCacheHeaders },
      // Cache public images for 1 year
      { source: '/:file.:ext(jpg|jpeg|png|webp|avif|svg|ico|gif)', headers: staticCacheHeaders },
      // Cache fonts
      { source: '/:file.:ext(woff|woff2|ttf|otf|eot)', headers: staticCacheHeaders },
    ]
  },

  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/sitemap.xml', destination: '/sitemap.xml', permanent: false },
      ...legacyPages.map((slug) => ({
        source: `/${slug}.html`,
        destination: `/${slug}`,
        permanent: true,
      })),
    ]
  },
}

export default nextConfig
