import Link from 'next/link'

const footerLinks = {
  Platform: [
    { href: '/hsi-os',       label: 'HSIOS™ Platform' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/projects',     label: 'Projects' },
    { href: '/insights',     label: 'Insights' },
    { href: '/contact',      label: 'Request Consultation' },
  ],
  Solutions: [
    { href: '/for-homeowners', label: 'For Homeowners' },
    { href: '/for-developers', label: 'For Developers' },
    { href: '/about',          label: 'Our Story' },
  ],
  Locations: [
    { href: '/alibag-villa-interiors',     label: 'Alibag' },
    { href: '/mumbai-luxury-interiors',    label: 'Mumbai' },
    { href: '/pune-premium-interiors',     label: 'Pune' },
    { href: '/goa-villa-interiors',        label: 'Goa' },
    { href: '/bangalore-luxury-interiors', label: 'Bangalore' },
    { href: '/nri-home-interior-management', label: 'NRI Remote' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-white" aria-label="Site footer">
      {/* Decorative warm top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-sandstone-400 to-transparent" />

      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-sandstone-400 text-white text-xs font-bold tracking-widest">
                H
              </div>
              <div>
                <div className="font-serif font-bold text-white text-base leading-none">
                  Hestia Smart Interiors
                </div>
                <div className="text-[9px] font-semibold tracking-[0.18em] uppercase text-sandstone-400 mt-0.5">
                  Powered by HSIOS™
                </div>
              </div>
            </Link>

            <p className="text-warmgray-300 text-sm leading-relaxed max-w-xs mb-8">
              Luxury turnkey interiors for villas, premium homes and holiday properties —
              delivered with precision, transparency and responsibility through HSIOS™.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href="https://wa.me/918010234802?text=Hi%20HSI%2C%20I%27m%20interested%20in%20discussing%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group/link"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover/link:bg-white/10 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-sandstone-400">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </span>
                <span className="text-sm text-warmgray-300 group-hover/link:text-white transition-colors">
                  +91-8010234802
                </span>
              </a>
              <a
                href="mailto:hello@hsios.in"
                className="flex items-center gap-3 group/link"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover/link:bg-white/10 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-sandstone-400">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <span className="text-sm text-warmgray-300 group-hover/link:text-white transition-colors">
                  hello@hsios.in
                </span>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-sandstone-400 mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-warmgray-400 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="container-luxury py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warmgray-500">
            © {new Date().getFullYear()} Hestia Smart Interiors. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-xs text-warmgray-500 hover:text-warmgray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="text-xs text-warmgray-500 hover:text-warmgray-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-xs text-warmgray-600">
              Crafted with care in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
