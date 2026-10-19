'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import BrandLogo from '@/components/ui/BrandLogo'
import { usePathname } from 'next/navigation'
import { WHATSAPP_NUMBER } from '@/lib/contact'

// Primary nav — services-first (logo = Home)
// `mobileOnly` links stay in the drawer but are dropped from the desktop bar for width.
const navLinks: { href: string; label: string; badge?: string; mobileOnly?: boolean }[] = [
  { href: '/projects',     label: 'Projects' },
  { href: '/services',     label: 'Services' },
  { href: '/how-it-works', label: 'How We Work' },
  { href: '/pricing',      label: 'Pricing' },
  { href: '/digital-twin', label: 'Digital Twin', badge: 'New' },
  { href: '/about',        label: 'About' },
  { href: '/insights',     label: 'Insights', mobileOnly: true },
]

// "Who We Serve" dropdown — the audiences HSI sells interior execution to
const solutionLinks = [
  { href: '/for-homeowners',               label: 'Villa Owners' },
  { href: '/nri-home-interior-management', label: 'NRI Owners' },
  { href: '/for-architects',               label: 'Architects & Designers' },
  { href: '/for-developers',               label: 'Developers' },
]

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [menuOpen, setMenuOpen]         = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname  = usePathname()
  const dropRef   = useRef<HTMLLIElement>(null)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 48)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close on route change
  useEffect(() => { setMenuOpen(false); setDropdownOpen(false) }, [pathname])

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    if (!dropdownOpen) return
    const handleClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [dropdownOpen])

  // Close mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const isHeroPage = ['/', '/for-homeowners', '/for-developers', '/for-architects', '/commercial-interiors', '/hsi-os', '/sustainability', '/pricing', '/demo', '/alibaug-villa', '/enquiry', '/digital-twin'].includes(pathname)
  const transparent = isHeroPage && !scrolled && !menuOpen

  return (
    <>
      <header
        className={`
          fixed top-0 inset-x-0 z-50 transition-all duration-500
          ${transparent
            ? 'bg-charcoal-900/80 backdrop-blur-md'
            : 'bg-ivory-50/95 backdrop-blur-md shadow-luxury border-b border-ivory-200'
          }
        `}
      >
        <nav className="container-luxury flex items-center justify-between h-16 gap-3" aria-label="Main navigation">

          {/* Logo */}
          <Link href="/" aria-label="Hestia Smart Interiors — Home" className="flex items-center flex-shrink-0">
            <BrandLogo tone={transparent ? 'light' : 'dark'} priority />
          </Link>

          {/* Desktop Nav — shown at xl+ (narrower widths use the hamburger drawer) */}
          <ul className="hidden xl:flex items-center gap-0.5">
            {navLinks.filter(l => !l.mobileOnly).map(({ href, label, badge }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={`
                    relative px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                    ${isActive(href)
                      ? transparent
                        ? 'text-white bg-white/10'
                        : 'text-sandstone-700 bg-sandstone-50'
                      : transparent
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-warmgray-700 hover:text-charcoal-800 hover:bg-ivory-200'
                    }
                  `}
                >
                  {label}
                  {badge && (
                    <span className={`ml-1.5 align-middle text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full ${transparent ? 'bg-sandstone-400/25 text-sandstone-200' : 'bg-sandstone-100 text-sandstone-700'}`}>
                      {badge}
                    </span>
                  )}
                  {isActive(href) && (
                    <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${transparent ? 'bg-sandstone-300' : 'bg-sandstone-500'}`} />
                  )}
                </Link>
              </li>
            ))}

            {/* Solutions dropdown */}
            <li ref={dropRef} className="relative">
              <button
                onClick={() => setDropdownOpen(v => !v)}
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
                aria-controls="solutions-dropdown"
                className={`
                  flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200 whitespace-nowrap
                  ${solutionLinks.some(l => isActive(l.href))
                    ? transparent ? 'text-white bg-white/10' : 'text-sandstone-700 bg-sandstone-50'
                    : transparent
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-warmgray-700 hover:text-charcoal-800 hover:bg-ivory-200'
                  }
                `}
              >
                Who We Serve
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  id="solutions-dropdown"
                  role="listbox"
                  aria-label="Who We Serve"
                  className="absolute top-full left-0 mt-2 w-60 rounded-2xl bg-white border border-ivory-200 shadow-luxury overflow-hidden z-50"
                >
                  {solutionLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      role="option"
                      aria-selected={isActive(href)}
                      className={`
                        block px-4 py-3 text-sm font-medium transition-colors
                        ${isActive(href) ? 'bg-sandstone-50 text-sandstone-700' : 'text-charcoal-700 hover:bg-ivory-100'}
                      `}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-2.5 flex-shrink-0">
            <a
              href="https://os.hsios.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Client login to the HSIOS platform (opens in new tab)"
              className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                transparent ? 'text-white/80 hover:text-white' : 'text-sandstone-700 hover:text-sandstone-800'
              }`}
            >
              Client Login
            </a>
            <Link
              href="/contact"
              className={`
                btn text-sm px-4 py-2.5 whitespace-nowrap
                ${transparent
                  ? 'bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-charcoal-800'
                  : 'btn-bronze'
                }
              `}
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`xl:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg transition-colors duration-200 ${transparent ? 'text-white' : 'text-charcoal-800'}`}
          >
            <span className={`block w-5 h-0.5 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''} ${transparent ? 'bg-white' : 'bg-charcoal-800'}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''} ${transparent ? 'bg-white' : 'bg-charcoal-800'}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''} ${transparent ? 'bg-white' : 'bg-charcoal-800'}`} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu — full-screen on small phones, drawer on larger */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        suppressHydrationWarning
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-400 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

        {/* Drawer */}
        <div className={`absolute top-0 right-0 bottom-0 w-full sm:w-80 max-w-full bg-ivory-50 shadow-luxury-lg transition-transform duration-400 ease-out flex flex-col ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-200">
            <div>
              <div className="font-serif font-bold text-charcoal-800">Hestia Smart Interiors</div>
              <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-sandstone-600 mt-0.5">Powered by HSIOS™</div>
            </div>
            <button onClick={() => setMenuOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-ivory-200 transition-colors" aria-label="Close menu">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
            {navLinks.map(({ href, label, badge }) => (
              <Link key={href} href={href} className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${isActive(href) ? 'bg-sandstone-50 text-sandstone-700' : 'text-charcoal-700 hover:bg-ivory-200'}`}>
                {label}
                {badge && <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-sandstone-100 text-sandstone-700">{badge}</span>}
              </Link>
            ))}

            {/* Who We Serve */}
            <div className="pt-4 border-t border-ivory-200 mt-2 space-y-1">
              <div className="px-4 pb-2 text-[11px] font-bold tracking-widest uppercase text-warmgray-400">Who We Serve</div>
              {solutionLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${isActive(href) ? 'bg-sandstone-50 text-sandstone-700' : 'text-charcoal-700 hover:bg-ivory-200'}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTAs */}
          <div className="px-4 py-5 border-t border-ivory-200 space-y-3" style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
            <Link href="/contact" className="btn btn-bronze w-full justify-center text-sm">Book a Consultation</Link>
            <a
              href="https://os.hsios.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Client login to the HSIOS platform (opens in new tab)"
              className="btn btn-outline-dark w-full justify-center text-sm"
            >
              Client Login
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20HSI%2C%20I%27m%20interested%20in%20discussing%20my%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark w-full justify-center text-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Spacer — only on non-hero pages */}
      {!isHeroPage && <div className="h-16" />}
    </>
  )
}
