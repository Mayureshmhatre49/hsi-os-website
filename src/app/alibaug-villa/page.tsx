'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  MapPin, Clock, Home, TrendingUp, Shield, CheckCircle,
  ArrowRight, Phone, Mail, AlertTriangle, Layers, Wifi,
  FileText, Eye, Globe, Leaf, Users, ChevronDown,
  Database, Hotel, HeartHandshake, TreePine, Plane,
  Star, Zap, IndianRupee, Check, Wrench, Award,
} from 'lucide-react'

/* ─── shared ease ─────────────────────────────────────────── */
const ease = [0.21, 0.47, 0.32, 0.98] as const

const WA_LINK = "https://wa.me/918010234802?text=Hi%20Hestia%2C%20I'm%20interested%20in%20building%20a%20villa%20in%20Alibaug.%20Please%20share%20more%20details."

/* ─── WhatsApp SVG icon ───────────────────────────────────── */
function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

/* ─── FadeUp wrapper ──────────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-48px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ══════════════════════════════════════════════════════════════
   LANDING NAV  — replaces site Navbar on this page
══════════════════════════════════════════════════════════════ */
function LandingNav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const dark = !scrolled
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      dark
        ? 'bg-charcoal-900/80 backdrop-blur-md'
        : 'bg-ivory-50/96 backdrop-blur-md shadow-luxury border-b border-ivory-200'
    }`}>
      <div className="container-luxury flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold tracking-wider transition-colors duration-300 ${dark ? 'bg-white/20 text-white' : 'bg-sandstone-400 text-white'}`}>H</div>
          <div className="hidden sm:block">
            <div className={`font-serif font-bold text-sm leading-none transition-colors duration-300 ${dark ? 'text-white' : 'text-charcoal-800'}`}>Hestia Villas</div>
            <div className={`text-[9px] font-semibold tracking-[0.16em] uppercase mt-0.5 transition-colors duration-300 ${dark ? 'text-white/50' : 'text-sandstone-600'}`}>Powered by HSI OS</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+918010234802"
            className={`hidden md:flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${dark ? 'text-white/75 hover:text-white' : 'text-charcoal-700 hover:text-charcoal-900'}`}
          >
            <Phone size={13} strokeWidth={2} />
            <span className="hidden lg:inline">+91-8010234802</span>
            <span className="lg:hidden">Call Us</span>
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded-full transition-colors"
          >
            <WhatsAppIcon size={14} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href="#consult"
            className={`btn text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold transition-all duration-300 ${
              dark
                ? 'bg-white/15 text-white border border-white/30 hover:bg-white hover:text-charcoal-800'
                : 'btn-bronze'
            }`}
          >
            Book Consultation
          </a>
        </div>
      </div>
    </header>
  )
}

/* ══════════════════════════════════════════════════════════════
   FLOATING WHATSAPP BUTTON
══════════════════════════════════════════════════════════════ */
function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3500)
    return () => clearTimeout(t)
  }, [])
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-24 right-5 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-luxury-lg transition-all duration-500 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
    >
      <WhatsAppIcon size={26} />
    </a>
  )
}

/* ══════════════════════════════════════════════════════════════
   STICKY BOTTOM CTA BAR
══════════════════════════════════════════════════════════════ */
function StickyCTA() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const h = () => setVisible(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  return (
    <div className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-500 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-charcoal-800 border-t border-white/10 backdrop-blur-md" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="container-luxury flex items-center justify-between gap-4 py-3">
          <div className="hidden sm:block">
            <div className="text-white font-semibold text-sm">Hestia Villas — Alibaug</div>
            <div className="text-warmgray-500 text-xs">₹1 Cr+ · Digital Twin · End-to-End Accountability</div>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
            >
              <WhatsAppIcon size={15} /> WhatsApp
            </a>
            <a href="#consult" className="btn-bronze text-sm px-5 py-2.5">
              Book Consultation <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   QUICK CALLBACK BANNER  (just below hero)
══════════════════════════════════════════════════════════════ */
function QuickCallbackBanner() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email: 'callback@hsios.in',
          message: `Quick Callback Request — Alibaug Villa Landing Page\nPhone: ${phone}`,
          source: 'Quick Callback Banner',
        }),
      })
      setSent(true)
    } catch { /* silent */ } finally { setSending(false) }
  }

  const inputCls = "flex-1 min-w-0 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/50 px-4 py-3 sm:py-2.5 text-sm sm:text-sm focus:border-sandstone-400/60 focus:outline-none transition-all h-12 sm:h-auto min-h-[48px] sm:min-h-auto"

  return (
    <div className="bg-sandstone-700 py-4 sm:py-3 px-4">
      <div className="container-luxury">
        {sent ? (
          <div className="flex items-center justify-center gap-2 text-white text-sm font-medium py-2 sm:py-0">
            <CheckCircle size={16} className="text-green-300 flex-shrink-0" />
            <span>We'll call you within 2 hours during business hours.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="text-white/90 text-sm font-medium sm:whitespace-nowrap sm:flex-shrink-0">
              Get a callback within 2 hours:
            </div>
            <input
              type="text" required placeholder="Your name"
              value={name} onChange={e => setName(e.target.value)}
              autoComplete="name"
              className={inputCls}
            />
            <input
              type="tel" required placeholder="Phone number"
              value={phone} onChange={e => setPhone(e.target.value)}
              autoComplete="tel"
              className={inputCls}
            />
            <button
              type="submit" disabled={sending}
              className="flex-shrink-0 flex items-center justify-center gap-2 bg-white text-sandstone-700 font-bold text-sm px-5 py-3 sm:py-2.5 rounded-xl hover:bg-ivory-100 transition-colors disabled:opacity-60 whitespace-nowrap h-12 sm:h-auto min-h-[48px] sm:min-h-auto w-full sm:w-auto"
            >
              {sending ? 'Sending…' : <>Request Callback <ArrowRight size={14} /></>}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   §1  HERO
══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.85])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[680px] flex items-end overflow-hidden">
      {/* Ken-Burns background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.09 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      >
        <Image
          src="/projects-casa-frangipani-1.jpg"
          alt="Casa Frangipani — Hestia Villas, Alibaug"
          fill
          className="object-cover object-center"
          priority
          quality={92}
        />
      </motion.div>

      {/* Gradient */}
      <motion.div
        className="absolute inset-0 bg-charcoal-900"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 via-charcoal-900/30 to-transparent" />

      {/* Content */}
      <div className="container-luxury relative z-10 pb-16 md:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-7 h-px bg-sandstone-400" />
            <span className="text-sandstone-400 text-[11px] font-semibold tracking-[0.22em] uppercase">
              Hestia Villas × HSI OS — Alibaug
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="font-serif text-display-xl text-white leading-[1.04] tracking-tight mb-5"
          >
            Monsoon-Proof Delivery.<br />
            <em className="not-italic text-sandstone-300">Zero Rework.</em><br />
            Coastal Mastery.
          </motion.h1>

          {/* Services line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-white/60 text-sm"
          >
            {['Architecture', 'Construction', 'Interiors', 'Digital Twin'].map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-sandstone-400/60" />}
                {t}
              </span>
            ))}
          </motion.div>

          {/* Urgency statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2.5 bg-amber-500/20 border border-amber-400/40 rounded-full"
          >
            <AlertTriangle size={14} className="text-amber-300" />
            <span className="text-amber-100 text-sm font-semibold">
              Limited Alibag capacity: Currently accepting 2 new projects this monsoon cycle
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/70 text-lg leading-relaxed max-w-xl mb-9"
          >
            One integrated ecosystem designed for discerning homeowners in Alibaug —
            powered by proprietary execution intelligence unavailable elsewhere.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-10"
          >
            <a href="#consult" className="btn-bronze justify-center sm:justify-start">
              Book A Private Consultation
              <ArrowRight size={15} strokeWidth={2} />
            </a>
            <a href="#casa-frangipani" className="btn-outline-white text-sm justify-center sm:justify-start">
              Explore Casa Frangipani
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap gap-x-7 gap-y-2.5 pt-6 border-t border-white/12"
          >
            {[
              { label: '₹1 Cr+ Minimum Project Scope', Icon: IndianRupee },
              { label: 'End-To-End Accountability', Icon: Shield },
              { label: 'Digital Twin Enabled', Icon: Database },
              { label: 'Powered By HSI OS', Icon: Zap },
            ].map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-2 text-white/50 text-xs">
                <Icon size={12} className="text-sandstone-400" strokeWidth={1.75} />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 right-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 text-white/30"
        >
          <span className="text-[9px] tracking-[0.22em] uppercase">Scroll</span>
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §  STATS BAR
══════════════════════════════════════════════════════════════ */
function StatsBar() {
  const stats = [
    { value: '6+', label: 'Villas Delivered' },
    { value: '₹20 Cr+', label: 'Project Value Managed' },
    { value: '104', label: 'QA Checkpoints / Project' },
    { value: '100%', label: 'Digital Twin Coverage' },
    { value: 'Minimal', label: 'Rework Incidents' },
  ]
  return (
    <div className="bg-charcoal-800 border-b border-white/8">
      <div className="container-luxury py-6 sm:py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-5 sm:gap-y-4 gap-x-4 sm:gap-x-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col justify-center">
              <span className="font-serif text-xl sm:text-2xl font-bold text-sandstone-400 leading-none">{value}</span>
              <span className="text-warmgray-500 text-[9px] sm:text-[10px] tracking-wider uppercase mt-1.5 sm:mt-1 leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   §2  WHY ALIBAUG
══════════════════════════════════════════════════════════════ */
function WhyAlibaugSection() {
  const benefits = [
    { Icon: Clock, title: '90 Minutes From Mumbai', desc: 'By road or ferry — your weekend begins at the door.' },
    { Icon: TreePine, title: 'Space To Breathe', desc: 'Generous plots, open skies, and Konkan coastal air.' },
    { Icon: Users, title: 'Multi-Generational Living', desc: 'Designed for families to gather, grow, and return.' },
    { Icon: Home, title: 'Weekend Retreat', desc: 'The most coveted second-home address in Western India.' },
    { Icon: Hotel, title: 'Hospitality Potential', desc: 'Premium rental yields through managed villa stays.' },
    { Icon: TrendingUp, title: 'Long-Term Appreciation', desc: 'Limited coastal inventory with growing infrastructure.' },
  ]

  return (
    <section className="section-py bg-ivory-100">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Copy */}
          <div>
            <FadeUp>
              <div className="section-label">Why Alibaug</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-5">
                Why Families Are<br />
                <em className="not-italic text-sandstone-600">Choosing Alibaug.</em>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed mb-12 max-w-lg">
                A rare convergence of coastline, climate, and quiet — ninety minutes from the city, an entire world away from it.
              </p>
            </FadeUp>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map(({ Icon, title, desc }, i) => (
                <FadeUp key={title} delay={0.05 + i * 0.06}>
                  <div className="group flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sandstone-100 border border-sandstone-200 flex items-center justify-center flex-shrink-0 group-hover:bg-sandstone-200 transition-colors duration-200">
                      <Icon size={15} className="text-sandstone-600" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-800 text-sm mb-0.5">{title}</div>
                      <div className="text-warmgray-500 text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Images */}
          <FadeUp delay={0.1}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3 h-[500px]">
                <div className="col-span-2 relative rounded-3xl overflow-hidden h-60">
                  <Image src="/hestia-serenity-villa.jpg" alt="Hestia Villas — luxury pool villa, Alibaug" fill className="object-cover" />
                </div>
                <div className="relative rounded-3xl overflow-hidden">
                  <Image src="/hestia-villa-bellissimo.jpg" alt="Hestia Villas Bellissimo — villa entrance, Alibaug" fill className="object-cover" />
                </div>
                <div className="relative rounded-3xl overflow-hidden">
                  <Image src="/hestia-villa-rughani.jpeg" alt="Hestia Villas Rughani — aerial view, Alibaug" fill className="object-cover" />
                </div>
              </div>

              {/* Floating location badge */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -left-5 bottom-16 bg-white rounded-2xl shadow-luxury-md border border-ivory-200 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-sandstone-100 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-sandstone-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal-800 text-sm">Alibaug, Maharashtra</div>
                    <div className="text-warmgray-500 text-[11px]">Konkan Coast · 402201</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §3  THE PROBLEM
══════════════════════════════════════════════════════════════ */
function ProblemSection() {
  const fragments = [
    'Architect', 'Contractor', 'Interior Team',
    'Vendors', 'Smart Home Team', 'Maintenance Team',
  ]
  const outcomes = [
    { pct: '30–40%', label: 'Budget Escalation' },
    { pct: '6–18 Mo', label: 'Typical Delays' },
    { pct: 'None', label: 'Quality Verification' },
    { pct: 'Zero', label: 'Documentation at Handover' },
  ]

  return (
    <section className="section-py bg-charcoal-800 relative overflow-hidden">
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container-luxury relative z-10">
        {/* All children use opacity-only animation — no y-shift inside overflow-hidden */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="section-label" style={{ color: '#C4A882' }}>The Reality</div>
          <h2 className="font-serif text-display-lg text-white mb-4">
            Most Luxury Villas Are<br />
            <em className="not-italic" style={{ color: '#F87171' }}>Built In Chaos.</em>
          </h2>
          <p className="text-warmgray-300 text-lg max-w-xl mb-14 leading-relaxed">
            The typical villa project fragments across six or more independent teams — each with separate agendas, timelines, and no shared accountability.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="text-warmgray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
            Fragmented Ecosystem
          </div>
          <div className="flex flex-wrap gap-3 mb-10">
            {fragments.map((f) => (
              <div key={f} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2.5">
                <div className="w-2 h-2 rounded-full bg-red-400/70" />
                <span className="text-white/75 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
          <div className="flex items-center gap-4 mb-8 text-warmgray-500">
            <div className="flex-1 border-t border-dashed border-white/10" />
            <span className="text-[10px] uppercase tracking-[0.18em]">Common Outcomes</span>
            <div className="flex-1 border-t border-dashed border-white/10" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {outcomes.map(({ pct, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="bg-white/5 border border-red-500/25 rounded-2xl p-5"
            >
              <AlertTriangle size={16} className="text-red-400 mb-3" strokeWidth={1.75} />
              <div className="font-serif text-2xl font-bold text-sandstone-300 mb-1">{pct}</div>
              <div className="text-warmgray-300 text-sm">{label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="rounded-2xl bg-sandstone-600/12 border border-sandstone-400/20 p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-11 h-11 rounded-2xl bg-sandstone-400/15 border border-sandstone-400/20 flex items-center justify-center flex-shrink-0">
              <Shield size={20} className="text-sandstone-400" strokeWidth={1.75} />
            </div>
            <div>
              <div className="text-white font-semibold mb-1">There is a better way.</div>
              <div className="text-warmgray-300 text-sm leading-relaxed">
                Hestia reimagined the entire delivery model — not just one part of it.
              </div>
            </div>
            <a href="#difference" className="sm:ml-auto flex-shrink-0 text-sandstone-400 text-sm font-medium flex items-center gap-2 hover:text-sandstone-300 transition-colors">
              See how <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §3.5  ALIBAG OWNER TESTIMONIAL
══════════════════════════════════════════════════════════════ */
function ALibaugTestimonialSection() {
  return (
    <section className="section-py bg-ivory-100">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Testimonial quote */}
          <FadeUp>
            <div className="mb-8">
              <div className="section-label">Client Voice</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mb-8">
                "I Was Managing My<br/>Alibag Villa From Mumbai.<br/>
                <em className="not-italic text-sandstone-600">HSIOS™ Gave Me Control."</em>
              </h2>
            </div>

            <blockquote className="text-warmgray-700 text-lg leading-relaxed italic mb-8 border-l-4 border-sandstone-400 pl-6">
              "I was terrified managing my Alibag villa while working full-time in Mumbai. With traditional contractors, I'd get vague updates and discover problems months later. HSIOS™ changed everything. I could see every material approval, every trade sequence, every budget decision in real-time. My project finished 3 weeks early with zero cost overruns. For the first time, I felt in control."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-sandstone-200 flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-lg font-bold text-sandstone-700">AB</span>
              </div>
              <div>
                <div className="font-semibold text-charcoal-800">Abhishek Bajoria</div>
                <div className="text-warmgray-500 text-sm">Villa Homeowner · Alibag</div>
              </div>
            </div>
          </FadeUp>

          {/* Proof metrics */}
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Project Completion', value: '3 Weeks Early' },
                { label: 'Budget Overrun', value: 'Zero' },
                { label: 'Real-time Visibility', value: '100%' },
                { label: 'Cost Surprises', value: 'None' },
              ].map(({ label, value }, i) => (
                <div key={label} className="bg-white rounded-2xl border border-ivory-300 p-6 text-center">
                  <div className="font-serif text-2xl font-bold text-sandstone-600 mb-2">{value}</div>
                  <div className="text-warmgray-600 text-xs font-medium">{label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §3.6  PRICING & INVESTMENT CLARITY
══════════════════════════════════════════════════════════════ */
function PricingTransparencySection() {
  return (
    <section className="section-py bg-charcoal-900">
      <div className="container-luxury">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="section-label" style={{ color: '#C4A882' }}>Investment Clarity</div>
            <h2 className="font-serif text-display-md text-white mb-6">
              Know Your Numbers<br />
              <em className="not-italic text-sandstone-300">From Day One.</em>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Typical Budget */}
            <FadeUp delay={0.08}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-sandstone-300 text-xs font-semibold uppercase tracking-wider mb-4">Typical Alibag Villa</div>
                <div className="font-serif text-4xl text-white font-bold mb-2">₹1.5 – 3 Cr</div>
                <div className="text-warmgray-400 text-sm mb-6">
                  Total interior budget (design + materials + execution) for a luxury villa in Alibag
                </div>
                <div className="space-y-3 text-sm text-warmgray-300">
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>5,000–10,000 sqft interior</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Full furnishing & smart systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Marine-grade coastal specifications</span>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Fee Structure */}
            <FadeUp delay={0.14}>
              <div className="bg-white/5 border border-sandstone-400/30 rounded-3xl p-8">
                <div className="text-sandstone-300 text-xs font-semibold uppercase tracking-wider mb-4">Our Fee Structure</div>
                <div className="font-serif text-4xl text-white font-bold mb-2">8–12%</div>
                <div className="text-warmgray-400 text-sm mb-6">
                  Of total project budget. No hidden markup. Baked in from day 1.
                </div>
                <div className="space-y-3 text-sm text-warmgray-300">
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Execution intelligence & oversight</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>HSIOS™ platform & real-time dashboards</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Post-handover documentation & support</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Bottom statement */}
          <FadeUp delay={0.2} className="mt-8 pt-8 border-t border-white/10">
            <p className="text-warmgray-400 text-sm leading-relaxed">
              <span className="text-sandstone-300 font-semibold">No surprises. No last-minute costs.</span> Your Alibag villa budget is approved upfront, tracked in real-time, and delivered as agreed. This is how luxury homes are meant to be built.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §3.7  COASTAL CHALLENGES WITH PROOF
══════════════════════════════════════════════════════════════ */
function CoastalChallengesSection() {
  const challenges = [
    {
      challenge: 'Monsoon Critical Path',
      problem: 'Extreme rainfall, humidity swings, and salt spray compress execution windows into 4-month windows.',
      proof: '7 villas delivered weather-tight on schedule. Zero moisture-related defects at handover.',
      outcome: 'Your home stays on track despite monsoons. No emergency repairs after handover.'
    },
    {
      challenge: 'Marine-Grade Material Intelligence',
      problem: 'Standard ply degrades. Hardware oxidizes. Local material suppliers lack coastal specifications.',
      proof: 'SS-304, marine-grade ply, and salt-resistant finishes standard on every project.',
      outcome: 'Your villa withstands 20+ years of coastal exposure. Not a temporary fix.'
    },
    {
      challenge: 'Remote Owner Visibility',
      problem: 'NRI owners can\'t camp on-site. You need daily proof your money is being spent wisely.',
      proof: 'HSIOS™ platform: real-time budget dashboard, milestone approvals, photo-verified progress.',
      outcome: 'Manage your ₹3Cr villa from Mumbai (or Singapore). Zero surprises.'
    },
  ]

  return (
    <section className="section-py bg-white">
      <div className="container-luxury">
        {/* Header */}
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <div className="section-label">Alibag Execution Proof</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
              Every Coastal Challenge<br />
              <em className="not-italic text-sandstone-600">Is A Solved Problem.</em>
            </h2>
          </div>
        </FadeUp>

        {/* Challenge cards with proof */}
        <div className="space-y-6">
          {challenges.map(({ challenge, problem, proof, outcome }, i) => (
            <FadeUp key={challenge} delay={i * 0.08}>
              <div className="bg-ivory-50 border border-ivory-300 rounded-3xl p-8 lg:p-10">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Challenge + Problem */}
                  <div>
                    <div className="font-serif text-lg font-bold text-charcoal-800 mb-2">{challenge}</div>
                    <p className="text-warmgray-600 text-sm leading-relaxed">{problem}</p>
                  </div>

                  {/* Proof + Outcome */}
                  <div className="lg:border-l lg:border-sandstone-200 lg:pl-8">
                    <div className="flex items-start gap-2 mb-3">
                      <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-warmgray-600 text-sm font-medium">{proof}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight size={14} className="text-sandstone-600 mt-1 flex-shrink-0" />
                      <div className="text-charcoal-800 text-sm font-semibold italic">{outcome}</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §3.9  ALIBAG EXECUTION TIMELINE (VISUAL)
══════════════════════════════════════════════════════════════ */
function AlibaugTimelineSection() {
  const phases = [
    {
      phase: 'Pre-Construction',
      duration: 'Months 1–2',
      icon: FileText,
      color: 'sandstone',
      tasks: [
        'GFC finalization with architect',
        'Material specifications & approvals',
        'Vendor pre-qualification (coastal-grade suppliers)',
        'Budget lock-in (no surprises)',
      ],
      highlight: 'Dry season prep while planning construction',
    },
    {
      phase: 'Material Procurement',
      duration: 'Months 2–4',
      icon: Layers,
      color: 'bronze',
      tasks: [
        'Batch-procure 100% of premium materials from Mumbai',
        'Marine-grade ply, SS-304 hardware, coastal paints in stock',
        'Smart home systems pre-tested',
        'Zero daily shortages killing momentum',
      ],
      highlight: 'Complete before monsoon hits',
    },
    {
      phase: 'Execution Milestones',
      duration: 'Months 4–18',
      icon: CheckCircle,
      color: 'green',
      tasks: [
        'Dry-season critical work first (structural, electrical, plumbing)',
        'Monsoon-safe sequences (no wet tasks during rain)',
        'Weekly milestone verification & photo documentation',
        'Real-time budget tracking & approvals',
      ],
      highlight: 'Weather-engineered sequencing prevents delays',
    },
    {
      phase: 'Post-Handover',
      duration: 'Month 18 +',
      icon: Eye,
      color: 'teal',
      tasks: [
        '2-year defect tracking & warranty management',
        'Digital Twin maintains all documentation',
        'Preventive maintenance schedules',
        'Lifetime asset intelligence for your home',
      ],
      highlight: 'Support doesn\'t end at handover',
    },
  ]

  return (
    <section className="section-py bg-charcoal-50">
      <div className="container-luxury">
        {/* Header */}
        <FadeUp>
          <div className="max-w-2xl mb-16">
            <div className="section-label">Alibag Execution Timeline</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
              How We Deliver On<br />
              <em className="not-italic text-sandstone-600">Your Monsoon Timeline.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              From GFC finalization to post-handover ownership, every phase is engineered
              around monsoon windows, not despite them. Here's exactly how we do it.
            </p>
          </div>
        </FadeUp>

        {/* Timeline grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {phases.map(({ phase, duration, icon: Icon, color, tasks, highlight }, i) => {
            const colorMap = {
              sandstone: 'bg-sandstone-100 border-sandstone-300 text-sandstone-700',
              bronze: 'bg-amber-100 border-amber-300 text-amber-700',
              green: 'bg-green-100 border-green-300 text-green-700',
              teal: 'bg-teal-100 border-teal-300 text-teal-700',
            }

            return (
              <FadeUp key={phase} delay={i * 0.08}>
                <div className={`border-2 rounded-3xl p-6 relative ${colorMap[color as keyof typeof colorMap]}`}>
                  {/* Phase number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-white border-2 border-current flex items-center justify-center font-serif font-bold text-sm">
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <Icon size={24} className="mb-4 opacity-70" strokeWidth={1.5} />

                  {/* Phase name */}
                  <h3 className="font-serif text-xl font-bold mb-1">{phase}</h3>
                  <div className="text-sm font-semibold opacity-75 mb-4">{duration}</div>

                  {/* Tasks */}
                  <ul className="space-y-2 mb-4 text-sm">
                    {tasks.map((task) => (
                      <li key={task} className="flex gap-2 opacity-80">
                        <span className="text-lg leading-none">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight */}
                  <div className="pt-4 border-t-2 border-current/20">
                    <div className="text-xs font-bold opacity-70 uppercase tracking-wider">Key Point</div>
                    <div className="text-sm font-semibold mt-1">{highlight}</div>
                  </div>

                  {/* Connector arrow */}
                  {i < phases.length - 1 && (
                    <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight size={20} className="text-charcoal-400" />
                    </div>
                  )}
                </div>
              </FadeUp>
            )
          })}
        </div>

        {/* Bottom callout */}
        <FadeUp delay={0.32}>
          <div className="rounded-3xl bg-white border border-charcoal-200 p-8 text-center">
            <p className="text-warmgray-600 text-lg mb-3">
              <span className="text-charcoal-800 font-semibold">Casa Frangipani followed this exact timeline.</span> Started Month 1. Finished Month 17. Handed over in June (before monsoon). Owner moved in with zero water damage, zero rework.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-sandstone-700 font-medium">
              <Check size={14} /> This is not theory. This is our proven system.
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §4  THE HESTIA DIFFERENCE
══════════════════════════════════════════════════════════════ */
function DifferenceSection() {
  const steps = [
    { n: '01', label: 'Vision', desc: 'Brief, site study, feasibility. Every aspiration documented before a single sketch is drawn.' },
    { n: '02', label: 'Design', desc: 'Architecture, landscape, and interiors coordinated from day one — not stitched together later.' },
    { n: '03', label: 'Construction', desc: 'Single accountable team. Milestone-verified progress. No surprises.' },
    { n: '04', label: 'Interiors', desc: 'Specifications enforced. Procurement managed. Zero substitutions without approval.' },
    { n: '05', label: 'Smart Home', desc: 'Planned from the slab, not retrofitted at handover — wiring runs correctly the first time.' },
    { n: '06', label: 'Digital Twin', desc: 'Every layer documented. Every vendor recorded. For life.' },
    { n: '07', label: 'Ownership', desc: 'Asset registry, maintenance tracking, service history. The intelligence stays with the property.' },
  ]

  return (
    <section id="difference" className="section-py bg-white">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Sticky headline */}
          <div className="lg:sticky lg:top-28">
            <FadeUp>
              <div className="section-label">The Hestia Difference</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-6">
                One Team.<br />
                One System.<br />
                <em className="not-italic text-sandstone-600">One Accountability.</em>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed mb-8 max-w-md">
                We don't coordinate between vendors. We are the single accountable entity — from the first conversation to the last maintenance record.
              </p>
              <a href="#consult" className="btn-bronze inline-flex">
                Book A Consultation <ArrowRight size={14} />
              </a>
            </FadeUp>
          </div>

          {/* Connected steps */}
          <div className="relative pl-10">
            <div className="absolute left-3 top-4 bottom-4 w-px bg-gradient-to-b from-sandstone-300 via-sandstone-200 to-transparent" />
            <div className="space-y-8">
              {steps.map(({ n, label, desc }, i) => (
                <FadeUp key={n} delay={i * 0.07}>
                  <div className="relative">
                    {/* Node */}
                    <div className="absolute -left-10 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-sandstone-400 flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-sandstone-400" />
                    </div>
                    <div className="font-serif text-[10px] text-sandstone-400 tracking-widest mb-1">{n}</div>
                    <div className="font-semibold text-charcoal-800 mb-1">{label}</div>
                    <div className="text-warmgray-500 text-sm leading-relaxed">{desc}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §4.5  FEATURED PROJECT CASE STUDY
══════════════════════════════════════════════════════════════ */
function FeaturedProjectSection() {
  const stats = [
    { label: 'Interior Budget', value: '₹2.8 Cr', detail: 'Luxury villa interiors, fully furnished' },
    { label: 'Timeline', value: '18 Months', detail: 'From design to handover, monsoon-inclusive' },
    { label: 'Completion Status', value: '3 Weeks Early', detail: 'Despite 4 monsoon-critical phases' },
    { label: 'Cost Variance', value: 'Zero', detail: 'Final budget = approved budget' },
    { label: 'Post-Handover Issues', value: 'Zero', detail: 'No material defects, no callbacks' },
    { label: 'Owner Satisfaction', value: '10/10', detail: 'Delivered exactly as designed' },
  ]

  return (
    <section className="section-py bg-white">
      <div className="container-luxury">
        {/* Header */}
        <FadeUp>
          <div className="max-w-2xl mb-12">
            <div className="section-label">Flagship Project</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
              Casa Frangipani:<br />
              <em className="not-italic text-sandstone-600">When Everything Works.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              Our flagship Alibag project. ₹2.8 Cr luxury villa interior, delivered 3 weeks early, zero rework,
              zero cost surprises. This is what Alibag execution looks like when system meets mastery.
            </p>
          </div>
        </FadeUp>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {stats.map(({ label, value, detail }, i) => (
            <FadeUp key={label} delay={i * 0.07}>
              <div className="bg-ivory-50 border border-ivory-300 rounded-2xl p-6">
                <div className="text-warmgray-500 text-xs font-semibold uppercase tracking-wider mb-2">{label}</div>
                <div className="font-serif text-3xl font-bold text-sandstone-600 mb-1">{value}</div>
                <div className="text-warmgray-500 text-sm">{detail}</div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Key challenge breakdown */}
        <FadeUp>
          <div className="bg-charcoal-50 border border-charcoal-100 rounded-3xl p-8 lg:p-10">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* The Challenge */}
              <div>
                <div className="text-charcoal-600 text-xs font-semibold uppercase tracking-wider mb-3">The Challenge</div>
                <h3 className="font-serif text-xl text-charcoal-800 mb-2">Monsoon-Critical Sequencing</h3>
                <p className="text-warmgray-600 text-sm leading-relaxed">
                  Casa Frangipani spans 4 monsoon-critical phases. One unmanaged rain event could destroy finishes worth ₹50+ Lakh. Typical contractors panic. We execute.
                </p>
              </div>

              {/* The Solution */}
              <div>
                <div className="text-sandstone-600 text-xs font-semibold uppercase tracking-wider mb-3">Our Solution</div>
                <h3 className="font-serif text-xl text-charcoal-800 mb-2">Weather-Engineered Timeline</h3>
                <p className="text-warmgray-600 text-sm leading-relaxed">
                  We frontload dry-season work, pre-procure marine-grade materials, and sequence trades around rain forecasts. Every milestone verified before monsoon risk hits.
                </p>
              </div>

              {/* The Result */}
              <div>
                <div className="text-green-600 text-xs font-semibold uppercase tracking-wider mb-3">The Result</div>
                <h3 className="font-serif text-xl text-charcoal-800 mb-2">Delivered 3 Weeks Early</h3>
                <p className="text-warmgray-600 text-sm leading-relaxed">
                  Owner moved in June (2 months before monsoon season). All finishes weather-tested. Zero water damage. Zero rework. This is what happens when discipline meets coastal execution.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* CTA */}
        <div className="mt-10 text-center">
          <FadeUp delay={0.15}>
            <p className="text-warmgray-600 text-sm mb-5">Ready to build your Alibag villa with the same precision?</p>
            <a href="#consult" className="btn-bronze inline-flex">
              Book A Consultation <ArrowRight size={14} />
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §4.7  ALIBAG EXECUTION FAQs
══════════════════════════════════════════════════════════════ */
function AlibaugFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const faqs = [
    {
      q: 'How do you manage monsoon delays when building in Alibag?',
      a: 'We engineer the timeline around monsoon windows, not despite them. Critical dry-season work is front-loaded. Materials are pre-procured from Mumbai before monsoon. Trade sequencing is planned so water-sensitive tasks (painting, electrical final runs, smart systems) happen only in dry months. We track weather forecasts 90 days out. Result: Casa Frangipani finished 3 weeks early despite 4 monsoon-critical phases.'
    },
    {
      q: 'Can I manage my Alibag villa from Mumbai or abroad?',
      a: 'Yes — that\'s exactly why we built HSIOS™. Real-time budget dashboard shows every rupee spent and committed. Photo-verified milestone approvals let you see progress daily. Video walkthroughs at 3 critical stages. You approve material changes from anywhere. NRI clients manage their villas this way. One client (Niket Murdeshwar) built his Alibag home from Hong Kong with zero surprises.'
    },
    {
      q: 'What makes your coastal materials different from standard villa builders?',
      a: 'Standard plywood warps in humidity. Standard hardware rusts in salt air. We specify SS-304 hinges, marine-grade ply (structural + non-structural), salt-resistant paints, and stainless-steel mesh for all openings. Every material has been tested for 20+ years in coastal climates. This costs 3–5% more upfront but eliminates ₹50+ Lakh in repairs over the villa\'s lifetime.'
    },
    {
      q: 'How much does a typical Alibag villa interior cost?',
      a: 'Typical budget: ₹1.5–3 Crore for a 5,000–10,000 sqft villa with full furnishing and smart systems. Our fee is 8–12% of total budget, baked in from day 1 — no hidden costs. For a ₹2 Cr project, expect a 8–10% fee (₹16–20 Lakh). This covers execution intelligence, platform access, real-time dashboards, and post-handover support.'
    },
    {
      q: 'What happens if I want to change materials mid-project?',
      a: 'Changes are approved in HSIOS™ before execution. If you want to upgrade from standard ceramic to Italian marble, the cost delta is calculated, you approve it online, and we adjust the timeline if needed. No surprises. No "I found out at handover." Every change is documented and tied to your budget.'
    },
    {
      q: 'Do you work with my existing Mumbai architect?',
      a: 'Yes — your architect keeps full design control. We don\'t redesign. We execute what\'s on the drawings with accountability and intelligence. Your architect approves material specifications, trade sequencing, and milestone handoffs. This eliminates the typical conflict between architect (who designed it) and contractor (who\'s incentivized to cut corners).'
    },
    {
      q: 'What if there\'s a defect after I move in?',
      a: 'Ownership Mode begins at handover. We document every layer (finishes, installations, warranty dates). Post-handover defect tracking for 2 years — any moisture, paint, or fixture issues we handle immediately. Preventive maintenance schedules are in your Digital Twin so you know when to service HVAC, check plumbing, update smart systems. This is not typical — most builders disappear after handover.'
    },
    {
      q: 'Why should I choose Hestia over hiring an architect + independent contractor?',
      a: 'Traditional model: You hire Architect → Architect hires Contractor → Contractor hires subcontractors. Accountability is fragmented. If walls crack, the architect blames the contractor, the contractor blames subcontractors. You lose. Hestia model: One team, one P&L, one accountability. We eat the cost of defects, not you. That alignment is worth the premium.'
    },
  ]

  return (
    <section className="section-py bg-ivory-100">
      <div className="container-luxury">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <div className="section-label">Common Questions</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
              Alibag Execution<br />
              <em className="not-italic text-sandstone-600">Questions Answered.</em>
            </h2>
          </div>
        </FadeUp>

        {/* FAQ accordion */}
        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <FadeUp key={faq.q} delay={i * 0.05}>
              <div className="bg-white border border-ivory-300 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-6 sm:p-5 hover:bg-ivory-50 transition-colors text-left min-h-[56px] sm:min-h-auto active:bg-ivory-100 sm:active:bg-inherit"
                >
                  <h3 className="font-semibold text-charcoal-800 leading-relaxed pr-4 text-sm sm:text-base">{faq.q}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-sandstone-600 flex-shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIdx === i && (
                  <div className="border-t border-ivory-200 px-6 py-5 sm:px-6 sm:py-4 bg-ivory-50">
                    <p className="text-warmgray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.4} className="mt-12 text-center">
          <p className="text-warmgray-600 text-sm mb-5">Still have questions?</p>
          <a href="#consult" className="btn-bronze inline-flex">
            Book A Consultation <ArrowRight size={14} />
          </a>
        </FadeUp>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §5  CASA FRANGIPANI
══════════════════════════════════════════════════════════════ */
function CasaFrangipaniSection() {
  return (
    <section id="casa-frangipani" className="section-py bg-ivory-100">
      <div className="container-luxury">
        <FadeUp>
          <div className="section-label">Proof, Not Promise</div>
          <h2 className="font-serif text-display-lg text-charcoal-800 mb-4 max-w-3xl">
            What Happens When Great Design<br />
            <em className="not-italic text-sandstone-600">Meets Intelligent Execution.</em>
          </h2>
          <p className="text-warmgray-600 text-lg leading-relaxed max-w-2xl mb-12">
            Casa Frangipani is not a render. It is a delivered, documented, occupied villa — our
            flagship proof that Alibaug can produce homes of international calibre.
          </p>
        </FadeUp>

        {/* Editorial grid */}
        <div className="grid grid-cols-12 gap-3 lg:gap-4 mb-10">
          {/* Hero image */}
          <FadeUp className="col-span-12 md:col-span-8">
            <div className="relative h-72 md:h-[520px] rounded-3xl overflow-hidden">
              <Image
                src="/projects-casa-frangipani-1.jpg"
                alt="Casa Frangipani — Hestia Villas Alibaug"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="font-serif text-xl text-white font-bold mb-0.5">Casa Frangipani</div>
                <div className="text-white/60 text-xs flex items-center gap-1.5">
                  <MapPin size={10} /> Dhokawade, Alibaug
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right column */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3 lg:gap-4">
            <FadeUp delay={0.08} className="flex-1">
              <div className="relative rounded-3xl overflow-hidden h-60 md:h-full">
                <Image src="/projects-casa-frangipani-2.jpg" alt="Casa Frangipani interior" fill className="object-cover" />
              </div>
            </FadeUp>
            <FadeUp delay={0.14} className="flex-1">
              <div className="relative rounded-3xl overflow-hidden h-60 md:h-full">
                <Image src="/projects-casa-frangipani-3.jpg" alt="Casa Frangipani detail" fill className="object-cover" />
              </div>
            </FadeUp>
          </div>

          {/* Bottom-left image */}
          <FadeUp delay={0.1} className="col-span-12 md:col-span-4">
            <div className="relative h-52 rounded-3xl overflow-hidden">
              <Image src="/casa-frangipani-7a4576.jpg" alt="Casa Frangipani exterior" fill className="object-cover" />
            </div>
          </FadeUp>

          {/* Specs card */}
          <FadeUp delay={0.14} className="col-span-12 md:col-span-4">
            <div className="h-52 rounded-3xl bg-charcoal-800 p-6 flex flex-col justify-between">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-sandstone-400">
                Project Specifications
              </div>
              <div className="space-y-2">
                {[
                  ['Configuration', '6 Bedroom Villa'],
                  ['Location', 'Dhokawade, Alibaug'],
                  ['Delivery', 'Turnkey — End to End'],
                  ['Smart Home', 'Fully Integrated'],
                  ['Grade', 'Hospitality Standard'],
                  ['Platform', 'HSI OS — Managed'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 text-xs">
                    <span className="text-warmgray-500 flex-shrink-0">{k}</span>
                    <span className="text-white/85 font-medium text-right">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Testimonial card */}
          <FadeUp delay={0.18} className="col-span-12 md:col-span-4">
            <div className="h-52 rounded-3xl bg-sandstone-600/10 border border-sandstone-200/30 p-6 flex flex-col justify-between">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-sandstone-500 fill-sandstone-500" />
                ))}
              </div>
              <blockquote className="text-charcoal-700 text-sm leading-relaxed italic">
                "The documentation alone was worth the premium. Three years later, every valve,
                every circuit, every vendor record — still accessible."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/nishant-mhatre.jpg" alt="Nishant Mhatre" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-charcoal-800 text-xs font-semibold">Nishant Mhatre</div>
                  <div className="text-warmgray-500 text-[10px]">Owner, Casa Frangipani</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp>
          <a
            href="https://villa.hestiavillas.in/casa-frangipani-luxury-villa-rental-alibaug"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark inline-flex"
          >
            Visit Casa Frangipani <ArrowRight size={14} />
          </a>
        </FadeUp>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §6  DIGITAL TWIN
══════════════════════════════════════════════════════════════ */
const LAYERS = [
  { id: 'arch',    label: 'Architecture',     color: '#C4A882' },
  { id: 'struct',  label: 'Structure',        color: '#B5956E' },
  { id: 'elec',    label: 'Electrical',       color: '#FBBF24' },
  { id: 'plumb',   label: 'Plumbing',         color: '#60A5FA' },
  { id: 'hvac',    label: 'HVAC',             color: '#34D399' },
  { id: 'furn',    label: 'Furniture',        color: '#A78BFA' },
  { id: 'smart',   label: 'Smart Devices',    color: '#FB923C' },
  { id: 'warranty',label: 'Warranty Records', color: '#F472B6' },
  { id: 'service', label: 'Service History',  color: '#94A3B8' },
]

function DigitalTwinSection() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [autoIdx, setAutoIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setAutoIdx(p => (p + 1) % LAYERS.length), 1900)
    return () => clearInterval(t)
  }, [])

  const displayIdx = activeId ? LAYERS.findIndex(l => l.id === activeId) : autoIdx
  const activeColor = LAYERS[displayIdx]?.color ?? '#C4A882'

  return (
    <section className="section-py bg-charcoal-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,rgba(196,168,130,0.07),transparent)]" />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <FadeUp>
              <div className="section-label" style={{ color: '#C4A882' }}>Digital Twin</div>
              <h2 className="font-serif text-display-lg text-white mb-5">
                Your Home Should<br />
                <em className="not-italic text-sandstone-300">Never Lose Its Memory.</em>
              </h2>
              <p className="text-warmgray-400 text-lg leading-relaxed mb-8">
                Every Hestia home receives a Digital Twin — a living, queryable record of every
                architectural decision, installation, vendor, and warranty. Not just at handover.
                For the life of the building.
              </p>
            </FadeUp>

            <div className="space-y-3">
              {[
                {
                  year: '2 Years After Handover',
                  desc: 'An appliance fails. Open HSI OS. Warranty details, vendor contact, installation date — retrieved in seconds.',
                },
                {
                  year: '5 Years Later',
                  desc: 'Renovating a bathroom. Every pipe, every junction, every waterproofing layer — mapped and documented.',
                },
                {
                  year: '10 Years On',
                  desc: 'The next generation inherits the property. They inherit the intelligence. Nothing is lost.',
                },
              ].map(({ year, desc }, i) => (
                <FadeUp key={year} delay={0.06 + i * 0.07}>
                  <div className="flex gap-4 p-4 rounded-2xl bg-white/4 border border-white/8">
                    <div
                      className="w-0.5 rounded-full flex-shrink-0 self-stretch"
                      style={{ backgroundColor: activeColor, transition: 'background-color 0.5s' }}
                    />
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5" style={{ color: activeColor, transition: 'color 0.5s' }}>
                        {year}
                      </div>
                      <div className="text-warmgray-300 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Layer visualization */}
          <FadeUp delay={0.12}>
            <div className="bg-white/4 border border-white/10 rounded-3xl p-6 lg:p-8">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-sandstone-400 mb-6">
                Digital Twin Layers — Interactive
              </div>

              {/* Stacked layers */}
              <div className="relative h-52 mb-6 flex items-center justify-center select-none">
                {LAYERS.map((layer, i) => {
                  const isActive = i === displayIdx
                  const baseW = 90 - i * 2.5
                  const bottomOffset = i * 7
                  return (
                    <motion.div
                      key={layer.id}
                      className="absolute rounded-lg border flex items-center px-3"
                      style={{
                        width: `${baseW}%`,
                        height: 28,
                        bottom: bottomOffset,
                        zIndex: isActive ? 20 : i + 1,
                        borderColor: isActive ? layer.color : 'rgba(255,255,255,0.07)',
                        backgroundColor: isActive ? `${layer.color}22` : 'rgba(255,255,255,0.03)',
                      }}
                      animate={{ scale: isActive ? 1.03 : 1, opacity: isActive ? 1 : 0.45 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isActive && (
                        <motion.span
                          key={layer.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-[10px] font-semibold whitespace-nowrap"
                          style={{ color: layer.color }}
                        >
                          {layer.label}
                        </motion.span>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* Toggle buttons */}
              <div className="flex flex-wrap gap-2">
                {LAYERS.map((layer, i) => {
                  const isActive = i === displayIdx
                  return (
                    <button
                      key={layer.id}
                      onClick={() => setActiveId(activeId === layer.id ? null : layer.id)}
                      className="text-[10px] px-2.5 py-1.5 rounded-lg border transition-all duration-300 cursor-pointer"
                      style={{
                        borderColor: isActive ? layer.color : 'rgba(255,255,255,0.1)',
                        color: isActive ? layer.color : 'rgba(255,255,255,0.4)',
                        backgroundColor: isActive ? `${layer.color}18` : 'transparent',
                      }}
                    >
                      {layer.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §7  OWNERSHIP MODE
══════════════════════════════════════════════════════════════ */
function OwnershipSection() {
  const features = [
    { Icon: Database,       title: 'Asset Registry',    desc: 'Every fixture, appliance, and material — catalogued with specifications, sources, and warranty details.' },
    { Icon: Wrench,         title: 'Maintenance Tracking', desc: 'Scheduled reminders, service logs, and full lifecycle management for every system.' },
    { Icon: FileText,       title: 'Service History',   desc: 'Complete record of every technician visit, repair, and upgrade — permanently accessible.' },
    { Icon: Shield,         title: 'Warranty Management', desc: 'Warranty periods tracked, expiry alerts surfaced, claims documented and retrievable.' },
    { Icon: Eye,            title: 'Remote Visibility', desc: 'Monitor your property from anywhere in the world through HSI OS.' },
    { Icon: HeartHandshake, title: 'Ongoing Support',   desc: 'The Hestia relationship doesn\'t end at handover. We remain your intelligent property partner.' },
  ]

  return (
    <section className="section-py bg-white">
      <div className="container-luxury">
        <div className="text-center mb-14">
          <FadeUp>
            <div className="section-label mx-auto">Ownership Mode</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
              The Relationship Doesn't<br />
              <em className="not-italic text-sandstone-600">End At Handover.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Traditional builders hand over keys and disappear. Hestia begins a different relationship —
              one built on continuous intelligence, not occasional maintenance visits.
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ Icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.07}>
              <div className="group h-full p-7 rounded-3xl border border-ivory-300 bg-ivory-50 hover:border-sandstone-300 hover:bg-white hover:shadow-luxury transition-all duration-300">
                <div className="w-11 h-11 rounded-2xl bg-sandstone-100 border border-sandstone-200 flex items-center justify-center mb-5 group-hover:bg-sandstone-200 transition-colors">
                  <Icon size={17} className="text-sandstone-600" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-charcoal-800 mb-2">{title}</h3>
                <p className="text-warmgray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Contrast strip */}
        <FadeUp delay={0.1} className="mt-8">
          <div className="rounded-3xl bg-charcoal-800 p-8 lg:p-10 grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-red-400 mb-4">
                Traditional Builder
              </div>
              {[
                'Hands over keys and disappears',
                'No documentation at handover',
                'Warranty claims become your burden',
                'No visibility into your own property',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 mb-3 text-warmgray-300 text-sm">
                  <div className="w-4 h-4 rounded-full bg-red-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-[8px] font-bold">✕</span>
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-sandstone-400 mb-4">
                Hestia Ownership Mode
              </div>
              {[
                'Ongoing intelligent property partnership',
                'Complete digital twin at handover',
                'Warranty tracking and expiry alerts built in',
                'Full remote visibility through HSI OS',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 mb-3 text-white/80 text-sm">
                  <div className="w-4 h-4 rounded-full bg-sandstone-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={8} className="text-sandstone-400" strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §8  HSI OS
══════════════════════════════════════════════════════════════ */
function HsiOsSection() {
  const features = [
    { label: 'Project Visibility',   desc: 'Real-time milestone tracking across every trade.' },
    { label: 'Budget Intelligence',  desc: 'Every rupee tracked against approved BOQ.' },
    { label: 'Quality Gates',        desc: '104 sign-offs before the next trade deploys.' },
    { label: 'Procurement Control',  desc: 'Specifications locked before sourcing begins.' },
    { label: 'Documentation Engine', desc: 'Every decision captured, timestamped, searchable.' },
    { label: 'Digital Twin',         desc: 'Living record of the entire built asset — forever.' },
  ]

  const DashboardCard = ({ projectName, status = 'Active', data }: any) => (
    <div className="relative">
      <div className="bg-charcoal-800 rounded-3xl p-6 shadow-luxury-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-sandstone-400 mb-0.5">HSI OS</div>
            <div className="text-white font-semibold text-sm">{projectName}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-medium">{status}</span>
          </div>
        </div>

        {/* Progress bars */}
        <div className="space-y-3.5 mb-6">
          {data.map(({ label, pct }: any) => (
            <div key={label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-warmgray-400">{label}</span>
                <span className="text-sandstone-400 font-semibold">{pct}%</span>
              </div>
              <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-sandstone-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease: 'easeOut', delay: 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mini stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Milestones', value: '34/40' },
            { label: 'QA Gates',   value: '87/104' },
            { label: 'On Budget',  value: '98.2%' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white/5 rounded-xl p-3 text-center">
              <div className="font-serif text-lg font-bold text-sandstone-300">{value}</div>
              <div className="text-warmgray-500 text-[9px] uppercase tracking-wider mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section className="section-py bg-ivory-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sandstone-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Dashboards */}
          <div className="space-y-4">
            <FadeUp>
              <DashboardCard
                projectName="Casa Frangipani — Live Dashboard"
                data={[
                  { label: 'Civil & Structure', pct: 100 },
                  { label: 'Electrical Works',  pct: 88 },
                  { label: 'Joinery & Finishes',pct: 72 },
                  { label: 'Smart Systems',     pct: 45 },
                ]}
              />
            </FadeUp>

            <FadeUp delay={0.08}>
              <DashboardCard
                projectName="Bellissimo — Active Project"
                status="In Progress"
                data={[
                  { label: 'Foundation & Slab', pct: 95 },
                  { label: 'MEP Installation',  pct: 65 },
                  { label: 'Wall Finishes',     pct: 38 },
                  { label: 'Furnishings',       pct: 12 },
                ]}
              />
            </FadeUp>
          </div>

          {/* Right: Copy */}
          <div>
            <FadeUp>
              <div className="section-label">HSI OS</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
                The Intelligence Layer<br />
                <em className="not-italic text-sandstone-600">Behind Every Hestia Home.</em>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed mb-8">
                HSI OS is not project management software. It is the execution intelligence layer —
                translating design intent into verified, documented, milestone-accountable delivery.
              </p>
            </FadeUp>

            <div className="grid grid-cols-2 gap-3">
              {features.map(({ label, desc }, i) => (
                <FadeUp key={label} delay={i * 0.06}>
                  <div className="p-4 rounded-2xl bg-ivory-50 border border-ivory-300 hover:border-sandstone-200 transition-colors">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-sandstone-400" />
                      <div className="text-charcoal-800 font-semibold text-sm">{label}</div>
                    </div>
                    <div className="text-warmgray-500 text-xs leading-relaxed">{desc}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.15} className="mt-6">
              <a
                href="https://os.hsios.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark inline-flex text-sm"
              >
                Explore HSI OS <ArrowRight size={13} />
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §9  NRI OWNERSHIP
══════════════════════════════════════════════════════════════ */
function NriSection() {
  const locations = ['Mumbai', 'Dubai', 'Singapore', 'London', 'New York', 'Sydney']

  return (
    <section className="section-py bg-charcoal-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(196,168,130,0.06),transparent_55%)]" />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeUp>
              <div className="section-label" style={{ color: '#C4A882' }}>NRI Owners</div>
              <h2 className="font-serif text-display-lg text-white mb-4">
                Not In Alibaug?<br />
                <em className="not-italic text-sandstone-300">You Don't Need To Be.</em>
              </h2>
              <p className="text-warmgray-400 text-lg leading-relaxed mb-8">
                Distance is not a constraint. HSI OS gives you complete, real-time visibility into
                your project and your property — from any timezone, at any stage of construction
                or ownership.
              </p>
            </FadeUp>

            <div className="space-y-3 mb-8">
              {[
                'Live milestone updates with verified photography',
                'Budget dashboard updated in real time',
                'Vendor approvals and sign-offs, executed remotely',
                'Property status and maintenance, always accessible',
                'No site visits required to remain fully informed',
              ].map((item, i) => (
                <FadeUp key={item} delay={0.05 + i * 0.05}>
                  <div className="flex items-start gap-3 text-warmgray-300 text-sm">
                    <CheckCircle size={14} className="text-sandstone-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    {item}
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.2}>
              <a href="#consult" className="btn-bronze inline-flex">
                Schedule An NRI Consultation <ArrowRight size={14} />
              </a>
            </FadeUp>
          </div>

          {/* Locations */}
          <FadeUp delay={0.1}>
            <div className="bg-white/4 rounded-3xl border border-white/10 p-7 lg:p-8">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-sandstone-400 mb-6">
                <Globe size={11} />
                Our Clients Are Everywhere
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {locations.map((loc, i) => (
                  <motion.div
                    key={loc}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.09, duration: 0.5 }}
                    className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-sandstone-400 flex-shrink-0" />
                    <div>
                      <div className="text-white/80 text-sm font-medium">{loc}</div>
                      <div className="text-warmgray-600 text-[10px]">Active NRI Clients</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-3 bg-sandstone-600/12 border border-sandstone-400/20 rounded-2xl p-4">
                <Wifi size={15} className="text-sandstone-400 flex-shrink-0" strokeWidth={1.75} />
                <p className="text-warmgray-300 text-sm leading-relaxed">
                  Full project visibility through HSI OS — no flights required.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §10  SUSTAINABILITY
══════════════════════════════════════════════════════════════ */
function SustainabilitySection() {
  const principles = [
    { Icon: Layers,     title: 'Better Planning',       desc: 'Conflicts resolved before work begins — no demolition, no redo.' },
    { Icon: FileText,   title: 'Precise Procurement',   desc: 'BOQ-locked sourcing eliminates over-ordering and material waste.' },
    { Icon: TrendingUp, title: 'Longer Lifecycle',      desc: 'Documented assets are maintained intelligently, not reactively.' },
    { Icon: Leaf,       title: 'Efficient Resources',   desc: 'The right quantity, the right specification, at the right time.' },
    { Icon: Shield,     title: 'Quality By Design',     desc: 'Get it right once. Rework is the least sustainable outcome.' },
  ]

  return (
    <section className="section-py bg-white">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeUp>
              <div className="section-label">Sustainability</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
                Intelligent Homes<br />
                <em className="not-italic text-sandstone-600">Waste Less.</em>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed mb-8">
                Sustainability isn't a feature — it's a consequence of building intelligently.
                Precision planning, documented procurement, and rework-free execution produce
                homes that consume less and last longer.
              </p>
            </FadeUp>

            <div className="space-y-4">
              {principles.map(({ Icon, title, desc }, i) => (
                <FadeUp key={title} delay={i * 0.06}>
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-emerald-700" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-800 text-sm mb-0.5">{title}</div>
                      <div className="text-warmgray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Metrics grid */}
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 'Minimal', unit: 'Rework Incidents', sub: 'Across all delivered projects' },
                { value: '104',  unit: 'QA Checkpoints',   sub: 'Per full project lifecycle' },
                { value: '30+',  unit: 'Days Saved',       sub: 'Through pre-execution planning' },
                { value: '100%', unit: 'Documentation',    sub: 'Complete at handover' },
              ].map(({ value, unit, sub }) => (
                <div key={unit} className="bg-ivory-50 border border-ivory-300 rounded-3xl p-6">
                  <div className="font-serif text-3xl font-bold text-charcoal-800 mb-1">{value}</div>
                  <div className="text-sandstone-600 font-semibold text-sm mb-1">{unit}</div>
                  <div className="text-warmgray-400 text-xs leading-relaxed">{sub}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §11  WHO THIS IS FOR
══════════════════════════════════════════════════════════════ */
function AudienceSection() {
  const audiences = [
    { Icon: Home,     title: 'Second Home Owners',      desc: 'You want a retreat that works without requiring your constant attention.' },
    { Icon: Plane,    title: 'NRI Families',            desc: 'You want to build in India without being physically present at every stage.' },
    { Icon: TreePine, title: 'Farmhouse Builders',      desc: 'You want space, privacy, and a property that appreciates intelligently.' },
    { Icon: Hotel,    title: 'Hospitality Investors',   desc: 'You want a luxury villa that generates premium, managed rental income.' },
    { Icon: Users,    title: 'Legacy Home Builders',    desc: 'You want a home designed for multiple generations to inhabit and cherish.' },
    { Icon: TrendingUp, title: 'Luxury Villa Buyers',  desc: 'You want the finest residence achievable — with zero compromise.' },
  ]

  return (
    <section className="section-py bg-ivory-100">
      <div className="container-luxury">
        <FadeUp>
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Who This Is For</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
              Built For Those Who<br />
              <em className="not-italic text-sandstone-600">Demand The Best.</em>
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map(({ Icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.07}>
              <div className="group bg-white rounded-3xl border border-ivory-300 p-7 hover:border-sandstone-300 hover:shadow-luxury transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-2xl bg-sandstone-100 border border-sandstone-200 flex items-center justify-center mb-5 group-hover:bg-sandstone-200 transition-colors">
                  <Icon size={19} className="text-sandstone-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-charcoal-800 mb-2">{title}</h3>
                <p className="text-warmgray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §12  COMPARISON
══════════════════════════════════════════════════════════════ */
const COMPARE = [
  ['Accountability',   'Distributed across 6+ vendors',      'Single accountable entity — end to end'],
  ['Visibility',       'Verbal updates only',                 'Live milestone dashboard, always on'],
  ['Budget Control',   'Frequent, unpredictable surprises',   'BOQ-locked, tracked to the rupee'],
  ['Documentation',    'Little or none at handover',          'Complete digital twin, permanent record'],
  ['Quality Control',  'Self-reported by contractor',         '104 independent QA sign-offs'],
  ['Smart Home',       'Retrofitted after handover',          'Planned from the slab — no retrofitting'],
  ['Post-Handover',    'Builder disappears',                  'Ongoing ownership intelligence partnership'],
  ['Technology',       'WhatsApp and spreadsheets',           'HSI OS — proprietary execution platform'],
]

function ComparisonSection() {
  return (
    <section className="section-py bg-white">
      <div className="container-luxury">
        <FadeUp>
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Comparison</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
              A Different Way<br />
              <em className="not-italic text-sandstone-600">To Build.</em>
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="rounded-3xl border border-ivory-300 shadow-card overflow-hidden">
            <div className="overflow-x-auto">
            <div className="min-w-[600px]">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-charcoal-800">
              <div className="p-4 lg:p-5 border-r border-white/8" />
              <div className="p-4 lg:p-5 border-r border-white/8 text-center">
                <div className="text-warmgray-400 text-sm font-semibold">Traditional Construction</div>
              </div>
              <div className="p-4 lg:p-5 text-center bg-sandstone-600/15">
                <div className="text-sandstone-300 text-sm font-semibold">Hestia Ecosystem</div>
              </div>
            </div>

            {COMPARE.map(([aspect, traditional, hestia], i) => (
              <div
                key={aspect}
                className={`grid grid-cols-3 border-t border-ivory-200 ${i % 2 === 0 ? 'bg-white' : 'bg-ivory-50'}`}
              >
                <div className="p-4 lg:p-5 border-r border-ivory-200 flex items-center">
                  <span className="font-semibold text-charcoal-800 text-sm">{aspect}</span>
                </div>
                <div className="p-4 lg:p-5 border-r border-ivory-200 flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-warmgray-100 border border-warmgray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-warmgray-400 text-[9px] font-bold">–</span>
                  </div>
                  <span className="text-warmgray-500 text-sm leading-snug">{traditional}</span>
                </div>
                <div className="p-4 lg:p-5 bg-sandstone-50/40 flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-sandstone-100 border border-sandstone-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={8} className="text-sandstone-600" strokeWidth={3} />
                  </div>
                  <span className="text-charcoal-700 text-sm leading-snug">{hestia}</span>
                </div>
              </div>
            ))}
            </div>{/* min-w */}
            </div>{/* overflow-x-auto */}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  {
    quote: "Building my villa in Alibag while living in Mumbai was my biggest fear. I expected endless delays. HSIOS™ gave me an exact roadmap, and I tracked every rupee on my dashboard. They delivered 3 weeks ahead of schedule.",
    name: 'Abhishek Bajoria',
    role: 'Homeowner · Alibag Villa',
    img: '',
    initials: 'AB',
  },
  {
    quote: "Managing a ₹2.5Cr villa interior project from Hong Kong without physical access became very smooth thanks to HSIOS™. I had more visibility into my Alibag project than I do into some of my HK properties.",
    name: 'Niket Murdeshwar',
    role: 'NRI Homeowner · Hong Kong',
    img: '',
    initials: 'NM',
  },
  {
    quote: "I've worked with many execution contractors over 15 years. What sets HSIOS™ apart is that my design intent actually survives site execution. The conflict detection caught a ceiling vs HVAC issue before a single cutter touched the ceiling. That alone saved 3 weeks.",
    name: 'Rahul D.',
    role: 'Principal Architect · Mumbai',
    img: '',
    initials: 'RD',
  },
]

function TestimonialsSection() {
  return (
    <section className="section-py bg-white">
      <div className="container-luxury">
        <FadeUp>
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Client Voices</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
              Trusted By Those Who<br />
              <em className="not-italic text-sandstone-600">Demanded Better.</em>
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, role, img, initials }, i) => (
            <FadeUp key={name} delay={i * 0.08}>
              <div className="bg-ivory-50 border border-ivory-300 rounded-3xl p-7 flex flex-col h-full">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="text-sandstone-500 fill-sandstone-500" />
                  ))}
                </div>
                <blockquote className="text-warmgray-600 text-sm leading-relaxed italic flex-1 mb-6">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  {img ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-ivory-300">
                      <Image src={img} alt={name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-sandstone-100 border border-sandstone-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-sandstone-600 text-xs font-bold">{initials}</span>
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-charcoal-800 text-sm">{name}</div>
                    <div className="text-warmgray-400 text-xs">{role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §12.5  OWNERSHIP MODE (POST-HANDOVER)
══════════════════════════════════════════════════════════════ */
function OwnershipModeSection() {
  const features = [
    {
      icon: Database,
      title: 'Digital Twin Lives On',
      desc: 'Every construction document, warranty, vendor contact, and specification stays in your Digital Twin. Forever accessible.',
    },
    {
      icon: CheckCircle,
      title: '2-Year Defect Tracking',
      desc: 'Any moisture, paint, fixture, or structural issues — we handle immediately. No warranty gaps. No "we can\'t help after handover."',
    },
    {
      icon: Clock,
      title: 'Preventive Maintenance Schedules',
      desc: 'Your Digital Twin reminds you when to service HVAC, check plumbing, update smart systems. Never miss critical maintenance.',
    },
    {
      icon: Eye,
      title: 'Ownership Asset Registry',
      desc: 'Every material grade, finish type, and installation date documented. Invaluable when selling or refinancing your villa.',
    },
    {
      icon: Wrench,
      title: 'Lifetime Support Network',
      desc: 'Our vendor network stays your network. Need a plumber? Electrician? We connect you with the same teams that built your home.',
    },
    {
      icon: TrendingUp,
      title: 'Property Value Documentation',
      desc: 'Buyers see the execution intelligence behind your villa. Premium documentation = premium resale value.',
    },
  ]

  return (
    <section className="section-py bg-ivory-100">
      <div className="container-luxury">
        {/* Header */}
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <div className="section-label">Ownership Mode</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
              Your Partnership With Hestia<br />
              <em className="not-italic text-sandstone-600">Doesn't End at Handover.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              Most builders disappear after you sign. We become your home's permanent intelligence partner.
            </p>
          </div>
        </FadeUp>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.07}>
              <div className="bg-white border border-ivory-300 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-sandstone-100 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-sandstone-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-charcoal-800 mb-2">{title}</h3>
                <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom statement */}
        <FadeUp delay={0.42}>
          <div className="bg-charcoal-900 rounded-3xl p-8 lg:p-10 text-white text-center">
            <p className="text-lg mb-4">
              <span className="font-semibold">This is what it means to build with accountability.</span> Your villa is not just a house you own — it's an asset we've documented and will help you maintain for life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a href="#consult" className="btn-bronze">
                Discuss Ownership Support <ArrowRight size={14} />
              </a>
              <span className="text-warmgray-400">Or ask us during your consultation</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §13  LEADERSHIP TEAM
══════════════════════════════════════════════════════════════ */
const LEADERS = [
  {
    img: '/nishant-mhatre.jpg',
    name: 'Nishant Mhatre',
    title: 'Founder & CEO',
    badge: 'Founder',
    bio: '20+ years in international telecom and digital transformation across USA, UK, Europe, Australia, and India. Founded Hestia Villas and built HSIOS™ to eliminate the execution gaps he witnessed firsthand in premium residential projects.',
    credentials: ['Managing Partner, Hestia Villas', 'Creator, HSIOS™ Platform'],
  },
  {
    img: '/sanjay-joshi.jpg',
    name: 'Sanjay Joshi',
    title: 'Co-founder & CTO',
    badge: 'Technology',
    bio: 'Technology strategist with 20+ years translating enterprise systems into business outcomes. Owns HSI\'s platform architecture — connecting design, execution, vendors, and clients through data-driven systems.',
    credentials: ['Former CTO, Ellora Systems', 'Co-founder, Boston Byte LLC', 'Ex-Tata Consultancy Services', 'MBA · MA Economics · ISPI Member'],
  },
  {
    img: '/vishal-patil.jpg',
    name: 'Vishal Patil',
    title: 'COO — Project Execution',
    badge: 'Operations',
    bio: 'Operations expert with 24+ years delivering complex interior projects at scale. Leads site execution, contractor coordination, quality control, and compliance across all active Hestia projects.',
    credentials: ['Ex-WeWork India', 'Ex-Morgan Stanley', 'Ex-Royal Bank of Scotland', 'Ex-Sodexo'],
  },
]

function LeadershipSection() {
  return (
    <section className="section-py bg-white">
      <div className="container-luxury">
        {/* Header */}
        <FadeUp>
          <div className="max-w-3xl mb-14">
            <div className="section-label">Built By Operators</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-4">
              Who Leads Your<br />
              <em className="not-italic text-sandstone-600">Alibag Villa Project.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed mb-4">
              60+ years of combined execution intelligence. Not agency founders. Not sales teams.
              Real operators who have run complex programmes at global scale—from telecom infrastructure
              to enterprise technology to luxury interiors—and built the systems to prove it.
            </p>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              When you build in Alibag, you're not betting on a contractor. You're betting on a
              founder-led team of builders who share your commitment to excellence and accountability.
            </p>
          </div>
        </FadeUp>

        {/* Team grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {LEADERS.map(({ img, name, title, badge, bio, credentials }, i) => (
            <FadeUp key={name} delay={i * 0.1}>
              <div className="group bg-ivory-50 border border-ivory-300 rounded-3xl overflow-hidden hover:shadow-luxury transition-all duration-300">
                {/* Photo */}
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={img}
                    alt={`${name} — ${title}, Hestia Villas`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-3 py-1">
                      <Award size={10} className="text-sandstone-300" />
                      <span className="text-white text-[10px] font-semibold tracking-wider uppercase">{badge}</span>
                    </div>
                  </div>
                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="font-serif text-xl font-bold text-white leading-none">{name}</div>
                    <div className="text-sandstone-300 text-xs mt-1 font-medium">{title}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-warmgray-600 text-sm leading-relaxed mb-5">{bio}</p>
                  <div className="space-y-1.5">
                    {credentials.map(c => (
                      <div key={c} className="flex items-center gap-2 text-xs text-warmgray-500">
                        <div className="w-1 h-1 rounded-full bg-sandstone-400 flex-shrink-0" />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA strip */}
        <FadeUp delay={0.15}>
          <div className="rounded-3xl bg-charcoal-800 px-8 py-7 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <div className="text-white font-semibold mb-1">Meet the team in person.</div>
              <div className="text-warmgray-400 text-sm leading-relaxed">
                Every consultation is led directly by the leadership team — not a sales executive.
              </div>
            </div>
            <a href="#consult" className="btn-bronze flex-shrink-0">
              Book A Private Consultation <ArrowRight size={14} />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §13.5  MOBILE-ONLY QUICK CTA (OPTIMIZATION)
══════════════════════════════════════════════════════════════ */
function MobileQuickCtaSection() {
  return (
    <section className="lg:hidden section-py bg-white border-t border-ivory-300">
      <div className="container-luxury">
        <FadeUp>
          <p className="text-center text-warmgray-600 text-sm mb-4">
            Still have questions? Talk to our team in 2 minutes.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-2xl transition-colors">
              <WhatsAppIcon size={16} />
              <span>Message</span>
            </a>
            <a href="tel:+918010234802" className="flex items-center justify-center gap-2 bg-sandstone-600 hover:bg-sandstone-700 text-white font-semibold py-3 px-4 rounded-2xl transition-colors">
              <Phone size={16} />
              <span>Call</span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   §14  LEAD FORM
══════════════════════════════════════════════════════════════ */
type FormState = {
  name: string; phone: string; email: string
  location: string; budget: string; projectType: string; message: string
}

function LeadForm() {
  const [form, setForm] = useState<FormState>({
    name: '', phone: '', email: '',
    location: '', budget: '', projectType: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message:
            `[Hestia Villas — Alibaug Villa Lead]\n` +
            `Location: ${form.location || 'Not specified'}\n` +
            `Budget: ${form.budget || 'Not specified'}\n` +
            `Project Type: ${form.projectType || 'Not specified'}\n\n` +
            (form.message || 'No additional message provided.'),
          source: 'Alibaug Villa Landing Page',
        }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputCls =
    'w-full rounded-xl border border-white/12 bg-white/6 text-white placeholder:text-warmgray-600 px-4 py-3.5 sm:py-3 text-sm focus:border-sandstone-400/60 focus:ring-1 focus:ring-sandstone-400/30 focus:outline-none transition-all h-12 sm:h-auto min-h-[48px] sm:min-h-auto'
  const selectCls =
    'w-full rounded-xl border border-white/12 bg-charcoal-700 text-white/80 px-4 py-3.5 sm:py-3 text-sm focus:border-sandstone-400/60 focus:outline-none transition-all h-12 sm:h-auto min-h-[48px] sm:min-h-auto'
  const labelCls = 'block text-[10px] font-bold uppercase tracking-widest text-warmgray-500 mb-1.5'

  if (status === 'sent') {
    return (
      <div className="text-center py-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="w-16 h-16 rounded-full bg-sandstone-400/20 border border-sandstone-400/40 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle size={28} className="text-sandstone-400" />
        </motion.div>
        <h3 className="font-serif text-2xl text-white mb-3">We've Received Your Enquiry.</h3>
        <p className="text-warmgray-400 text-sm max-w-sm mx-auto leading-relaxed">
          A member of the Hestia team will be in touch within 24 hours for a private, confidential conversation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={set('name')}
            autoComplete="name"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Phone *</label>
          <input
            type="tel"
            required
            placeholder="+91 or international"
            value={form.phone}
            onChange={set('phone')}
            autoComplete="tel"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className={labelCls}>Email *</label>
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={form.email}
          onChange={set('email')}
          autoComplete="email"
          className={inputCls}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Project Location</label>
          <select value={form.location} onChange={set('location')} className={selectCls}>
            <option value="">Select location</option>
            {['Alibaug / Alibag', 'Lonavala', 'Nashik', 'Goa', 'Mumbai', 'Pune', 'Other'].map(o => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls}>Estimated Budget</label>
          <select value={form.budget} onChange={set('budget')} className={selectCls}>
            <option value="">Select range</option>
            {['₹1 Cr – ₹2 Cr', '₹2 Cr – ₹4 Cr', '₹4 Cr – ₹7 Cr', '₹7 Cr – ₹10 Cr', '₹10 Cr+'].map(o => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Project Type</label>
        <select value={form.projectType} onChange={set('projectType')} className={selectCls}>
          <option value="">Select type</option>
          {[
            'Second Home / Weekend Retreat',
            'Vacation Villa with Rental Income',
            'Family Legacy Home',
            'Farmhouse / Estate',
            'Hospitality Investment',
            'Other',
          ].map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div>
        <label className={labelCls}>Message (optional)</label>
        <textarea
          rows={4}
          placeholder="Tell us briefly about your vision…"
          value={form.message}
          onChange={set('message')}
          className={`${inputCls} resize-none min-h-[120px] sm:min-h-auto h-auto`}
          style={{ height: 'auto' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-bronze w-full justify-center disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Book A Private Consultation'}
        {status !== 'sending' && <ArrowRight size={15} />}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please call us at +91-8010234802.
        </p>
      )}

      <p className="text-warmgray-600 text-xs text-center leading-relaxed">
        Response within 24 hours · Confidential discussion · No obligation
      </p>
    </form>
  )
}

function FinalCtaSection() {
  return (
    <section id="consult" className="section-py bg-charcoal-800 relative overflow-hidden">
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Faint Casa Frangipani backdrop */}
      <div className="absolute inset-0 opacity-[0.08]">
        <Image src="/projects-casa-frangipani-2.jpg" alt="" fill className="object-cover" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left */}
          <div>
            <FadeUp>
              {/* Urgency strip */}
              <div className="inline-flex items-center gap-2.5 bg-red-900/30 border border-red-500/25 rounded-full px-4 py-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
                <span className="text-red-300 text-xs font-semibold">Currently reviewing 2 Alibaug project applications for Q4 2025 — slots filling</span>
              </div>
              <div className="section-label" style={{ color: '#C4A882' }}>Private Consultation</div>
              <h2 className="font-serif text-display-lg text-white mb-4">
                Let's Discuss<br />
                <em className="not-italic text-sandstone-300">Your Vision.</em>
              </h2>
              <p className="text-warmgray-400 text-lg leading-relaxed mb-8">
                Every remarkable home begins with a conversation. Not a sales pitch. Not a brochure.
                A real discussion about your vision, your constraints, and what is possible.
              </p>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="space-y-4 mb-10">
                {[
                  { Icon: Phone,  label: '+91-8010234802',     sub: 'Mon–Fri 9am–6pm · Sat 10am–3pm' },
                  { Icon: Mail,   label: 'hello@hsios.in',     sub: 'Response within 24 hours' },
                  { Icon: MapPin, label: 'Alibaug, Maharashtra', sub: 'Site visits available on request' },
                ].map(({ Icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-sandstone-400" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-white/90 text-sm font-medium">{label}</div>
                      <div className="text-warmgray-500 text-xs">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Mini gallery anchor — Casa Frangipani throughout */}
            <FadeUp delay={0.14}>
              <div className="grid grid-cols-3 gap-2 max-w-xs">
                {[
                  '/projects-casa-frangipani-1.jpg',
                  '/projects-casa-frangipani-2.jpg',
                  '/projects-casa-frangipani-3.jpg',
                ].map((src, i) => (
                  <div key={src} className="relative h-20 rounded-xl overflow-hidden">
                    <Image src={src} alt={`Casa Frangipani ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-warmgray-600 text-[11px] mt-2">
                Casa Frangipani — Our flagship delivered project in Alibaug
              </p>
            </FadeUp>
          </div>

          {/* Form */}
          <FadeUp delay={0.1}>
            <div className="bg-white/4 rounded-3xl border border-white/10 p-6 lg:p-8">
              <LeadForm />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   LANDING FOOTER (Hestia Villas branded)
══════════════════════════════════════════════════════════════ */
function LandingFooter() {
  return (
    <div className="bg-charcoal-900 border-t border-white/8 py-10">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="font-serif text-xl text-white mb-0.5">Hestia Villas</div>
            <div className="text-warmgray-600 text-xs">Powered By HSI OS</div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: 'Projects',          href: '/projects',          external: false },
              { label: 'About',             href: '/about',             external: false },
              { label: 'Casa Frangipani',   href: 'https://villa.hestiavillas.in/casa-frangipani-luxury-villa-rental-alibaug', external: true },
              { label: 'HSI OS',            href: '/hsi-os',            external: false },
              { label: 'Contact',           href: '/contact',           external: false },
            ].map(({ label, href, external }) =>
              external ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-warmgray-500 text-sm hover:text-sandstone-400 transition-colors">
                  {label}
                </a>
              ) : (
                <Link key={label} href={href} className="text-warmgray-500 text-sm hover:text-sandstone-400 transition-colors">
                  {label}
                </Link>
              )
            )}
          </div>

          <div className="text-warmgray-600 text-xs space-y-0.5 text-right">
            <div>www.hestiavillas.in</div>
            <div>www.hsios.in</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE ROOT
══════════════════════════════════════════════════════════════ */
export default function AlibaugVillaPage() {
  return (
    <>
      {/* Fixed overlays */}
      <LandingNav />
      <WhatsAppFloat />
      <StickyCTA />

      {/* Page flow */}
      <HeroSection />
      <QuickCallbackBanner />
      <StatsBar />
      <WhyAlibaugSection />
      <ProblemSection />
      <ALibaugTestimonialSection />
      <PricingTransparencySection />
      <CoastalChallengesSection />
      <DifferenceSection />
      <FeaturedProjectSection />
      <AlibaugTimelineSection />
      <AlibaugFaqSection />
      <CasaFrangipaniSection />
      <DigitalTwinSection />
      <OwnershipSection />
      <HsiOsSection />
      <NriSection />
      <SustainabilitySection />
      <AudienceSection />
      <ComparisonSection />
      <TestimonialsSection />
      <OwnershipModeSection />
      <LeadershipSection />
      <MobileQuickCtaSection />
      <FinalCtaSection />
      <LandingFooter />
    </>
  )
}
