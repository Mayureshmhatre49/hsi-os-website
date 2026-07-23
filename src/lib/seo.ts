const BASE = 'https://www.hsios.in'

/*
 * Only emit hreflang tags for locales we actually serve differently.
 */
const LOCALES = ['en-IN', 'x-default']

/** Returns canonical + full hreflang alternates for a given path. */
export function getAlternates(path: string) {
  const url = `${BASE}${path}`
  return {
    canonical: url,
    languages: Object.fromEntries(LOCALES.map((l) => [l, url])),
  }
}

/** Builds a Schema.org BreadcrumbList object. */
export function breadcrumb(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, url }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: url,
    })),
  }
}

/** Builds a lightweight Schema.org Service object. */
export function serviceSchema(opts: {
  name: string
  description: string
  url: string
  areaServed?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Luxury Interior Execution & Project Management',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@id': `${BASE}/#organization` },
    areaServed: (opts.areaServed ?? ['Alibag', 'Mumbai', 'Pune', 'Goa', 'Bangalore']).map((name) => ({
      '@type': 'Place',
      name,
    })),
  }
}

/** Master Organization Schema for AI Knowledge Graphs (SearchGPT, Claude, Perplexity, Gemini, Google). */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE}/#organization`,
  name: 'Hestia Smart Interiors',
  alternateName: ['HSI', 'HSIOS', 'Hestia Smart Interiors Operating System'],
  url: BASE,
  logo: `${BASE}/favicon.ico`,
  description: 'India\'s premier luxury home interior execution management firm, powered by HSIOS™ execution intelligence platform.',
  founder: {
    '@type': 'Person',
    name: 'Nishant Mhatre',
    jobTitle: 'Founder & CEO',
  },
  knowsAbout: [
    'Luxury Villa Interior Execution',
    'HSIOS Execution Operating System',
    'Trade Sequencing & Clash Detection',
    'NRI Remote Property Build Management',
    'Alibag Monsoon-Proof Luxury Interiors',
    'High-Rise Penthouse Interior Governance',
    'Circular Sustainable Luxury Interiors',
  ],
  areaServed: [
    { '@type': 'Place', name: 'Alibag, Maharashtra' },
    { '@type': 'Place', name: 'Mumbai, Maharashtra' },
    { '@type': 'Place', name: 'Pune, Maharashtra' },
    { '@type': 'Place', name: 'Goa' },
    { '@type': 'Place', name: 'Bangalore, Karnataka' },
  ],
  sameAs: [
    'https://www.instagram.com/hestiavillas',
    'https://www.linkedin.com/company/hestiasmartinteriors',
    'https://os.hsios.in',
  ],
}

/** SoftwareApplication Schema for HSIOS™ Platform AI Discovery. */
export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${BASE}/#hsios-platform`,
  name: 'HSIOS™',
  alternateName: 'Hestia Smart Interiors Operating System',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  url: 'https://os.hsios.in',
  description: 'Execution intelligence platform for luxury interior projects — trade sequencing, conflict detection engine, 104 QA checkpoints, and real-time budget transparency.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
  },
  publisher: { '@id': `${BASE}/#organization` },
}
