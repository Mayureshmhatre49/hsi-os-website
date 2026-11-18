import type { MetadataRoute } from 'next'
import { execFileSync } from 'child_process'
import { existsSync } from 'fs'

const BASE_URL = 'https://www.hsios.in'

/** Real content modification dates matching BlogPosting.dateModified for articles */
const ARTICLE_DATES: Record<string, string> = {
  '/insights/alibag-villa-cost': '2026-11-18',
  '/insights/alibag-timeline': '2026-11-18',
  '/insights/alibag-challenges': '2026-11-18',
  '/insights/nri-cost-inflation': '2026-11-18',
  '/insights/nri-remote-management': '2026-11-18',
  '/insights/nri-tracking-progress': '2026-11-18',
  '/insights/sustainable-luxury': '2026-11-18',
  '/insights/alibag-villa-guide': '2026-11-18',
  '/insights/designer-vs-execution-firm': '2026-11-18',
  '/insights/alibag-second-home-from-mumbai': '2026-11-18',
  '/insights/mumbai-apartment-renovation-society-noc': '2026-11-18',
}

/*
 * Accurate <lastmod> per URL: for articles, uses the canonical dateModified;
 * for pages, checks git log on the page source file, falling back to build time.
 */
function lastCommitDate(url: string, fallback: Date): Date {
  if (ARTICLE_DATES[url]) {
    return new Date(ARTICLE_DATES[url])
  }
  const pagePath = url === '/' ? 'src/app/page.tsx' : `src/app${url}/page.tsx`
  const dirPath = url === '/' ? 'src/app/page.tsx' : `src/app${url}`
  const targetPath = existsSync(pagePath) ? pagePath : (existsSync(dirPath) ? dirPath : null)
  if (!targetPath) return fallback
  try {
    const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', targetPath], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()
    return iso ? new Date(iso) : fallback
  } catch {
    return fallback
  }
}

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
    lastModified: lastCommitDate(url, now),
    changeFrequency,
    priority,
  }))
}
