export interface Author {
  slug: string
  name: string
  jobTitle: string
  role: string
  image: string
  id: string
  bio: string
  aboutUrl: string
  linkedinUrl?: string
}

export const AUTHORS: Record<string, Author> = {
  'nishant-mhatre': {
    slug: 'nishant-mhatre',
    name: 'Nishant Mhatre',
    jobTitle: 'Founder & CEO',
    role: 'Founder & CEO',
    image: 'https://www.hsios.in/nishant-mhatre.jpg',
    id: 'https://www.hsios.in/about#nishant-mhatre',
    bio: 'Founder & CEO of Hestia Smart Interiors with 20+ years of international experience merging real estate, technology, and execution intelligence.',
    aboutUrl: '/about#nishant-mhatre',
    linkedinUrl: 'https://www.linkedin.com/in/nishantmhatre',
  },
  'sanjay-joshi': {
    slug: 'sanjay-joshi',
    name: 'Sanjay Joshi',
    jobTitle: 'Co-founder & CTO',
    role: 'Co-founder & CTO',
    image: 'https://www.hsios.in/sanjay-joshi.jpg',
    id: 'https://www.hsios.in/about#sanjay-joshi',
    bio: 'Co-founder & CTO of Hestia Smart Interiors with 20+ years in enterprise architecture, platform strategy, and data-driven execution systems.',
    aboutUrl: '/about#sanjay-joshi',
    // TODO(owner): Add Sanjay Joshi personal LinkedIn profile URL once available
    linkedinUrl: 'https://www.linkedin.com/company/hestiasmartinteriors',
  },
  'vishal-patil': {
    slug: 'vishal-patil',
    name: 'Vishal Patil',
    jobTitle: 'COO',
    role: 'COO',
    image: 'https://www.hsios.in/vishal-patil.jpg',
    id: 'https://www.hsios.in/about#vishal-patil',
    bio: 'COO of Hestia Smart Interiors with 24+ years of execution leadership across complex interior projects, site QA, and contractor governance.',
    aboutUrl: '/about#vishal-patil',
    // TODO(owner): Add Vishal Patil personal LinkedIn profile URL once available
    linkedinUrl: 'https://www.linkedin.com/company/hestiasmartinteriors',
  },
}

export const DEFAULT_AUTHOR = AUTHORS['nishant-mhatre']

export function getAuthor(slug?: string): Author {
  if (!slug) return DEFAULT_AUTHOR
  return AUTHORS[slug] ?? DEFAULT_AUTHOR
}
