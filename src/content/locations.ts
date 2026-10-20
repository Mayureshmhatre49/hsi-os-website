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
  /** Schema.org type — most are cities; Goa is a state. */
  type?: 'City' | 'State'
  name: string
  alternateNames: string[]
  wikipedia: string
  geo: { latitude: number; longitude: number }
  containedIn: { type: 'AdministrativeArea' | 'State' | 'Country'; name: string; wikipedia: string }
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

const MH = { type: 'State' as const, name: 'Maharashtra', wikipedia: 'https://en.wikipedia.org/wiki/Maharashtra' }

export const PUNE: LocationEntity = {
  name: 'Pune', alternateNames: ['Poona'],
  wikipedia: 'https://en.wikipedia.org/wiki/Pune',
  geo: { latitude: 18.5204, longitude: 73.8567 }, containedIn: MH,
}
export const LONAVALA: LocationEntity = {
  name: 'Lonavala', alternateNames: ['Lonavla'],
  wikipedia: 'https://en.wikipedia.org/wiki/Lonavala',
  geo: { latitude: 18.7546, longitude: 73.4062 }, containedIn: MH,
}
export const KARJAT: LocationEntity = {
  name: 'Karjat', alternateNames: [],
  wikipedia: 'https://en.wikipedia.org/wiki/Karjat',
  geo: { latitude: 18.9107, longitude: 73.3237 }, containedIn: MH,
}
export const NASHIK: LocationEntity = {
  name: 'Nashik', alternateNames: ['Nasik'],
  wikipedia: 'https://en.wikipedia.org/wiki/Nashik',
  geo: { latitude: 19.9975, longitude: 73.7898 }, containedIn: MH,
}
export const GOA: LocationEntity = {
  type: 'State', name: 'Goa', alternateNames: [],
  wikipedia: 'https://en.wikipedia.org/wiki/Goa',
  geo: { latitude: 15.2993, longitude: 74.124 },
  containedIn: { type: 'Country', name: 'India', wikipedia: 'https://en.wikipedia.org/wiki/India' },
}
export const BANGALORE: LocationEntity = {
  name: 'Bangalore', alternateNames: ['Bengaluru'],
  wikipedia: 'https://en.wikipedia.org/wiki/Bangalore',
  geo: { latitude: 12.9716, longitude: 77.5946 },
  containedIn: { type: 'State', name: 'Karnataka', wikipedia: 'https://en.wikipedia.org/wiki/Karnataka' },
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
    '@type': loc.type ?? 'City',
    name: loc.name,
    ...(loc.alternateNames.length ? { alternateName: loc.alternateNames } : {}),
    sameAs: loc.wikipedia,
    geo: { '@type': 'GeoCoordinates', ...loc.geo },
    containedInPlace: {
      '@type': loc.containedIn.type,
      name: loc.containedIn.name,
      sameAs: loc.containedIn.wikipedia,
    },
  }
}
