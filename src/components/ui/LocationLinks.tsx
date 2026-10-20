import Link from 'next/link'
import { MapPin } from 'lucide-react'

const LOCATIONS = [
  { href: '/alibag-villa-interiors', label: 'Alibag' },
  { href: '/mumbai-luxury-interiors', label: 'Mumbai' },
  { href: '/pune-premium-interiors', label: 'Pune' },
  { href: '/lonavala-villa-interiors', label: 'Karjat & Lonavala' },
  { href: '/goa-villa-interiors', label: 'Goa' },
  { href: '/nashik-villa-interiors', label: 'Nashik' },
  { href: '/bangalore-luxury-interiors', label: 'Bangalore' },
  { href: '/luxury-interior-execution-india', label: 'Across India' },
]

/** "We also work in…" strip on location pages — links the location cluster together. */
export default function LocationLinks({ current }: { current: string }) {
  return (
    <nav aria-label="Other locations" className="py-12 bg-ivory-100 border-t border-ivory-200">
      <div className="container-luxury">
        <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-4">We also work in</div>
        <ul className="flex flex-wrap gap-3">
          {LOCATIONS.filter((l) => l.href !== current).map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-ivory-300 px-4 py-2 text-sm font-medium text-charcoal-800 hover:border-sandstone-300 hover:text-sandstone-700 transition-colors"
              >
                <MapPin size={13} className="text-sandstone-600" aria-hidden="true" />
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/commercial-interiors"
              className="inline-flex items-center rounded-full bg-white border border-ivory-300 px-4 py-2 text-sm font-medium text-charcoal-800 hover:border-sandstone-300 hover:text-sandstone-700 transition-colors"
            >
              Commercial spaces
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
