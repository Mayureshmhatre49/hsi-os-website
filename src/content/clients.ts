/**
 * Named clients HSI may show publicly. Only add a client here with the
 * client's permission, and only state what is true today — ongoing
 * engagements must not carry outcome claims (dates, savings) until delivered.
 */

export type Client = {
  id: string
  name: string
  /** One-line description of the client, in their own public terms. */
  descriptor: string
  location: string
  url: string
  logo: { src: string; width: number; height: number }
  /** What HSI does for this client. */
  scope: string[]
  status: 'ongoing' | 'delivered'
  /** Public regulatory reference, where the client publishes one. */
  rera?: string
  image?: { src: string; alt: string; caption: string; width: number; height: number }
}

/**
 * Cerulean — villa development at Revdanda, Alibag. Permission (2026-10-19):
 * name + link, logo and project imagery. No client quote yet.
 * The image is Cerulean's architectural render, not a photo of finished work —
 * keep it captioned as a render until real site photography replaces it.
 */
export const CERULEAN: Client = {
  id: 'cerulean',
  name: 'Cerulean',
  descriptor: 'Sky-pool villa development',
  location: 'Revdanda, Alibag',
  url: 'https://www.ceruleanalibag.com/',
  logo: { src: '/cerulean-alibag-logo.png', width: 445, height: 105 },
  scope: ['Interior execution', 'Design coordination', 'Every residence delivered on HSIOS™'],
  status: 'ongoing',
  rera: 'P52000081109',
  image: {
    src: '/cerulean-alibag-sky-pool-render.webp',
    alt: 'Architectural render of a Cerulean sky-pool villa terrace in Revdanda, Alibag',
    caption: 'Architectural render · Cerulean, Revdanda',
    width: 480,
    height: 350,
  },
}

export const CLIENTS: Client[] = [CERULEAN]
