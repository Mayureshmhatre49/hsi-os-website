import Link from 'next/link'
import { MessageCircle, Mail, Phone, MapPin, ArrowUpRight, Check, Clock } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import TrackedContactLink from '@/components/ui/TrackedContactLink'
import { PHONES, EMAIL, WHATSAPP_NUMBER, INDIA_OFFICES, OFFICES, type Office } from '@/lib/contact'
import { FACTS } from '@/content/facts'

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi HSI, I'd like to discuss my project")}`
const HOURS = 'Mon–Fri 9am–6pm · Sat 10am–3pm IST'

const whatToSend = [
  'Where the property is — Alibag, Mumbai, Pune or elsewhere',
  'Its size and stage: bare shell, design in progress or drawings ready',
  'Drawings or a few site photos, if you have them',
  'When you would like to move in',
]

const steps = [
  { n: '01', title: 'We reply on WhatsApp', desc: 'A member of our team — not a bot — usually replies within 2 hours during working hours.' },
  { n: '02', title: 'A 45-minute discovery call', desc: 'In person in Alibag or Pune, or over video if you are in another city or abroad.' },
  { n: '03', title: 'Scope and an honest range', desc: 'A structured scope and a realistic investment range — and a straight answer if we are not the right fit.' },
]

const faqs = [
  {
    q: 'Do I need to have a design already?',
    a: 'No. We work with your existing architect or designer, or help you coordinate one. We are execution specialists — we work from whatever stage you are at.',
  },
  {
    q: 'Can you manage a project remotely if I am an NRI?',
    a: 'Yes. HSIOS™ was built with remote owners in mind: a live budget, a daily photo record and digital approvals, wherever you are.',
  },
  {
    q: 'What is the minimum project size you work with?',
    a: `We focus on premium residential projects — typically ${FACTS.minProjectValue} and above in interior execution value.`,
  },
]

function OfficeCard({ office, featured = false }: { office: Office; featured?: boolean }) {
  return (
    <div className={`h-full flex flex-col p-7 rounded-2xl border ${featured ? 'bg-white border-ivory-300 shadow-card' : 'bg-ivory-100 border-ivory-300'}`}>
      <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-1">{office.country}</div>
      <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-4">{office.label}</h3>
      <address className="not-italic text-warmgray-700 leading-relaxed mb-6">
        <span className="block font-semibold text-charcoal-800">{office.company}</span>
        {office.addressLines.map((line) => (
          <span key={line} className="block">{line}</span>
        ))}
      </address>
      <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3">
        <TrackedContactLink
          href={`tel:${office.phone.e164}`}
          kind="phone"
          source={`contact-office-${office.label}`}
          className="inline-flex items-center gap-2 font-semibold text-sandstone-600 hover:text-sandstone-700 transition-colors"
        >
          <Phone size={15} strokeWidth={1.75} aria-hidden="true" />
          {office.phone.display}
        </TrackedContactLink>
        {office.mapsUrl && (
          <a
            href={office.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal-700 hover:text-sandstone-700 transition-colors"
          >
            Get directions <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only">(opens Google Maps in a new tab)</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal-900 relative overflow-hidden">
        <div className="container-luxury grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400">Contact</div>
            <h1 className="font-serif text-display-xl text-white mb-6">
              Talk to the team that will{' '}
              <em className="not-italic text-sandstone-300">build your home.</em>
            </h1>
            <p className="text-warmgray-300 text-lg leading-relaxed mb-8 max-w-xl">
              WhatsApp is the fastest way to reach us. A member of our team replies — usually within
              2 hours — and we take it from there: a call, a site visit or a video walkthrough of
              your drawings.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <TrackedContactLink
                href={WHATSAPP_URL}
                kind="whatsapp"
                source="contact-hero"
                className="btn bg-[#25D366] text-charcoal-900 hover:brightness-95 shadow-luxury-md"
              >
                <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
                WhatsApp to Discuss
              </TrackedContactLink>
              <TrackedContactLink
                href={`tel:${PHONES[0].e164}`}
                kind="phone"
                source="contact-hero"
                className="btn btn-outline-white"
              >
                <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
                Call {PHONES[0].display}
              </TrackedContactLink>
            </div>
            <p className="flex items-start gap-2 text-sm text-warmgray-400">
              <Clock size={14} className="mt-[3px] flex-shrink-0" aria-hidden="true" />
              {HOURS} · WhatsApp and video calls outside these hours for NRI clients
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <div className="text-xs font-bold tracking-widest uppercase text-sandstone-400 mb-4">
                Helpful to send in your first message
              </div>
              <ul className="space-y-4">
                {whatToSend.map((item) => (
                  <li key={item} className="flex gap-3 text-warmgray-200 leading-relaxed">
                    <span className="mt-1 w-5 h-5 rounded-full bg-sandstone-400/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-sandstone-300" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-6 border-t border-white/10 text-sm text-warmgray-400">
                Not ready to share details? A simple &ldquo;hello&rdquo; is fine — we&apos;ll ask the right questions.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── WAYS TO REACH US ─────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-ivory-200" aria-label="Ways to reach us">
        <div className="container-luxury grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <TrackedContactLink
            href={WHATSAPP_URL}
            kind="whatsapp"
            source="contact-card"
            className="group p-7 rounded-2xl bg-sandstone-50 border border-sandstone-200 hover:shadow-card transition-all"
          >
            <MessageCircle className="text-sandstone-600 mb-4" size={22} strokeWidth={1.75} aria-hidden="true" />
            <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-1">WhatsApp · Fastest</div>
            <div className="font-serif text-xl font-bold text-charcoal-800 group-hover:text-sandstone-700 transition-colors whitespace-nowrap">{PHONES[0].display}</div>
            <div className="text-sm text-warmgray-600 mt-1">Usually replies within 2 hours</div>
          </TrackedContactLink>

          <div className="p-7 rounded-2xl bg-ivory-100 border border-ivory-300">
            <Phone className="text-sandstone-600 mb-4" size={22} strokeWidth={1.75} aria-hidden="true" />
            <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-2">Call</div>
            <div className="space-y-1.5">
              {INDIA_OFFICES.map((o) => (
                <TrackedContactLink
                  key={o.label}
                  href={`tel:${o.phone.e164}`}
                  kind="phone"
                  source={`contact-card-${o.label}`}
                  className="flex items-baseline justify-between gap-3 font-semibold text-charcoal-800 hover:text-sandstone-700 transition-colors whitespace-nowrap"
                >
                  {o.phone.display}
                  <span className="text-xs font-medium text-warmgray-600">{o.label.replace(' Office', '')}</span>
                </TrackedContactLink>
              ))}
            </div>
            <div className="text-sm text-warmgray-600 mt-2">{HOURS}</div>
          </div>

          <TrackedContactLink
            href={`mailto:${EMAIL}`}
            kind="email"
            source="contact-card"
            className="group p-7 rounded-2xl bg-ivory-100 border border-ivory-300 hover:shadow-card transition-all"
          >
            <Mail className="text-sandstone-600 mb-4" size={22} strokeWidth={1.75} aria-hidden="true" />
            <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-1">Email</div>
            <div className="font-serif text-xl font-bold text-charcoal-800 group-hover:text-sandstone-700 transition-colors">{EMAIL}</div>
            <div className="text-sm text-warmgray-600 mt-1">Drawings and documents welcome · reply within 24 hours</div>
          </TrackedContactLink>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="section-label">What Happens Next</div>
            <h2 className="font-serif text-display-md text-charcoal-800 mb-4">
              No forms. No sales pitch.
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed max-w-2xl mb-12">
              Our first conversation is purely to understand your project and whether HSI is the
              right fit. We only take on projects where we can deliver genuine value.
            </p>
          </RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {steps.map((s, i) => (
              <RevealOnScroll key={s.n} delay={i * 0.08}>
                <div className="h-full p-7 rounded-2xl bg-white border border-ivory-300">
                  <div className="font-serif text-3xl font-bold text-sandstone-600 mb-4">{s.n}</div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-2">{s.title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-3xl">
            {[
              { val: `${FACTS.villasDelivered}`, label: 'Villas delivered in Alibag' },
              { val: `${FACTS.conflictsCaughtPreExecution}`, label: 'Clashes caught before site' },
              { val: FACTS.budgetClaimStat.value, label: FACTS.budgetClaimStat.label },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-800">{val}</div>
                <div className="text-xs sm:text-sm text-warmgray-600 leading-snug mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICES ──────────────────────────────────────────── */}
      <section className="section-py bg-white" aria-labelledby="offices-heading">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="section-label">Our Offices</div>
            <h2 id="offices-heading" className="font-serif text-display-md text-charcoal-800 mb-10">
              Visit us in Alibag or Pune.
            </h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {INDIA_OFFICES.map((o) => (
              <RevealOnScroll key={o.label}>
                <OfficeCard office={o} featured />
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={16} className="text-sandstone-600" aria-hidden="true" />
              <h3 className="text-xs font-bold tracking-widest uppercase text-warmgray-600">International</h3>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-6">
            {OFFICES.map((o) => (
              <RevealOnScroll key={o.label}>
                <OfficeCard office={o} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="section-label">Quick Answers</div>
            <h2 className="font-serif text-display-sm text-charcoal-800 mb-10">
              Before You Reach Out
            </h2>
          </RevealOnScroll>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <RevealOnScroll key={q}>
                <div className="p-7 rounded-2xl bg-white border border-ivory-300">
                  <h3 className="font-serif font-bold text-charcoal-800 mb-2">{q}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <TrackedContactLink
              href={WHATSAPP_URL}
              kind="whatsapp"
              source="contact-faq"
              className="btn bg-[#25D366] text-charcoal-900 hover:brightness-95"
            >
              <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
              Ask us on WhatsApp
            </TrackedContactLink>
            <Link href="/insights" className="text-sm font-semibold text-sandstone-600 hover:text-sandstone-700 transition-colors">
              More answers in our Insights →
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
