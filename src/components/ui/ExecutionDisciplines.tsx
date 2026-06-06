'use client'

import { useState } from 'react'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import {
  Layers,
  Grid3x3,
  Hammer,
  Box,
  Zap,
  Droplets,
  Wind,
  LayoutPanelTop,
  PaintBucket,
  Wifi,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────────────────
   EXECUTION DISCIPLINES DATA
   10 premium execution categories with services and HSIOS™ integration notes
   ───────────────────────────────────────────────────────────────────────────── */
const disciplines = [
  {
    id: 'civil',
    n: '01',
    Icon: Layers,
    label: 'Structural Coordination',
    title: 'Civil & Structural Coordination',
    summary:
      'Every interior begins with civil integrity. From wall modifications to waterproofing, surface preparation, and structural coordination — we ensure the substrate is precisely ready before any finish work begins.',
    services: [
      'Civil Modifications & Alterations',
      'Wall Construction & Layout Changes',
      'Waterproofing Systems',
      'Surface Preparation & Repair',
      'Screed & Leveling',
      'Structural Coordination',
    ],
    hsiNote: 'Conflict Detection Engine resolves structural vs interior trade clashes before work begins.',
  },
  {
    id: 'flooring',
    n: '02',
    Icon: Grid3x3,
    label: 'Flooring & Surfaces',
    title: 'Flooring & Surface Installation',
    summary:
      'Precision installation of every surface material — from Carrara marble and granite to engineered hardwood, SPC flooring, and hand-cut stone cladding. Each installation is sequenced, tolerance-checked, and milestone-verified.',
    services: [
      'Marble & Stone Installation',
      'Granite Installation',
      'Tile Installation',
      'Wooden Flooring',
      'SPC / Vinyl Flooring',
      'Stone Cladding',
      'Floor Polishing & Surface Finishing',
    ],
    hsiNote: 'Procurement Intelligence locks material specifications and sourcing before a single tile is ordered.',
  },
  {
    id: 'joinery',
    n: '03',
    Icon: Hammer,
    label: 'Bespoke Joinery',
    title: 'Bespoke Joinery Coordination',
    summary:
      'From modular kitchen systems and walk-in closet architecture to bespoke solid wood furniture and decorative paneling — every joinery element is fabricated and installed to approved specifications, with documented quality sign-off at each stage.',
    services: [
      'Modular Kitchen Systems',
      'Wardrobe & Storage Architecture',
      'Veneer Works',
      'PU & Duco Finish Furniture',
      'Solid Wood Custom Furniture',
      'Decorative Paneling',
      'Walk-in Closet Systems',
      'Custom Furniture',
    ],
    hsiNote: 'Milestone Quality Gates ensure joinery sign-off before adjacent trades are deployed.',
  },
  {
    id: 'metal',
    n: '04',
    Icon: Box,
    label: 'Metal & Glass Works',
    title: 'Architectural Metal & Glass Execution',
    summary:
      'Structural and decorative metalwork — MS and SS fabrication, aluminium systems, glazed partitions, bespoke railings, pergolas, and staircase structures. Every assembly is fabricated to engineering tolerances and finished to architectural standards.',
    services: [
      'MS Fabrication',
      'Stainless Steel Fabrication',
      'Aluminium Systems',
      'Glass Partitions & Glazing',
      'Architectural Railings',
      'Decorative Metal Elements',
      'Pergola Structures',
      'Staircase Fabrication',
    ],
    hsiNote: 'Trade Sequencing ensures metalwork is installed in coordination with civil, electrical, and finishing trades.',
  },
  {
    id: 'electrical',
    n: '05',
    Icon: Zap,
    label: 'Electrical & Smart Systems',
    title: 'Electrical & Smart Systems',
    summary:
      'Complete electrical infrastructure — from conduit routing and wiring to lighting installation, smart lighting control, home automation, CCTV integration, and AV / networking infrastructure. Every system is installed in a conflict-resolved sequence.',
    services: [
      'Electrical Wiring & Conduit Routing',
      'Lighting Installation',
      'Smart Lighting & Dimmer Systems',
      'Home Automation Integration',
      'CCTV & Security Systems',
      'AV & Networking Infrastructure',
    ],
    hsiNote: 'Conflict Detection Engine resolves electrical vs civil and plumbing routing before a single conduit is laid.',
  },
  {
    id: 'plumbing',
    n: '06',
    Icon: Droplets,
    label: 'Plumbing & Bathrooms',
    title: 'Plumbing & Bathroom Execution',
    summary:
      'Internal plumbing, premium bathroom fittings installation, kitchen plumbing, drainage coordination, and pump and tank systems — all coordinated against approved layouts and sequenced with civil and tile trades.',
    services: [
      'Internal Plumbing',
      'Premium Bathroom Fittings Installation',
      'Kitchen Plumbing',
      'Drainage & Slope Coordination',
      'Pump & Tank Coordination',
    ],
    hsiNote: 'Bathroom slope, drain alignment, and waterproofing are conflict-checked against layout drawings before work begins.',
  },
  {
    id: 'hvac',
    n: '07',
    Icon: Wind,
    label: 'HVAC & Mechanical',
    title: 'HVAC & Mechanical Coordination',
    summary:
      'Air conditioning installation, VRV / VRF system coordination, ventilation infrastructure, and mechanical services — planned against ceiling design and false ceiling depths before any work begins.',
    services: [
      'Air Conditioning Installation',
      'VRV / VRF System Coordination',
      'Ventilation Systems',
      'Mechanical Services Coordination',
    ],
    hsiNote: 'HVAC vs ceiling depth conflicts are a leading cause of rework — our Conflict Detection Engine eliminates this risk pre-execution.',
  },
  {
    id: 'ceiling',
    n: '08',
    Icon: LayoutPanelTop,
    label: 'Ceiling & Drywall',
    title: 'Ceiling & Drywall Systems',
    summary:
      'Gypsum ceiling systems, cove lighting detailing, drywall partitions, and decorative ceiling features — all coordinated against HVAC, electrical, and structural layers and installed to approved design drawings.',
    services: [
      'Gypsum Ceilings',
      'Cove Lighting Details',
      'Drywall Partitions',
      'Decorative Ceiling Features',
    ],
    hsiNote: 'False ceiling depths are validated against HVAC and MEP drawings before the gypsum framework begins.',
  },
  {
    id: 'finishes',
    n: '09',
    Icon: PaintBucket,
    label: 'Surface Finishing',
    title: 'Surface Finishing & Paint Systems',
    summary:
      'Interior painting, texture finishes, PU and Duco applications, polish and melamine finishes, and protective coatings — applied in the correct trade sequence, with substrate inspection at every stage.',
    services: [
      'Interior Painting',
      'Texture Finishes',
      'PU & Duco Finishes',
      'Polish & Melamine Finishes',
      'Protective Coatings',
    ],
    hsiNote: 'Finishing trades are only deployed after milestone sign-off on the substrate below — no hidden defects.',
  },
  {
    id: 'smart',
    n: '10',
    Icon: Wifi,
    label: 'Smart Villa Integration',
    title: 'Smart Villa & Lifestyle Integration',
    summary:
      'Home automation systems, smart access control, audio-video integration, home theatre infrastructure, and full network backbone — planned as an integrated layer from the earliest civil stage, not retrofitted at handover.',
    services: [
      'Home Automation Systems',
      'Smart Lock Integration',
      'Audio-Video Systems',
      'Home Theatre Infrastructure',
      'Network & Wi-Fi Backbone',
    ],
    hsiNote: 'Smart systems are planned into the MEP layer from day one — eliminating the cost of retrofitting at handover.',
  },
]

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */

interface ExecutionDisciplinesProps {
  variant?: 'full' | 'compact'
  showCTA?: boolean
  context?: 'homepage' | 'hsi-os' | 'how-it-works' | 'for-homeowners' | 'for-developers' | 'for-architects'
}

export default function ExecutionDisciplines({
  variant = 'full',
  showCTA = true,
  context = 'homepage',
}: ExecutionDisciplinesProps) {
  const [activeDiscipline, setActiveDiscipline] = useState<string | null>(null)

  const ctaMessages: Record<string, string> = {
    homepage: 'Discuss your project scope with our team.',
    'hsi-os': 'See how HSIOS™ tracks every discipline in real time.',
    'how-it-works': 'Every discipline follows the same structured execution process.',
    'for-homeowners': 'One accountable team. Every discipline. Full visibility throughout.',
    'for-developers': 'The same execution disciplines, standardised across every unit in your portfolio.',
    'for-architects': 'Your specifications are non-negotiable. We enforce them across every discipline.',
  }

  return (
    <section
      className="section-py bg-ivory-100 relative overflow-hidden"
      aria-label="Integrated Execution Capabilities"
      id="execution-disciplines"
    >
      {/* Subtle background texture */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sandstone-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ivory-300/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container-luxury relative z-10">

        {/* ── Section Header ── */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 lg:mb-20">
            <div className="section-label">Execution Disciplines</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-6">
              Integrated Execution{' '}
              <em className="not-italic text-sandstone-600">Capabilities.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed max-w-2xl">
              HSIOS™ combines execution intelligence with precision on-ground delivery.
              Every discipline below is coordinated through HSI&rsquo;s empaneled execution partners,
              sequenced by the platform, and milestone-verified at every critical stage.
            </p>
          </div>
        </RevealOnScroll>

        {/* ── Disciplines Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-16">
          {disciplines.map(({ id, n, Icon, label, title, summary, services, hsiNote }, i) => {
            const isActive = activeDiscipline === id
            return (
              <RevealOnScroll key={id} delay={Math.min(i * 0.04, 0.3)}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  onClick={() => setActiveDiscipline(isActive ? null : id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveDiscipline(isActive ? null : id)
                    }
                  }}
                  className={`
                    group relative rounded-2xl border cursor-pointer transition-all duration-300
                    ${isActive
                      ? 'bg-charcoal-800 border-sandstone-400/30 shadow-luxury-md'
                      : 'bg-white border-ivory-300 hover:border-sandstone-300 hover:shadow-luxury'
                    }
                  `}
                >
                  {/* Card Header — always visible */}
                  <div className="flex items-start gap-5 p-6 lg:p-7">
                    {/* Number */}
                    <div className={`flex-shrink-0 font-serif text-3xl font-bold leading-none transition-colors duration-300 ${isActive ? 'text-sandstone-400/40' : 'text-sandstone-200'}`}>
                      {n}
                    </div>

                    {/* Icon + Label */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isActive ? 'bg-sandstone-400/20 text-sandstone-300' : 'bg-sandstone-100 border border-sandstone-200 text-sandstone-600'}`}>
                          <Icon size={15} strokeWidth={1.75} />
                        </div>
                        <span className={`text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${isActive ? 'text-sandstone-400' : 'text-sandstone-600'}`}>
                          {label}
                        </span>
                      </div>
                      <h3 className={`font-serif text-lg font-bold leading-snug mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-charcoal-800'}`}>
                        {title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-warmgray-300' : 'text-warmgray-600'}`}>
                        {summary}
                      </p>
                    </div>

                    {/* Expand indicator */}
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 mt-1 ${isActive ? 'border-sandstone-400/40 text-sandstone-400 rotate-180' : 'border-ivory-300 text-warmgray-400'}`}>
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isActive && (
                    <div className="px-6 lg:px-7 pb-6 lg:pb-7 border-t border-white/8">
                      <div className="pt-5 grid sm:grid-cols-2 gap-6">
                        {/* Services list */}
                        <div>
                          <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-sandstone-400 mb-3">
                            Execution Scope
                          </div>
                          <ul className="space-y-2">
                            {services.map((s) => (
                              <li key={s} className="flex items-start gap-2.5 text-sm text-warmgray-300">
                                <span className="w-1 h-1 rounded-full bg-sandstone-400 flex-shrink-0 mt-2" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* HSIOS™ integration note */}
                        <div>
                          <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-sandstone-400 mb-3">
                            HSIOS™ Integration
                          </div>
                          <div className="p-4 rounded-xl bg-white/6 border border-sandstone-400/20">
                            <p className="text-sm text-warmgray-300 leading-relaxed italic">
                              {hsiNote}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            )
          })}
        </div>

        {/* ── Bottom narrative strip ── */}
        <RevealOnScroll delay={0.1}>
          <div className="rounded-3xl bg-charcoal-800 p-8 sm:p-10 lg:p-12 grid lg:grid-cols-3 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="text-xs font-bold tracking-[0.18em] uppercase text-sandstone-400 mb-4">
                Coordinated Execution Ecosystem
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white leading-snug mb-4">
                Ten disciplines. One orchestration framework.{' '}
                <em className="not-italic text-sandstone-300">Every partner accountable.</em>
              </h3>
              <p className="text-warmgray-400 leading-relaxed text-sm sm:text-base">
                {ctaMessages[context]}
              </p>
              {variant === 'full' && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    { label: '10', sub: 'Execution Disciplines' },
                    { label: '104', sub: 'QA Checkpoints' },
                    { label: '0', sub: 'Rework Incidents' },
                  ].map(({ label, sub }) => (
                    <div key={sub} className="px-5 py-3 rounded-xl bg-white/6 border border-white/8">
                      <div className="font-serif text-xl font-bold text-sandstone-300 leading-none">{label}</div>
                      <div className="text-xs text-warmgray-500 mt-0.5 uppercase tracking-wider">{sub}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {showCTA && (
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="btn btn-bronze text-center">
                  Book a Consultation →
                </Link>
                <Link href="/how-it-works" className="btn btn-outline-white text-center text-sm">
                  See Execution Process
                </Link>
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
