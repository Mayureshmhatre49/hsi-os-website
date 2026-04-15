import type { NextConfig } from 'next'

const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: https: blob:",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control',  value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options',         value: 'DENY' },
  { key: 'X-Content-Type-Options',  value: 'nosniff' },
  { key: 'X-XSS-Protection',        value: '1; mode=block' },
  { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy',      value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
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

  // Serve AVIF/WebP automatically; optimize at build time
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
    remotePatterns: [
      { protocol: 'https', hostname: 'hestiavillas.in' },
    ],
  },

  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },

  // 301 redirects for all legacy .html URLs — preserves SEO equity
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      ...legacyPages.map((slug) => ({
        source: `/${slug}.html`,
        destination: `/${slug}`,
        permanent: true,
      })),
    ]
  },
}

export default nextConfig
