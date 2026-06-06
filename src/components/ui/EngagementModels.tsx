'use client'

import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import {
  Cpu,
  Network,
  Check,
  ArrowRight,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────────────────
   ENGAGEMENT MODELS
   Communicates the two ways HSIOS™ can be engaged:
     A) Platform-Only — clients use HSIOS™ with their own vendors/teams
     B) Managed Execution — HSI orchestrates delivery through its empaneled
        execution partner network, all sequenced by HSIOS™
   ───────────────────────────────────────────────────────────────────────────── */

type Emphasis = 'neutral' | 'platform' | 'managed'

interface EngagementModelsProps {
  emphasis?: Emphasis
  /** Eyebrow label above the main heading. Override per page if useful. */
  eyebrow?: string
}

const platformIncludes = [
  'Live project tracking & milestone visibility',
  'Procurement intelligence & BOQ management',
  'Documentation & sign-off workflows',
  'Conflict detection across trades',
  'Execution reporting for owners and design teams',
  'Lifecycle records, retained beyond handover',
]

const managedIncludes = [
  'Empaneled partner coordination across ten disciplines',
  'Quality verification & milestone accountability',
  'Procurement, sourcing & vendor management',
  'On-ground site monitoring & sequencing',
  'Single point of execution responsibility',
  'Full lifecycle documentation & handover dossier',
]

export default function EngagementModels({
  emphasis = 'neutral',
  eyebrow = 'Engagement Models',
}: EngagementModelsProps) {
  return (
    <section
      className="section-py bg-white relative overflow-hidden"
      aria-label="HSIOS Engagement Models"
      id="engagement-models"
    >
      {/* Subtle background texture */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-ivory-200/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container-luxury relative z-10">
        {/* ── Section Header ── */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-14 lg:mb-20">
            <div className="section-label">{eyebrow}</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mb-6">
              Two Ways to Use{' '}
              <em className="not-italic text-sandstone-600">HSIOS™.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed max-w-2xl">
              HSIOS™ is available as an independent execution management platform
              — or as a fully coordinated delivery model, orchestrated by HSI
              through a curated network of empaneled execution partners.
            </p>
          </div>
        </RevealOnScroll>

        {/* ── Two-column comparison ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
          <ModelColumn
            tone="platform"
            featured={emphasis === 'platform'}
            label="Option A — Platform Only"
            title="HSIOS™ for your own team."
            audience="For architects, developers, project teams, and homeowners working with their own vendors."
            description="Run your project on HSIOS™. Keep your existing execution partners. Gain full execution intelligence, documentation, and lifecycle visibility — without changing your delivery model."
            includes={platformIncludes}
            cta={{ href: '/demo', label: 'Request a Platform Demo' }}
            Icon={Cpu}
          />
          <ModelColumn
            tone="managed"
            featured={emphasis === 'managed'}
            label="Option B — Managed Execution"
            title="HSIOS™ + HSI Coordination."
            audience="For clients who want end-to-end coordinated delivery without assembling and managing vendors themselves."
            description="HSI orchestrates execution through its empaneled partner network. Procurement, quality, sequencing and accountability are managed centrally — every discipline runs on HSIOS™ workflows."
            includes={managedIncludes}
            cta={{ href: '/contact', label: 'Book a Private Consultation' }}
            Icon={Network}
          />
        </div>

        {/* ── Footnote strip ── */}
        <RevealOnScroll delay={0.1}>
          <div className="rounded-2xl border border-ivory-300 bg-ivory-100/60 px-6 py-5 lg:px-8 lg:py-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-sandstone-400/15 border border-sandstone-300 flex items-center justify-center text-sandstone-600">
                <Network size={14} strokeWidth={1.75} />
              </div>
              <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-sandstone-600">
                Execution Network
              </div>
            </div>
            <p className="text-sm lg:text-[15px] text-warmgray-700 leading-relaxed">
              Execution is carried out through HSI&rsquo;s empaneled partner network under
              HSIOS&trade; workflows and quality systems. HSI provides the orchestration,
              intelligence, accountability and quality layer — not the labour layer.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   ModelColumn — individual engagement option card
   ───────────────────────────────────────────────────────────────────────────── */

interface ModelColumnProps {
  tone: 'platform' | 'managed'
  featured: boolean
  label: string
  title: string
  audience: string
  description: string
  includes: string[]
  cta: { href: string; label: string }
  Icon: typeof Cpu
}

function ModelColumn({
  tone,
  featured,
  label,
  title,
  audience,
  description,
  includes,
  cta,
  Icon,
}: ModelColumnProps) {
  const isManaged = tone === 'managed'

  return (
    <RevealOnScroll delay={isManaged ? 0.1 : 0}>
      <div
        className={`
          relative h-full rounded-3xl border p-8 lg:p-10 flex flex-col transition-shadow duration-300
          ${
            isManaged
              ? 'bg-charcoal-800 border-sandstone-400/30 text-white shadow-luxury-md hover:shadow-luxury-lg'
              : 'bg-white border-ivory-300 hover:border-sandstone-300 hover:shadow-luxury'
          }
          ${featured ? 'ring-1 ring-sandstone-400/40' : ''}
        `}
      >
        {/* Eyebrow + icon */}
        <div className="flex items-center justify-between mb-6">
          <div
            className={`
              text-[10px] font-bold tracking-[0.18em] uppercase
              ${isManaged ? 'text-sandstone-400' : 'text-sandstone-600'}
            `}
          >
            {label}
          </div>
          <div
            className={`
              w-10 h-10 rounded-xl flex items-center justify-center
              ${
                isManaged
                  ? 'bg-sandstone-400/20 text-sandstone-300 border border-sandstone-400/30'
                  : 'bg-sandstone-100 text-sandstone-600 border border-sandstone-200'
              }
            `}
          >
            <Icon size={18} strokeWidth={1.75} />
          </div>
        </div>

        {/* Title */}
        <h3
          className={`
            font-serif text-2xl lg:text-3xl font-bold leading-snug mb-3
            ${isManaged ? 'text-white' : 'text-charcoal-800'}
          `}
        >
          {title}
        </h3>

        {/* Audience pill */}
        <p
          className={`
            text-[13px] font-medium mb-5 leading-relaxed
            ${isManaged ? 'text-sandstone-300' : 'text-sandstone-700'}
          `}
        >
          {audience}
        </p>

        {/* Description */}
        <p
          className={`
            text-[15px] leading-relaxed mb-7
            ${isManaged ? 'text-warmgray-300' : 'text-warmgray-600'}
          `}
        >
          {description}
        </p>

        {/* Includes label */}
        <div
          className={`
            text-[10px] font-bold tracking-[0.18em] uppercase mb-4
            ${isManaged ? 'text-sandstone-400' : 'text-sandstone-600'}
          `}
        >
          What&rsquo;s Included
        </div>

        {/* Includes list */}
        <ul className="space-y-2.5 mb-8 flex-1">
          {includes.map((item) => (
            <li
              key={item}
              className={`
                flex items-start gap-3 text-sm leading-relaxed
                ${isManaged ? 'text-warmgray-200' : 'text-warmgray-700'}
              `}
            >
              <span
                className={`
                  mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0
                  ${
                    isManaged
                      ? 'bg-sandstone-400/20 text-sandstone-300'
                      : 'bg-sandstone-100 text-sandstone-600 border border-sandstone-200'
                  }
                `}
              >
                <Check size={9} strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={cta.href}
          className={`
            inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all
            ${
              isManaged
                ? 'bg-sandstone-400 text-charcoal-900 hover:bg-sandstone-300'
                : 'bg-charcoal-800 text-white hover:bg-charcoal-700'
            }
          `}
        >
          {cta.label}
          <ArrowRight size={15} strokeWidth={2} />
        </Link>
      </div>
    </RevealOnScroll>
  )
}
