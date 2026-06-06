import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates, breadcrumb, serviceSchema } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'
import ExecutionDisciplines from '@/components/ui/ExecutionDisciplines'
import EngagementModels from '@/components/ui/EngagementModels'

export const metadata: Metadata = {
  title: 'For Architects & Designers — Protect Design Intent with HSIOS™',
  description:
    'HSIOS™ protects your design vision with conflict detection, execution intelligence, and real-time documentation. Built for premium villa and residential projects across India.',
  alternates: getAlternates('/for-architects'),
}

const serviceData = serviceSchema({
  name: 'Interior Execution Partner for Architects & Designers',
  description:
    'HSIOS™ works alongside architects to protect design intent — conflict detection, precision documentation, and execution intelligence from drawing board to handover.',
  url: 'https://www.hsios.in/for-architects',
  areaServed: ['India'],
})

const breadcrumbSchema = breadcrumb([
  { name: 'Home', url: 'https://www.hsios.in' },
  { name: 'For Architects', url: 'https://www.hsios.in/for-architects' },
])

const challenges = [
  { title: 'Design intent lost in execution',          solution: 'HSIOS™ creates a shared digital record of every decision — site execution matches your specification exactly.' },
  { title: 'Trade clashes discovered on-site',         solution: 'Conflict Detection Engine identifies HVAC vs ceiling, cabinetry vs electrical, and structural clashes before work begins.' },
  { title: 'Vendor accountability gaps',               solution: 'Every vendor commitment is logged with delivery timelines — no more verbal promises.' },
  { title: 'Client escalations over costs',            solution: 'Live cost tracking means clients are never surprised. Your relationship is protected.' },
]

const benefits = [
  { code: 'DF', title: 'Design Fidelity Preserved',    desc: 'Every material spec, finish detail, and dimension is logged and enforced. What you designed is what gets built.' },
  { code: 'CD', title: 'Conflict Detection Engine',     desc: 'Plumbing, electrical, HVAC, cabinetry, and structural clashes identified and resolved before site work begins.' },
  { code: 'CB', title: 'Collaborative by Design',       desc: 'HSIOS™ works alongside your team — not instead of it. You control design; we handle execution intelligence.' },
  { code: 'SD', title: 'Better Site Documentation',     desc: 'Every RFI, change order, and site instruction is logged with timestamps. Full audit trail from day one to handover.' },
  { code: 'CT', title: 'Client Transparency',           desc: 'Clients see live progress and budget tracking — reducing anxiety, improving trust, protecting your relationship.' },
  { code: 'QC', title: 'Quality at Every Checkpoint',  desc: 'Milestone-based inspections ensure each phase is delivered to spec before the next begins.' },
]

const useCases = [
  {
    title: 'Luxury Villa Coordination',
    desc: 'Manage complex multi-trade villa projects with complete design-to-execution coordination. HSIOS™ bridges the gap between your design drawings and what happens on site.',
    image: '/casa-frangipani-7a4576.jpg',
  },
  {
    title: 'Developer Sample Flat Delivery',
    desc: 'Your sample flat is the first impression of an entire development. HSIOS™ ensures it is delivered exactly to your specification — documented and repeatable.',
    image: '/hestia-villa-bellissimo.jpg',
  },
  {
    title: 'Premium Apartment Renovation',
    desc: 'Urban renovations require coordination between multiple trades in tight spaces. HSIOS™ sequences work to prevent clashes and protect your design intent.',
    image: '/hestia-serenity-villa.jpg',
  },
]

export default async function ForArchitectsPage() {
  return (
    <>
      <JsonLd data={[serviceData, breadcrumbSchema]} />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-end pb-24 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects-casa-frangipani-1.jpg"
            alt="Premium interior execution for architects — HSIOS"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/92 via-charcoal-800/50 to-charcoal-900/25" />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <div className="section-label text-sandstone-400">For Architects &amp; Designers</div>
              <h1 className="font-serif text-display-xl text-white mb-4">
                Your Design Survives<br />
                <em className="not-italic text-sandstone-300">Every Site Decision.</em>
              </h1>
              <p className="font-serif text-lg text-sandstone-200 mb-4">
                That is our commitment to every architect we work with.
              </p>
              <p className="text-warmgray-200 text-lg leading-relaxed mb-8">
                HSIOS™ is built with conflict detection, precision documentation, and execution intelligence — so your design survives the journey from drawing board to handover.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-bronze">Book a Strategy Call</Link>
                <Link href="/hsi-os" className="btn btn-outline-white">Explore HSIOS™</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CHALLENGES WE SOLVE ───────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-10 lg:mb-16">
            <div className="section-label">The Problems We Solve</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              What Every Architect<br />
              <span className="text-sandstone-600">Faces on Site.</span>
            </h2>
          </RevealOnScroll>
          <div className="space-y-4 max-w-3xl">
            {challenges.map(({ title, solution }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="grid sm:grid-cols-2 gap-6 p-7 rounded-2xl bg-white border border-ivory-300 hover:border-sandstone-300 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2 block" />
                    <p className="text-warmgray-700 font-medium leading-snug">{title}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-sandstone-500 flex-shrink-0 mt-2 block" />
                    <p className="text-warmgray-600 text-sm leading-relaxed">{solution}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONFLICT DETECTION CALLOUT ────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <RevealOnScroll>
              <div className="section-label text-sandstone-400">Conflict Detection Engine</div>
              <h2 className="font-serif text-display-md text-white mb-6">
                We Identify Clashes<br />
                <span className="text-sandstone-300">Before Site Work Starts.</span>
              </h2>
              <p className="text-warmgray-300 leading-relaxed mb-8">
                The most expensive mistakes happen at the intersection of trades — ceiling meets HVAC, cabinetry meets electrical, door swings meet usability. HSIOS™ surfaces every conflict before execution begins.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Civil vs electrical conduit routing',
                  'Plumbing vs furniture alignment',
                  'HVAC duct vs ceiling depth and design',
                  'Bathroom slope, drain, and waterproofing',
                  'Shaft planning and service access',
                  'Storage planning and circulation bottlenecks',
                  'Door swing radius and usability',
                  'Staircase geometry and structural conflicts',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-warmgray-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0 mt-2 block" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/hsi-os" className="btn btn-bronze">See Conflict Detection in HSIOS™ →</Link>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="bg-charcoal-900 rounded-2xl border border-white/10 p-8">
                <div className="text-xs font-bold tracking-widest uppercase text-sandstone-400 mb-6">Conflict Scan Results</div>
                {[
                  { clash: 'HVAC duct vs false ceiling depth',  severity: 'High',   status: 'Resolved', statusClr: 'text-green-400 bg-green-400/10' },
                  { clash: 'Plumbing vs kitchen island',        severity: 'High',   status: 'Resolved', statusClr: 'text-green-400 bg-green-400/10' },
                  { clash: 'Bathroom slope and drain issue',    severity: 'High',   status: 'Resolved', statusClr: 'text-green-400 bg-green-400/10' },
                  { clash: 'Shaft access vs structural wall',   severity: 'Medium', status: 'Flagged',  statusClr: 'text-yellow-400 bg-yellow-400/10' },
                  { clash: 'Staircase vs beam conflict',        severity: 'Medium', status: 'Flagged',  statusClr: 'text-yellow-400 bg-yellow-400/10' },
                  { clash: 'Guest room door swing radius',      severity: 'Low',    status: 'Reviewed', statusClr: 'text-warmgray-400 bg-white/5' },
                ].map(({ clash, severity, status, statusClr }) => (
                  <div key={clash} className="flex items-center justify-between py-3 border-b border-white/6 last:border-0">
                    <div>
                      <div className="text-sm text-white font-medium">{clash}</div>
                      <div className="text-xs text-warmgray-500 mt-0.5">Severity: {severity}</div>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${statusClr}`}>{status}</span>
                  </div>
                ))}
                <div className="mt-6 pt-5 border-t border-white/8 flex justify-between text-xs text-warmgray-500">
                  <span>6 conflicts detected</span>
                  <span className="text-green-400 font-semibold">4 resolved pre-execution</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-10 lg:mb-16">
            <div className="section-label">What HSIOS™ Delivers for Architects</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Six Capabilities.<br />
              <span className="text-sandstone-600">All Protecting Your Intent.</span>
            </h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ code, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="card-warm p-8 h-full">
                  <div className="w-10 h-10 rounded-lg bg-sandstone-100 border border-sandstone-200 flex items-center justify-center mb-5">
                    <span className="font-bold text-[9px] tracking-widest text-sandstone-600">{code}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXECUTION DISCIPLINES ────────────────────────────────── */}
      <ExecutionDisciplines variant="compact" showCTA={true} context="for-architects" />

      {/* ── ENGAGEMENT MODELS — Platform emphasis for design teams ── */}
      <EngagementModels emphasis="platform" />

      {/* ── USE CASES ───────────────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-10 lg:mb-16">
            <div className="section-label">Project Types</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Built for Every Stage of{' '}
              <span className="text-sandstone-600">Your Practice.</span>
            </h2>
          </RevealOnScroll>
          <div className="space-y-8">
            {useCases.map(({ title, desc, image }, i) => (
              <RevealOnScroll key={title} delay={i * 0.08}>
                <div className="grid lg:grid-cols-2 gap-0 items-center rounded-3xl overflow-hidden bg-white border border-ivory-300">
                  <div className={`relative aspect-[16/9] lg:aspect-auto lg:min-h-[300px] ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                  <div className="p-6 lg:p-10">
                    <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-3">Use Case {String(i + 1).padStart(2,'0')}</div>
                    <h3 className="font-serif text-display-sm text-charcoal-800 mb-4">{title}</h3>
                    <p className="text-warmgray-600 leading-relaxed mb-6">{desc}</p>
                    <Link href="/contact" className="btn btn-outline-dark text-sm">Discuss This →</Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ───────────────────────────────────── */}
      <section className="py-20 bg-ivory-100">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="card-luxury bg-white p-6 sm:p-10 text-center">
              <div className="font-serif text-5xl text-sandstone-300 leading-none mb-6">&ldquo;</div>
              <p className="font-serif text-xl text-charcoal-800 leading-relaxed italic mb-8 max-w-2xl mx-auto">
                I was sceptical about bringing in an execution partner — I thought it would compromise my design control.
                It was the opposite. HSIOS™ was collaborative from day one. My specs were treated as non-negotiable,
                and the conflict detection engine saved us from three expensive on-site disputes.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-11 h-11 rounded-full bg-sandstone-100 flex items-center justify-center font-serif font-bold text-sandstone-700 text-sm">DK</div>
                <div className="text-left">
                  <div className="font-semibold text-charcoal-800 text-sm">Divya K.</div>
                  <div className="text-xs text-warmgray-500 mt-0.5">Principal Designer · Pune</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-sandstone-400 text-center">
        <RevealOnScroll>
          <div className="container-luxury max-w-2xl">
            <h2 className="font-serif text-display-md text-white mb-5">
              Protect Your Design Intent.
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Start a conversation about how HSIOS™ can work alongside your practice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-charcoal-800 hover:bg-ivory-100">Book a Strategy Call</Link>
              <a
                href="https://wa.me/918010234802?text=Hi%20HSIOS%2C%20I%27m%20an%20architect%20interested%20in%20your%20platform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
