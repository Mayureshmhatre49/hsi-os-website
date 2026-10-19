import Link from 'next/link'
import BrandLogo from '@/components/ui/BrandLogo'
import { PHONES, WHATSAPP_NUMBER, EMAIL } from '@/lib/contact'

type FooterLink = { href: string; label: string; external?: boolean }

const footerLinks: Record<string, FooterLink[]> = {
  Services: [
    { href: '/services',      label: 'Turnkey Execution' },
    { href: '/how-it-works',  label: 'How We Work' },
    { href: '/projects',      label: 'Projects' },
    { href: '/pricing',       label: 'Pricing' },
  ],
  'Who We Serve': [
    { href: '/for-homeowners',               label: 'Villa Owners' },
    { href: '/nri-home-interior-management', label: 'NRI Owners' },
    { href: '/for-architects',               label: 'Architects & Designers' },
    { href: '/for-developers',               label: 'Developers' },
  ],
  Products: [
    { href: '/digital-twin',   label: 'HSIOS™ Digital Twin' },
    { href: '/hsi-os',         label: 'Our Platform' },
  ],
  Company: [
    { href: '/about',          label: 'About' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/insights',       label: 'Insights' },
    { href: '/security',       label: 'Security' },
  ],
  Locations: [
    { href: '/alibag-villa-interiors',   label: 'Alibag' },
    { href: '/mumbai-luxury-interiors',  label: 'Mumbai' },
    { href: '/lonavala-villa-interiors', label: 'Karjat & Lonavala' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-white" aria-label="Site footer">
      <div className="h-px bg-gradient-to-r from-transparent via-sandstone-400 to-transparent" />

      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" aria-label="Hestia Smart Interiors — Home" className="flex items-center mb-6 w-fit">
              <BrandLogo tone="light" />
            </Link>

            <p className="text-warmgray-300 text-sm leading-relaxed max-w-xs mb-4">
              Turnkey luxury interior execution for villas and second homes — every rupee,
              decision and site day documented and visible to you, delivered through HSIOS™,
              our in-house platform.
            </p>
            <p className="text-warmgray-400 text-sm leading-relaxed max-w-xs mb-8">
              Based in Alibag · Serving Alibag, the Konkan coast &amp; Mumbai owners · NRI projects welcome
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-8">
              {PHONES.map(({ display, e164 }) => (
                <a key={e164} href={`tel:${e164}`} className="flex items-center gap-3 group/link">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover/link:bg-white/10 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sandstone-400">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </span>
                  <span className="text-sm text-warmgray-300 group-hover/link:text-white transition-colors">{display}</span>
                </a>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20HSI%2C%20I%27m%20interested%20in%20discussing%20my%20project`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group/link"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover/link:bg-white/10 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-sandstone-400">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </span>
                <span className="text-sm text-warmgray-300 group-hover/link:text-white transition-colors">WhatsApp Us</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group/link">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover/link:bg-white/10 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-sandstone-400">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <span className="text-sm text-warmgray-300 group-hover/link:text-white transition-colors">{EMAIL}</span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/hestiavillas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 hover:bg-white/12 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sandstone-400">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/hestiasmartinteriors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 hover:bg-white/12 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-sandstone-400">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-sandstone-400 mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map(({ href, label, external }) => (
                  <li key={href}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label.replace(/[→]/g, '').trim()} (opens in new tab)`}
                        className="text-sm text-sandstone-400 hover:text-sandstone-300 transition-colors duration-200 font-medium"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link href={href} className="text-sm text-warmgray-400 hover:text-white transition-colors duration-200">
                        {label}
                      </Link>
                    )}
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
          <p className="text-xs text-warmgray-400">
            © {new Date().getFullYear()} Hestia Smart Interiors. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-warmgray-400 hover:text-warmgray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-warmgray-400 hover:text-warmgray-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-xs text-warmgray-400">Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
