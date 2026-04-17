'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Primary nav — 5 links (logo = Home)
const navLinks = [
  { href: '/projects',      label: 'Projects' },
  { href: '/hsi-os',        label: 'HSIOS™' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/pricing',       label: 'Pricing' },
  { href: '/about',         label: 'About' },
]

// Solutions dropdown
const solutionLinks = [
  { href: '/for-homeowners',              label: 'For Homeowners' },
  { href: '/for-developers',              label: 'For Developers' },
  { href: '/for-architects',              label: 'For Architects' },
  { href: '/nri-home-interior-management', label: 'NRI Remote Build' },
  { href: '/demo',                        label: 'Request a Demo' },
]

// Mobile-only extras (not in primary bar)
const mobileExtras = [
  { href: '/how-it-works',   label: 'How It Works' },
  { href: '/sustainability',  label: 'Sustainability' },
  { href: '/insights',        label: 'Insights' },
]

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [menuOpen, setMenuOpen]         = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mounted, setMounted]           = useState(false)
  const pathname  = usePathname()
  const dropRef   = useRef<HTMLLIElement>(null)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 48)
  }, [])

  useEffect(() => {
    setMounted(true)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close on route change
  useEffect(() => { setMenuOpen(false); setDropdownOpen(false) }, [pathname])

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [dropdownOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const isHeroPage = ['/', '/for-homeowners', '/for-developers', '/for-architects', '/hsi-os', '/sustainability', '/pricing', '/demo'].includes(pathname)
  const transparent = isHeroPage && !scrolled && !menuOpen

  return (
    <>
      <header
        className={`
          fixed top-0 inset-x-0 z-50 transition-all duration-500
          ${transparent
            ? 'bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/30 to-transparent'
            : 'bg-ivory-50/96 backdrop-blur-md shadow-luxury border-b border-ivory-200'
          }
        `}
      >
        <nav className="container-luxury flex items-center justify-between h-16 gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div
              className={`
                flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold tracking-widest
                transition-colors duration-300
                ${transparent ? 'bg-white/20 text-white' : 'bg-sandstone-400 text-white'}
              `}
            >
              H
            </div>
            <div className="hidden sm:block">
              <div className={`font-serif font-bold text-base leading-none transition-colors duration-300 ${transparent ? 'text-white' : 'text-charcoal-800'}`}>
                Hestia Smart Interiors
              </div>
              <div className={`font-sans text-[10px] font-semibold tracking-[0.16em] uppercase mt-0.5 transition-colors duration-300 ${transparent ? 'text-white/60' : 'text-sandstone-600'}`}>
                Powered by HSIOS™
              </div>
            </div>
          </Link>

          {/* Desktop Nav — 4 links + Solutions dropdown */}
          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
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
                aria-haspopup="true"
                className={`
                  flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200 whitespace-nowrap
                  ${solutionLinks.some(l => isActive(l.href))
                    ? transparent ? 'text-white bg-white/10' : 'text-sandstone-700 bg-sandstone-50'
                    : transparent
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-warmgray-700 hover:text-charcoal-800 hover:bg-ivory-200'
                  }
                `}
              >
                Solutions
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 rounded-2xl bg-white border border-ivory-200 shadow-luxury overflow-hidden z-50">
                  {solutionLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
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
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className={`
                btn text-sm px-5 py-2.5
                ${transparent
                  ? 'bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-charcoal-800'
                  : 'btn-bronze'
                }
              `}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg transition-colors duration-200 ${transparent ? 'text-white' : 'text-charcoal-800'}`}
          >
            <span className={`block w-5 h-0.5 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''} ${transparent ? 'bg-white' : 'bg-charcoal-800'}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''} ${transparent ? 'bg-white' : 'bg-charcoal-800'}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''} ${transparent ? 'bg-white' : 'bg-charcoal-800'}`} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu — full-screen on small phones, drawer on larger */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
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
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${isActive(href) ? 'bg-sandstone-50 text-sandstone-700' : 'text-charcoal-700 hover:bg-ivory-200'}`}>
                {label}
              </Link>
            ))}

            {/* Solutions */}
            <div className="pt-4 border-t border-ivory-200 mt-2 space-y-1">
              <div className="px-4 pb-2 text-[11px] font-bold tracking-widest uppercase text-warmgray-400">Solutions</div>
              {solutionLinks.map(({ href, label }) => (
                <Link key={href} href={href} className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${isActive(href) ? 'bg-sandstone-50 text-sandstone-700' : 'text-charcoal-700 hover:bg-ivory-200'}`}>
                  {label}
                </Link>
              ))}
            </div>

            {/* More links */}
            <div className="pt-4 border-t border-ivory-200 mt-2 space-y-1">
              <div className="px-4 pb-2 text-[11px] font-bold tracking-widest uppercase text-warmgray-400">More</div>
              {mobileExtras.map(({ href, label }) => (
                <Link key={href} href={href} className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${isActive(href) ? 'bg-sandstone-50 text-sandstone-700' : 'text-charcoal-700 hover:bg-ivory-200'}`}>
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTAs */}
          <div className="px-4 py-5 border-t border-ivory-200 space-y-3" style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
            <Link href="/contact" className="btn btn-bronze w-full justify-center text-sm">Book Consultation</Link>
            <a
              href="https://wa.me/918010234802?text=Hi%20HSI%2C%20I%27m%20interested%20in%20discussing%20my%20project"
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
      {mounted && !isHeroPage && <div className="h-16" />}
    </>
  )
}
