import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Villa Interior Project Management — HSIOS™ | Hestia Smart Interiors',
  description:
    'Professional villa interior project management across India. HSIOS™ provides structured execution, live progress tracking, multi-trade coordination, and digital change approvals for luxury villas — Goa, Alibag, Lonavala, and beyond.',
  alternates: { canonical: 'https://www.hsios.in/villa-interior-project-management' },
  openGraph: {
    title: 'Villa Interior Project Management — HSIOS™',
    description: 'Technology-driven villa interior project management across India, powered by HSIOS™.',
    url: 'https://www.hsios.in/villa-interior-project-management',
  },
}

const capabilities = [
  {
    title: 'Master Schedule Engineering',
    desc: 'Every villa project begins with a microsecond-level master schedule. Civil, MEP, joinery, HVAC, smart home — all trades are sequenced to eliminate the costly bottlenecks that derail unmanaged villa builds.',
  },
  {
    title: 'Procurement Management',
    desc: 'Premium finishes, imported stone, bespoke hardware — all sourced, verified, and tracked through the HSIOS™ procurement module. No site delays from missing materials. No substitutions without your approval.',
  },
  {
    title: 'Quality Gate Inspections',
    desc: 'Photographic proof at every milestone. No phase begins until the previous one passes our on-site quality gate — ensuring concealed work (plumbing, conduits, waterproofing) meets spec before it is covered.',
  },
  {
    title: 'Remote Owner Dashboard',
    desc: 'Whether you\'re on site or overseas, your villa project is accessible 24/7. Daily logs, spend tracking, and milestone photos give you complete situational awareness without a single site visit.',
  },
  {
    title: 'Change Order Management',
    desc: 'Design variations, scope changes, and material upgrades go through a structured digital approval funnel. No verbal confirmations. No ambiguity. Every decision is documented with cost and timeline impact.',
  },
  {
    title: 'Handover Documentation',
    desc: 'Snag list management, defect tracking, and a complete as-built record at handover. Your villa comes with a digital paper trail — not just a contractor\'s verbal assurance.',
  },
]

const faqs = [
  {
    q: 'What does villa interior project management actually include?',
    a: 'It covers the complete execution lifecycle — from digitising your GFC drawings into trackable milestones, to managing all vendors, procurement, quality gates, budget tracking, and daily site supervision through to final handover. It is the operational layer between your architect\'s drawings and a finished villa.',
  },
  {
    q: 'Can you manage my villa project if I\'m based overseas?',
    a: 'Yes — remote project management is a core use case for HSIOS™. Our platform logs daily progress, cost movements, and milestone completions with photographic evidence, accessible from anywhere in the world. You approve decisions digitally, on your schedule.',
  },
  {
    q: 'How do you handle the coordination between multiple contractors on a villa?',
    a: 'The HSIOS™ Planning Engine sequences all trades — civil, MEP, HVAC, smart home, carpentry, stone installation — so they operate without creating bottlenecks for each other. Conflict detection flags scheduling clashes before they happen on site.',
  },
  {
    q: 'What if the villa is in a remote location like Alibag or Lonavala?',
    a: 'Remote locations are our speciality. We manage the full procurement pipeline from Mumbai and Pune to ensure materials are on site when needed. Our on-ground supervision is present regardless of location, and the platform functions identically.',
  },
  {
    q: 'Do you handle smart home and automation integration as part of villa project management?',
    a: 'Yes. Smart home conduit routing and wiring are planned before civil begins, preventing the costly wall-cutting that plagues unmanaged tech integrations. All automation vendors are sequenced into the master project schedule.',
  },
]

export default function VillaInteriorProjectManagementPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hestia-serenity-villa.jpg"
            alt="Villa interior project management by Hestia Smart Interiors"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-800/50 to-charcoal-900/20" />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">Specialist Service</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Villa Interior{' '}
                <span className="text-sandstone-400">Project Management</span>
                <br />
                End-to-End. Without Chaos.
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                Luxury villa builds are the most complex interior projects in India. HSIOS™ is
                the only execution platform purpose-built to manage every variable — from master
                schedule to handover documentation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20villa%20interior%20project%20management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-bronze"
                >
                  Start Your Villa Project
                </a>
                <Link href="/contact" className="btn btn-outline-white">
                  Request a Proposal
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-24 bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="section-label">Core Capabilities</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mt-4">
                What HSIOS™ Manages on Your Villa
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                A luxury villa is not a large apartment — it is a multi-trade orchestration
                challenge that demands a purpose-built management system.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((c, i) => (
              <RevealOnScroll key={c.title} delay={i * 0.08}>
                <div className="card-warm p-8 h-full">
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{c.title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-24 bg-white">
        <div className="container-luxury max-w-4xl">
          <RevealOnScroll>
            <h2 className="font-serif text-display-md text-charcoal-800 mb-6">
              The Villa Project Management Problem in India
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              A luxury villa interior involves 12 to 20 separate trade contractors operating
              on the same site — often simultaneously. Civil works, plumbing, electrical,
              HVAC, smart home conduits, stone installation, custom carpentry, painting, and
              landscaping all need to be sequenced with precision. One trade blocking another
              cascades into weeks of idle site time and uncapped cost escalation.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Add to this the challenge of premium material sourcing — imported hardware from
              Europe, custom stone from Rajasthan, bespoke millwork from specialist workshops —
              and the logistics complexity rivals a commercial construction project.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-10">
              HSIOS™ was built precisely for this. Our Planning Engine sequences every trade.
              Our procurement module tracks every material. Our quality gates ensure nothing is
              covered before it passes inspection. And our dashboard gives you the kind of project
              visibility that most homeowners only wish they had.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h3 className="font-serif text-2xl text-charcoal-800 mb-5">
              Villa Projects We Manage
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                'Goa Holiday Homes',
                'Alibag Weekend Villas',
                'Lonavala Hill Retreats',
                'Nashik Vineyard Estates',
                'Mumbai Farmhouses',
                'Bangalore Luxury Villas',
                'Pune Independent Homes',
                'Hill Station Properties',
                'NRI Remote-Managed Builds',
              ].map(type => (
                <div key={type} className="flex items-center gap-2.5 text-sm text-warmgray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0" />
                  {type}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-ivory-200">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="section-label">FAQ</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mt-4">
                Villa Project Management Questions
              </h2>
            </div>
          </RevealOnScroll>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <RevealOnScroll key={i} delay={i * 0.06}>
                <div className="card-warm p-8">
                  <h3 className="font-serif text-lg text-charcoal-800 mb-3">{f.q}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-charcoal-900 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400 mb-4">Start Your Villa</div>
            <h2 className="font-serif text-display-md text-white mb-5">
              Your Villa. Managed Precisely.{' '}
              <span className="text-sandstone-400">Delivered Flawlessly.</span>
            </h2>
            <p className="text-warmgray-400 leading-relaxed mb-8">
              No more contractor chaos. No more cost surprises. A completed luxury villa
              that matches every drawing — managed from day one to handover.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20villa%20interior%20project%20management"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-bronze"
              >
                Discuss Your Villa
              </a>
              <Link href="/projects" className="btn btn-outline-light">
                See Our Work
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
