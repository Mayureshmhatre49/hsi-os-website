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
  /** Plain place names, or full Place objects (e.g. from placeSchema()). */
  areaServed?: Array<string | Record<string, unknown>>
  serviceType?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.serviceType ?? 'Luxury Interior Execution & Project Management',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@id': `${BASE}/#business` },
    areaServed: (opts.areaServed ?? ['Alibag', 'Mumbai', 'Pune', 'Goa', 'Bangalore']).map((place) =>
      typeof place === 'string' ? { '@type': 'Place', name: place } : place,
    ),
  }
}

/** Builds a Schema.org BlogPosting for an /insights article. */
export function articleSchema(opts: {
  slug: string
  headline: string
  description: string
  datePublished: string
  dateModified: string
  /** Places the article is about — strengthens local relevance. */
  about?: Array<Record<string, unknown>>
  image?: string
}) {
  const url = `${BASE}/insights/${opts.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.headline,
    description: opts.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${BASE}${opts.image ?? '/opengraph-image.jpg'}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: 'en-IN',
    author: { '@type': 'Organization', '@id': `${BASE}/#organization`, name: 'Hestia Smart Interiors', url: BASE },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE}/#organization`,
      name: 'Hestia Smart Interiors',
      logo: { '@type': 'ImageObject', url: `${BASE}/logo.png` },
    },
    ...(opts.about ? { about: opts.about } : {}),
  }
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

/**
 * Default social share image (src/app/opengraph-image.jpg, 1200×630).
 * Next.js replaces — not merges — a page's `openGraph` object, so any page
 * that defines its own `openGraph` must list this explicitly or lose the image.
 */
export const OG_IMAGE = {
  url: '/opengraph-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Casa Frangipani villa interior, Alibag — executed by Hestia Smart Interiors',
}
