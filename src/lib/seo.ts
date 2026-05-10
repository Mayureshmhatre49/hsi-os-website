const BASE = 'https://www.hsios.in'

/*
 * Only emit hreflang tags for locales we actually serve differently.
 * Pointing en-GB/en-US/en-AU/en-SG all to the same root URL is a no-op for Google
 * — add country variants here only when there's a genuinely localised landing page.
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
    serviceType: 'Interior Design and Execution',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@id': `${BASE}/#business` },
    areaServed: (opts.areaServed ?? ['India']).map((name) => ({
      '@type': 'Country',
      name,
    })),
  }
}
