import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { CERULEAN as client } from '@/content/clients'

/* The client's logo artwork sits on its own navy ground, so it is always
   framed in that colour rather than placed on our ivory backgrounds. */
const LOGO_BG = 'bg-[#0A1628]'

function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`${LOGO_BG} rounded-xl px-4 py-3 inline-flex ${className}`}>
      <Image
        src={client.logo.src}
        alt={`${client.name}, ${client.location}`}
        width={client.logo.width}
        height={client.logo.height}
        className="h-9 w-auto"
      />
    </div>
  )
}

/** Compact proof strip — homepage, between the stats and the next section. */
export function ClientStrip() {
  return (
    <section className="py-10 bg-white border-y border-ivory-200" aria-label="Current client">
      <div className="container-luxury flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="text-xs font-semibold tracking-widest uppercase text-warmgray-600">Now executing</span>
          <Logo />
        </div>
        <p className="text-warmgray-600 leading-relaxed lg:flex-1">
          <span className="font-semibold text-charcoal-800">{client.name}</span>, a {client.descriptor.toLowerCase()} in{' '}
          {client.location}, is building with HSI — interiors executed and every residence delivered on HSIOS™.
        </p>
        <Link
          href="/projects#cerulean"
          className="inline-flex items-center gap-1.5 font-semibold text-sandstone-600 hover:text-sandstone-700 transition-colors whitespace-nowrap"
        >
          See the project <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  )
}

const COPY = {
  projects: {
    label: 'Current Project',
    heading: 'Cerulean — sky-pool villas at Revdanda.',
    body: `A villa development on the Alibag coast where HSI executes the interiors and coordinates design across every residence. Cerulean has chosen to deliver every home on HSIOS™, so its buyers can follow their villa milestone by milestone, from anywhere.`,
  },
  developers: {
    label: 'Developer Client',
    heading: 'A villa developer that builds on HSIOS™.',
    body: `Cerulean, a sky-pool villa development at Revdanda, Alibag, has made HSIOS™ part of its promise to buyers: every residence is delivered on the platform, with live site tracking and milestone photo updates. HSI executes the interiors and coordinates design across the development.`,
  },
  alibag: {
    label: 'Now in Revdanda',
    heading: 'Cerulean — a villa development on HSIOS™.',
    body: `At Cerulean in Revdanda, HSI executes the interiors and coordinates design across a sky-pool villa development — with every residence delivered on HSIOS™.`,
  },
} as const

/** Full feature block — /projects, /for-developers and the Alibag page. */
export function ClientFeature({ context }: { context: keyof typeof COPY }) {
  const c = COPY[context]
  return (
    <div id={context === 'projects' ? client.id : undefined} className="scroll-mt-28">
      <RevealOnScroll>
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-ivory-300 bg-white shadow-card">
          {client.image && (
            <figure className="relative min-h-[260px] lg:min-h-full bg-ivory-100">
              <Image
                src={client.image.src}
                alt={client.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute left-4 bottom-4 rounded-full bg-charcoal-900/75 backdrop-blur px-3 py-1 text-xs font-medium text-white">
                {client.image.caption}
              </figcaption>
            </figure>
          )}
          <div className="p-8 sm:p-10 flex flex-col">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Logo />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sandstone-50 border border-sandstone-200 px-3 py-1 text-xs font-semibold text-sandstone-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                Interiors in progress
              </span>
            </div>
            <div className="section-label">{c.label}</div>
            <h2 className="font-serif text-display-sm text-charcoal-800 mb-4">{c.heading}</h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">{c.body}</p>
            <ul className="flex flex-wrap gap-2 mb-8" aria-label="HSI scope at Cerulean">
              {client.scope.map((s) => (
                <li key={s} className="rounded-full bg-ivory-100 border border-ivory-300 px-3 py-1 text-xs font-medium text-charcoal-700">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-sandstone-600 hover:text-sandstone-700 transition-colors"
              >
                Visit ceruleanalibag.com <ArrowUpRight size={15} />
                <span className="sr-only">(opens in new tab)</span>
              </a>
              {client.rera && (
                <span className="text-xs text-warmgray-600">MahaRERA {client.rera}</span>
              )}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  )
}
