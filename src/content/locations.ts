/**
 * Location entities for local SEO — the single source for how Alibag and
 * Mumbai are named, disambiguated and broken into micro-markets across page
 * copy and JSON-LD.
 *
 * `sameAs` points at Wikipedia so search engines and AI answer engines tie
 * our pages to the right place entity (there is only one Alibag, but the
 * spelling varies: Alibag / Alibaug / Alibagh).
 */

export type LocationEntity = {
  name: string
  alternateNames: string[]
  wikipedia: string
  geo: { latitude: number; longitude: number }
  containedIn: { type: 'AdministrativeArea' | 'State'; name: string; wikipedia: string }
}

export const ALIBAG: LocationEntity = {
  name: 'Alibag',
  alternateNames: ['Alibaug', 'Alibagh'],
  wikipedia: 'https://en.wikipedia.org/wiki/Alibag',
  geo: { latitude: 18.6414, longitude: 72.8722 },
  containedIn: { type: 'AdministrativeArea', name: 'Raigad district', wikipedia: 'https://en.wikipedia.org/wiki/Raigad_district' },
}

export const MUMBAI: LocationEntity = {
  name: 'Mumbai',
  alternateNames: ['Bombay'],
  wikipedia: 'https://en.wikipedia.org/wiki/Mumbai',
  geo: { latitude: 19.076, longitude: 72.8777 },
  containedIn: { type: 'State', name: 'Maharashtra', wikipedia: 'https://en.wikipedia.org/wiki/Maharashtra' },
}

/** Villages and beach belts within Alibag taluka where villa owners build. */
export const ALIBAG_AREAS = [
  'Mandwa', 'Kihim', 'Awas', 'Sasawane', 'Zirad', 'Thal',
  'Varsoli', 'Nagaon', 'Chondhi', 'Chaul', 'Revdanda',
] as const

/** Mumbai premium residential micro-markets, grouped as owners think of them. */
export const MUMBAI_AREAS = [
  { group: 'South Mumbai', areas: ['Malabar Hill', 'Breach Candy', 'Cuffe Parade', 'Worli', 'Prabhadevi', 'Lower Parel'] },
  { group: 'Western Suburbs', areas: ['Bandra West', 'Khar', 'Santacruz', 'Juhu', 'Andheri West'] },
  { group: 'Central Suburbs', areas: ['Powai'] },
] as const

/** Schema.org Place for a location entity (for `areaServed`, `about`, etc.). */
export function placeSchema(loc: LocationEntity) {
  return {
    '@type': 'City',
    name: loc.name,
    alternateName: loc.alternateNames,
    sameAs: loc.wikipedia,
    geo: { '@type': 'GeoCoordinates', ...loc.geo },
    containedInPlace: {
      '@type': loc.containedIn.type,
      name: loc.containedIn.name,
      sameAs: loc.containedIn.wikipedia,
    },
  }
}
