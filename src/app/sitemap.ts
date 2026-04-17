import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.hsios.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    { url: '/',                            priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about',                       priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/projects',                    priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/hsi-os',                      priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/how-it-works',               priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/pricing',                    priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/demo',                       priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/insights',                    priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/for-homeowners',             priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/for-developers',             priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact',                     priority: 0.9, changeFrequency: 'monthly' as const },
    // City / location pages
    { url: '/alibag-villa-interiors',     priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/mumbai-luxury-interiors',    priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/pune-premium-interiors',     priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/goa-villa-interiors',        priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/bangalore-luxury-interiors', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/nri-home-interior-management', priority: 0.8, changeFrequency: 'monthly' as const },
    // Blog posts
    { url: '/blog-alibag-villa-guide',     priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog-alibag-villa-cost',      priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog-alibag-challenges',      priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog-alibag-timeline',        priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog-nri-remote-management',  priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog-nri-tracking-progress',  priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog-nri-cost-inflation',     priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  return staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
