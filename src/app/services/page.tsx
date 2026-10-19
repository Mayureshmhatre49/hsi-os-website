import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, GitBranch, BarChart2, Camera, CheckSquare, Archive, MapPin } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import ExecutionDisciplines from '@/components/ui/ExecutionDisciplines'
import { getAlternates, breadcrumb, serviceSchema } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'
import { FACTS } from '@/content/facts'
import { WHATSAPP_NUMBER } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Services — Turnkey Interior Execution',
  description:
    'Turnkey interior execution for villas and second homes, or an execution partner for architects — one accountable team, delivered through HSIOS™.',
  alternates: getAlternates('/services'),
}

const breadcrumbSchema = breadcrumb([
  { name: 'Home', url: 'https://www.hsios.in/' },
  { name: 'Services', url: 'https://www.hsios.in/services' },
])

const service = serviceSchema({
  name: 'Turnkey Luxury Interior Execution',
  description:
    'Complete interior execution for luxury villas and second homes — from approved drawings to a documented handover — delivered through an empanelled partner network and tracked in HSIOS™.',
  url: 'https://www.hsios.in/services',
  areaServed: ['Alibag', 'Karjat', 'Lonavala', 'Mumbai', 'India'],
})

const included = [
  { icon: FileText,   title: 'A full bill of quantities before work starts', desc: 'Every line item priced and agreed up front — no open-ended scope.' },
  { icon: GitBranch,  title: 'A clash check before any site work begins',    desc: 'Drawings are reconciled across trades so conflicts are caught on paper, not on site.' },
  { icon: BarChart2,  title: 'A live budget dashboard, updated as you go',   desc: 'Every rupee spent and committed, visible to you at any time — from anywhere.' },
  { icon: Camera,     title: 'Daily photo documentation tied to the schedule', desc: 'A dated photo record of progress against each milestone.' },
  { icon: CheckSquare, title: `Milestone quality inspections`,               desc: `${FACTS.qaCheckpoints} QA checkpoints across 12 phases, signed off before the next phase begins.` },
  { icon: Archive,    title: 'A handover dossier with warranties and AMC',   desc: 'Finishes, installations and warranty dates documented and handed over as a permanent record.' },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, service]} />

      {/* ── HERO / INTRO ─────────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="section-label">Services</div>
            <h1 className="font-serif text-display-lg text-charcoal-800 mb-6">
              Turnkey interior execution,{' '}
              <span className="text-sandstone-600">one accountable team.</span>
            </h1>
            <p className="text-lg text-warmgray-600 leading-relaxed mb-8">
              HSI delivers the complete interior for luxury villas and second homes — from approved
              drawings to a handed-over home — through its empanelled partner network, tracked end to
              end in HSIOS™, our in-house platform. Every rupee, decision and site day stays visible
              to you, even from Mumbai or abroad.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-bronze">Book a Consultation</Link>
              <Link href="/projects" className="btn btn-outline-dark">See Our Projects</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── TWO WAYS TO WORK WITH HSI ────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-xl mb-12 lg:mb-16">
              <div className="section-label">Engagement</div>
              <h2 className="font-serif text-display-md text-charcoal-800">
                Two ways to work with HSI.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            <RevealOnScroll>
              <div className="card-luxury bg-ivory-50 p-8 h-full flex flex-col">
                <div className="badge-warm mb-5 w-fit">For owners</div>
                <h3 className="font-serif text-display-sm text-charcoal-800 mb-4">Turnkey Execution</h3>
                <p className="text-warmgray-600 leading-relaxed">
                  HSI delivers the complete interior — from approved drawings to a handed-over home —
                  through its empanelled partner network, with one accountable team. Procurement,
                  sequencing, quality and handover all sit with us.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="card-luxury bg-ivory-50 p-8 h-full flex flex-col">
                <div className="badge-warm mb-5 w-fit">For architects &amp; designers</div>
                <h3 className="font-serif text-display-sm text-charcoal-800 mb-4">Execution Partner</h3>
                <p className="text-warmgray-600 leading-relaxed">
                  Your practice keeps design control. HSI takes the GFC drawings and runs procurement,
                  sequencing, quality and handover on site — so your specifications survive execution
                  intact.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Execution Network note — resolves the "own workforce" vs "not the labour layer" conflict */}
          <RevealOnScroll delay={0.2}>
            <p className="mt-10 max-w-3xl text-warmgray-600 leading-relaxed border-l-2 border-sandstone-400 pl-5">
              However you engage us, HSI is the orchestration, accountability and quality layer —
              not a labour subcontractor. Work is delivered through our empanelled partner network,
              sequenced and milestone-verified through HSIOS™.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── WHAT WE EXECUTE — full 10-discipline block ───────── */}
      <ExecutionDisciplines variant="full" showCTA={false} context="services" />

      {/* ── WHAT EVERY HSI PROJECT INCLUDES ──────────────────── */}
      <section className="section-py bg-white">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-xl mb-12 lg:mb-16">
              <div className="section-label">Standard on every project</div>
              <h2 className="font-serif text-display-md text-charcoal-800">
                What every HSI project includes.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map(({ icon: Icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.06}>
                <div className="card-warm p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-sandstone-100 flex items-center justify-center mb-5">
                    <Icon className="text-sandstone-700" size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-2">{title}</h3>
                  <p className="text-sm text-warmgray-600 leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── AFTER-HANDOVER CARE & AMC ────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="section-label">After handover</div>
            <h2 className="font-serif text-display-md text-charcoal-800 mb-6">
              After-handover care &amp; AMC.
            </h2>
            <p className="text-lg text-warmgray-600 leading-relaxed mb-4">
              Ownership doesn&rsquo;t end at handover. Every finish, installation and warranty date
              is documented and kept accessible to you as a permanent record of your home.
            </p>
            <p className="text-lg text-warmgray-600 leading-relaxed">
              HSI stays on for defect tracking and preventive maintenance under an annual maintenance
              contract — so your home is looked after long after the last trade leaves the site.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── WHERE WE WORK ────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-luxury max-w-4xl">
          <RevealOnScroll>
            <div className="section-label">Where we work</div>
            <h2 className="font-serif text-display-md text-charcoal-800 mb-8">
              Based in Alibag. Delivering across the Konkan coast.
            </h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Alibag & the Konkan coast',
              'Karjat / Lonavala',
              'Mumbai owners building in Alibag',
              'NRI clients, managed remotely',
            ].map((place, i) => (
              <RevealOnScroll key={place} delay={i * 0.06}>
                <div className="flex items-center gap-3 p-5 rounded-xl bg-ivory-100">
                  <MapPin className="text-sandstone-600 flex-shrink-0" size={18} />
                  <span className="text-charcoal-800 font-medium">{place}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={0.2}>
            <p className="mt-8 text-warmgray-600">
              We focus on premium projects with a minimum interior execution value of{' '}
              <strong className="text-charcoal-800">{FACTS.minProjectValue}</strong>.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="section-py bg-charcoal-800 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <h2 className="font-serif text-display-md text-white mb-6">
              Let&rsquo;s talk about your project.
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-10">
              Book a consultation to walk through your drawings, timeline and budget — in person,
              or over video if you&rsquo;re building from another city or abroad.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-bronze">Book a Consultation</Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20HSI%2C%20I%27d%20like%20to%20discuss%20my%20interior%20project`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
              >
                WhatsApp Us
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
