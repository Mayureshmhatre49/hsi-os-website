import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.hsios.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    { url: '/',                            priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about',                       priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/projects',                    priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/services',                    priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/hsi-os',                      priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/digital-twin',                priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/how-it-works',               priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/pricing',                    priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/sustainability',             priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/insights',                    priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/insights/designer-vs-execution-firm', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/projects/casa-frangipani',    priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/for-homeowners',             priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/for-developers',             priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/for-architects',             priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/for-bim-managers',            priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/for-sustainability-experts',  priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/security',                    priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/commercial-interiors',       priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/contact',                     priority: 0.9, changeFrequency: 'monthly' as const },
    // City / location pages
    { url: '/alibag-villa-interiors',     priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/mumbai-luxury-interiors',    priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/pune-premium-interiors',     priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/goa-villa-interiors',        priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/bangalore-luxury-interiors', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/nashik-villa-interiors',     priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/lonavala-villa-interiors',   priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/nri-home-interior-management', priority: 0.8, changeFrequency: 'monthly' as const },
    // SEO keyword pages
    { url: '/luxury-interior-execution-india',    priority: 0.9, changeFrequency: 'monthly' as const },
    // /villa-interior-project-management, /turnkey-home-interiors and
    // /second-home-interior-design canonicalise to the page above, so they are
    // deliberately left out — sitemaps should list canonical URLs only.
    // Blog posts
    { url: '/insights/alibag-second-home-from-mumbai',          priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/insights/mumbai-apartment-renovation-society-noc', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/insights/alibag-villa-guide',     priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/insights/alibag-villa-cost',      priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/insights/alibag-challenges',      priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/insights/alibag-timeline',        priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/insights/nri-remote-management',  priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/insights/nri-tracking-progress',  priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/insights/nri-cost-inflation',     priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/insights/sustainable-luxury',     priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  return staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
