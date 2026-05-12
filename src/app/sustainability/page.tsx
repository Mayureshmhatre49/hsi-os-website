import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Sustainability Built Into Every Decision — HSIOS™',
  description:
    'HSIOS™ embeds sustainability into every interior project — smarter materials, reduced rework, lower carbon footprint, and documented waste reduction. Luxury, technology, and responsibility together.',
  alternates: { canonical: 'https://www.hsios.in/sustainability' },
}

/* ── Inline SVG icons — no emoji, no external library ─── */
const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M11 20A7 7 0 014 13c0-5 5-10 10-10 0 5-2 9-3 11" /><path d="M11 20c0-4.5 2-7 5-9" />
  </svg>
)
const IconCycle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 12a9 9 0 109-9M3 12l3-3m-3 3l3 3" />
  </svg>
)
const IconBan = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="9" /><path d="M5.6 5.6l12.8 12.8" />
  </svg>
)
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
)
const IconLight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M9 18h6M10 22h4M12 2v2M4.22 4.22l1.42 1.42M2 12h2M4.22 19.78l1.42-1.42M20 12h2M18.36 5.64l1.42-1.42" /><path d="M12 6a6 6 0 010 12" />
  </svg>
)
const IconWind = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M17.7 7.7A2.5 2.5 0 1120 12H2M9.6 4.4A2 2 0 1111 8H2M12.6 19.4A2 2 0 1014 16H2" />
  </svg>
)
const IconTruck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" /><rect x="9" y="11" width="14" height="10" rx="2" /><circle cx="12" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
  </svg>
)
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)
const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
)
const IconNetwork = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="M12 7v4m0 0l-5.5 6M12 11l5.5 6" />
  </svg>
)
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
  </svg>
)
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)
const IconX = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

const reworkItems = [
  'Breaking finished walls due to coordination gaps',
  'Replacing incorrect or mismatched materials',
  'Reworking electrical and plumbing systems',
  'Modifying layouts after execution has begun',
  'Frequent redesigns caused by poor upfront planning',
]

const reworkImpact = [
  'Higher material consumption',
  'Increased transportation emissions',
  'Labour waste and schedule overruns',
  'Dust, debris, and landfill generation',
  'Exponential growth in project carbon footprint',
]

const materialCriteria = [
  'Durability & lifecycle performance',
  'Maintenance requirements',
  'Environmental impact rating',
  'Long-term replacement frequency',
  'Climate and usage suitability',
  'Sustainability vs. aesthetics balance',
]

const efficientHomeItems = [
  { Icon: IconLight,   title: 'Natural Light Optimisation',   desc: 'Layout planning maximises natural light, reducing artificial lighting dependency and long-term energy consumption.' },
  { Icon: IconWind,    title: 'Ventilation & Airflow',         desc: 'Cross-ventilation strategies reduce reliance on mechanical cooling — improving air quality and lowering energy use.' },
  { Icon: IconTruck,   title: 'Optimised Material Transport',  desc: 'Consolidated procurement and local vendor preference reduce deliveries, transport emissions, and carbon cost per project.' },
  { Icon: IconShield,  title: 'Smarter Plumbing Planning',     desc: 'Reduced water wastage through precise plumbing coordination and efficient fixture integration from the design stage.' },
  { Icon: IconNetwork, title: 'Smart System Integration',      desc: 'Efficient appliance and automation planning ensures homes consume fewer resources while delivering superior performance.' },
  { Icon: IconChart,   title: 'Sustainability Reporting',      desc: 'Every project ends with a full report — waste reduction, sourcing decisions, carbon estimates, and documented disposal records.' },
]

const pillars = [
  {
    Icon: IconBan,
    word: 'Refuse',
    title: 'Refuse Waste at Source',
    desc: 'Unnecessary materials, over-ordering, and inefficient processes are rejected before procurement approval. If it can be avoided, it is.',
    points: ['Unnecessary materials', 'Over-ordering and surplus', 'Single-use site waste', 'Inefficient trade sequencing'],
  },
  {
    Icon: IconCycle,
    word: 'Reuse',
    title: 'Reuse Wherever Meaningful',
    desc: 'Salvageable materials, premium fixtures, and structural elements are retained, refurbished, and reintegrated — reducing both cost and landfill contribution.',
    points: ['Salvageable site materials', 'Existing premium fixtures', 'Structural elements', 'Quality hardware and fittings'],
  },
  {
    Icon: IconLeaf,
    word: 'Recycle',
    title: 'Recycle Responsibly',
    desc: 'Construction waste is segregated and routed to certified recyclers. Every project receives a documented waste disposal record.',
    points: ['Segregated construction waste', 'Certified recycling channels', 'Packaging waste recovery', 'Documented disposal records'],
  },
  {
    Icon: IconArrow,
    word: 'Reduce',
    title: 'Reduce Carbon Footprint',
    desc: 'Local vendor preference and consolidated transport cycles lower the carbon cost of every project. Less waste means fewer trips, fewer emissions.',
    points: ['Local vendor preference', 'Consolidated deliveries', 'Lower transport emissions', 'Carbon offset tracking'],
  },
]

const ecosystem = [
  { role: 'Homeowners',    desc: 'Full visibility into decisions, progress, and spend' },
  { role: 'Designers',     desc: 'Aligned with execution from day one' },
  { role: 'Contractors',   desc: 'Digitally tracked, documented, accountable' },
  { role: 'Vendors',       desc: 'Planned procurement — no over-ordering' },
  { role: 'Consultants',   desc: 'Integrated into a single coordination layer' },
  { role: 'Project Mgrs',  desc: 'Real-time site data and execution control' },
]

const longTermItems = [
  { Icon: IconChart,   label: 'Digital maintenance records', desc: 'Full asset history and service logs accessible throughout the home\'s life.' },
  { Icon: IconClock,   label: 'Asset lifecycle tracking',   desc: 'Proactive visibility into when systems, finishes, and fixtures need attention.' },
  { Icon: IconShield,  label: 'Easier upgrades & repairs',  desc: 'Documented as-built information makes future interventions faster and cheaper.' },
  { Icon: IconLeaf,    label: 'Long-term operational efficiency', desc: 'Well-managed homes consume fewer resources and generate significantly less waste over their lifecycle.' },
]

const myths = [
  { myth: 'Sustainability means lower quality',              truth: 'The best sustainable materials are the most durable and premium.' },
  { myth: 'Sustainable projects always cost more',           truth: 'Better planning and less waste reduces total project cost.' },
  { myth: 'You have to choose between luxury and responsibility', truth: 'HSIOS™ was built to prove they\'re not in conflict.' },
  { myth: 'It\'s just a marketing claim',                    truth: 'We track and report it — with data, not words.' },
]

export default function SustainabilityPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-charcoal-900">
        <div className="absolute inset-0">
          {/* Deep warm-charcoal base — sunlit interior atmosphere */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(150deg, #1f1509 0%, #2e1f0d 18%, #1c1408 42%, #0e0b07 68%, #070503 100%)' }} />
          {/* Golden radial glow — suggests warm window light from upper right */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 58% 68% at 76% 28%, rgba(194,152,68,0.22) 0%, rgba(160,110,42,0.09) 38%, transparent 65%)' }} />
          {/* Secondary cooler glow — depth from lower left */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 40% 50% at 15% 80%, rgba(80,60,30,0.18) 0%, transparent 55%)' }} />
          {/* Architectural grid — subtle floor tile / structural lines */}
          <div className="absolute inset-0 opacity-[0.032]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '76px 76px' }} />
          {/* Text readability gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
        </div>
        <div className="container-luxury relative z-10 py-32">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <div className="section-label text-sandstone-400">Sustainability</div>
              <h1 className="font-serif text-display-xl text-white mt-3 mb-6 leading-tight">
                Sustainability Built Into<br />
                <em className="not-italic text-sandstone-300">Every Decision.</em>
              </h1>
              <p className="text-warmgray-300 text-xl leading-relaxed mb-4 font-serif">
                Not a feature added later — a core intelligence layer woven into how interiors are planned, coordinated, executed, and managed.
              </p>
              <p className="text-warmgray-400 text-base leading-relaxed mb-10 max-w-xl">
                HSIOS™ helps create a smarter, process-driven ecosystem where every stakeholder works in alignment from the beginning — delivering fewer mistakes, fewer rebuilds, lower waste, and more sustainable homes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-bronze">Start a Sustainable Project</Link>
                <Link href="/hsi-os" className="btn btn-outline-white">Explore HSIOS™</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ────────────────────────────────────── */}
      <section className="py-16 bg-sandstone-400">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {[
              { num: '4R',    label: 'Sustainability Framework',   sub: 'Refuse · Reuse · Recycle · Reduce' },
              { num: '100%',  label: 'Projects with waste tracking', sub: 'Documented disposal records' },
              { num: 'Zero',  label: 'Compromise on aesthetics',   sub: 'Luxury and responsibility together' },
              { num: '1st',   label: 'Time right — always',        sub: 'Eliminate rework at source' },
            ].map(({ num, label, sub }) => (
              <RevealOnScroll key={num} className="px-8 py-4 text-center first:pl-0 last:pr-0">
                <div className="font-serif text-4xl font-bold text-white mb-1">{num}</div>
                <div className="text-white font-semibold text-sm">{label}</div>
                <div className="text-white/60 text-xs mt-1">{sub}</div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM: MAKE & BREAK CULTURE ─────────────────── */}
      <section className="section-py bg-charcoal-800 overflow-hidden">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <RevealOnScroll>
              <div className="section-label text-sandstone-400">The Hidden Problem</div>
              <h2 className="font-serif text-display-lg text-white mt-3 mb-6">
                The&nbsp;&ldquo;Make<br />
                and Break&rdquo;<br />
                <em className="not-italic text-sandstone-300">Culture.</em>
              </h2>
              <p className="text-warmgray-300 text-lg leading-relaxed mb-6">
                One of the biggest hidden contributors to environmental waste in interior projects is repeated rework — a cycle most clients never see but always pay for.
              </p>
              <p className="text-warmgray-400 leading-relaxed">
                Every unnecessary correction increases material consumption, transportation emissions, labour waste, dust, and landfill generation — multiplying the project&apos;s total carbon footprint silently.
              </p>
              <div className="mt-10 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-sandstone-400/15 border border-sandstone-400/30">
                <span className="font-serif text-5xl font-bold text-sandstone-300 leading-none">3×</span>
                <div>
                  <p className="text-white font-semibold text-sm">More waste per rework cycle</p>
                  <p className="text-warmgray-400 text-xs mt-0.5">vs. a first-time-right execution</p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1} className="space-y-6">
              {/* Causes */}
              <div className="p-7 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-xs font-semibold text-sandstone-400 uppercase tracking-widest mb-5">Common causes of rework</p>
                <div className="space-y-3">
                  {reworkItems.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-900/40 border border-red-700/40 flex items-center justify-center shrink-0 mt-0.5 text-red-400">
                        <IconX />
                      </div>
                      <span className="text-sm text-warmgray-300 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Consequences */}
              <div className="p-7 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-xs font-semibold text-sandstone-400 uppercase tracking-widest mb-5">Environmental consequences</p>
                <div className="space-y-3">
                  {reworkImpact.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-sandstone-400/20 border border-sandstone-400/30 flex items-center justify-center shrink-0 mt-0.5 text-sandstone-400">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M12 8v8M8 12l4 4 4-4"/></svg>
                      </div>
                      <span className="text-sm text-warmgray-300 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 rounded-xl border border-sandstone-400/40 bg-sandstone-400/10">
                <p className="text-sandstone-200 text-sm font-semibold leading-relaxed">
                  HSIOS™ minimises these issues through better planning, real-time coordination, execution tracking, and process management — helping projects <span className="text-white">get it right the first time.</span>
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── CARBON INTELLIGENCE ───────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-2xl mb-16">
            <div className="section-label">Carbon Intelligence</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-2">
              Reducing Carbon Footprint Through<br />
              <span className="text-sandstone-600">Intelligent Interior Management.</span>
            </h2>
            <p className="text-warmgray-600 mt-5 text-lg leading-relaxed">
              A significant portion of a home&apos;s carbon footprint comes not only from construction, but from inefficient interior planning and execution over the life of the property. HSIOS™ addresses this through multiple layers of intelligence and coordination.
            </p>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Better Upfront Planning',
                desc: 'Precise coordination between all stakeholders before a single wall is touched — eliminating the guesswork that leads to costly, carbon-heavy corrections.',
                items: ['Design-to-execution alignment', 'Multi-trade coordination', 'Procurement planning', 'Layout validation'],
              },
              {
                num: '02',
                title: 'Real-Time Coordination',
                desc: 'Live tracking of site execution ensures that decisions are documented, changes are controlled, and nothing falls through the gaps between teams.',
                items: ['Digital site monitoring', 'Decision documentation', 'Change management', 'Team collaboration'],
              },
              {
                num: '03',
                title: 'Process Management',
                desc: 'Structured workflows replace ad-hoc execution — reducing duplication, miscommunication, and the waste that comes from fragmented delivery.',
                items: ['Structured trade sequencing', 'Milestone tracking', 'Quality checkpoints', 'Waste documentation'],
              },
            ].map(({ num, title, desc, items }) => (
              <RevealOnScroll key={num} delay={parseInt(num) * 0.07}>
                <div className="h-full border border-ivory-200 rounded-3xl p-8 bg-ivory-100 flex flex-col">
                  <div className="font-serif text-5xl font-bold text-sandstone-200 leading-none mb-6">{num}</div>
                  <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed mb-6 flex-1">{desc}</p>
                  <div className="space-y-2 pt-5 border-t border-ivory-300">
                    {items.map(item => (
                      <div key={item} className="flex items-center gap-2.5 text-xs text-warmgray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARBON STORY ENGINE ───────────────────────────────── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-3xl mb-12">
            <div className="section-label">Carbon Story Engine</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-2 mb-6">
              Carbon savings, translated into{' '}
              <em className="not-italic text-sandstone-600">terms that matter.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              Every BOQ item is scored against a verified material carbon profile. Savings versus
              the baseline material are tracked at project level and converted into units anyone
              can grasp — trees absorbed, kilometres driven, flights avoided, household electricity.
              Numbers your family understands. Numbers a sustainability report can defend.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="rounded-3xl bg-white border border-ivory-300 p-8 sm:p-10 shadow-luxury">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
                {/* Hero metric — trees */}
                <div className="lg:col-span-2 bg-sandstone-50 border border-sandstone-200 rounded-2xl p-7 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-3">
                      Example · A 2,400 kg CO₂e saving
                    </div>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-serif text-6xl sm:text-7xl font-bold text-sandstone-700 leading-none">114</span>
                      <span className="text-warmgray-600 text-sm font-semibold">trees absorbing CO₂ for one year</span>
                    </div>
                    <p className="text-xs text-warmgray-500 leading-relaxed">
                      Based on 21 kg CO₂e absorbed per mature tree per year. The savings calculation is anchored
                      in the Indian grid emissions factor of 0.82 kg CO₂e per kWh.
                    </p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-sandstone-200">
                    <div className="text-[11px] text-warmgray-500 leading-snug">
                      Carbon savings calculated per project against material baselines. Numbers shown are
                      illustrative of premium villa execution, not a guarantee.
                    </div>
                  </div>
                </div>

                {/* Three sub-metrics */}
                <div className="lg:col-span-3 grid sm:grid-cols-3 gap-5">
                  {[
                    {
                      value: '~11,400',
                      unit: 'km',
                      label: 'Car kilometres avoided',
                      factor: '0.21 kg CO₂e / km driven',
                    },
                    {
                      value: '~9,400',
                      unit: 'km',
                      label: 'Flight kilometres avoided',
                      factor: '0.255 kg CO₂e / km flown',
                    },
                    {
                      value: '~2,930',
                      unit: 'kWh',
                      label: 'Grid electricity offset',
                      factor: '0.82 kg CO₂e / kWh · India grid',
                    },
                  ].map(({ value, unit, label, factor }) => (
                    <div key={label} className="border border-ivory-300 rounded-2xl p-6 flex flex-col">
                      <div className="flex items-baseline gap-1.5 mb-3">
                        <span className="font-serif text-3xl font-bold text-charcoal-800 leading-none">{value}</span>
                        <span className="text-xs font-semibold text-warmgray-500 uppercase tracking-wider">{unit}</span>
                      </div>
                      <div className="text-sm font-semibold text-charcoal-800 mb-3 leading-snug">{label}</div>
                      <div className="text-[11px] text-warmgray-500 mt-auto leading-relaxed">{factor}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-ivory-200 grid md:grid-cols-3 gap-6 text-sm text-warmgray-600 leading-relaxed">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-2">How it works</div>
                  Every line item in your BOQ is matched to a verified material carbon profile. The platform
                  computes <em className="not-italic font-semibold text-charcoal-800">carbonUsed vs carbonBaseline</em>{' '}
                  for the same component built traditionally.
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-2">What you see</div>
                  Per-project carbon scorecard, top offenders, lower-carbon alternatives with cost delta,
                  and the Story Engine narrative you can share with family, lenders, or auditors.
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-2">What it isn&apos;t</div>
                  Not a carbon-neutral claim. Not a green-building shortcut. A measurement framework that
                  makes carbon visible — and overridable, with the override recorded for your report.
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── MATERIAL INTELLIGENCE ─────────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <RevealOnScroll>
              <div className="section-label text-sandstone-400">Material Intelligence</div>
              <h2 className="font-serif text-display-lg text-white mt-2 mb-6">
                Smarter Material<br />
                Selection for a<br />
                <em className="not-italic text-sandstone-300">Sustainable Future.</em>
              </h2>
              <p className="text-warmgray-300 text-lg leading-relaxed mb-6">
                Instead of short-term choices that require constant replacement, HSIOS™ enables smarter, more responsible material decisions that improve the longevity of interiors while reducing environmental burden over time.
              </p>
              <p className="text-warmgray-400 leading-relaxed">
                The platform helps identify alternate materials and solutions that balance sustainability, aesthetics, performance, cost efficiency, and long-term value — without compromising on the premium standard the project demands.
              </p>

              {/* Balance pills */}
              <div className="mt-10 flex flex-wrap gap-2">
                {['Sustainability', 'Aesthetics', 'Performance', 'Cost Efficiency', 'Long-term Value'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-white border border-white/15">{tag}</span>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-xs font-semibold text-sandstone-400 uppercase tracking-widest mb-8">Material evaluation criteria</p>
                <div className="grid grid-cols-2 gap-4">
                  {materialCriteria.map((item, i) => (
                    <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/8">
                      <span className="font-serif text-xl font-bold text-sandstone-400/40 leading-none shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-sm text-warmgray-300 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-5 rounded-xl border border-sandstone-400/30 bg-sandstone-400/10">
                  <p className="text-sandstone-200 text-sm leading-relaxed">
                    <span className="font-semibold text-white">The result:</span> Premium spaces that last longer, need less maintenance, and create significantly less environmental burden over their full lifecycle.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── EFFICIENT HOMES ───────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-2xl mb-16">
            <div className="section-label">Efficient Homes</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-2">
              Sustainable Homes Are<br />
              <span className="text-sandstone-600">Efficient Homes.</span>
            </h2>
            <p className="text-warmgray-600 mt-5 text-lg leading-relaxed">
              True sustainability is not only about materials — it is about how efficiently a home functions every day. HSIOS™ improves sustainability through better MEP coordination, optimised systems, and long-term maintenance visibility.
            </p>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {efficientHomeItems.map(({ Icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="card-warm p-8 h-full flex flex-col gap-5">
                  <div className="w-11 h-11 rounded-xl bg-sandstone-400/15 border border-sandstone-400/20 flex items-center justify-center text-sandstone-600">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-2">{title}</h3>
                    <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4R FRAMEWORK ──────────────────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label text-sandstone-400">Our Framework</div>
            <h2 className="font-serif text-display-lg text-white mt-2">
              How We Build<br />
              <em className="not-italic text-sandstone-300">Responsibly.</em>
            </h2>
          </RevealOnScroll>

          {/* Horizontal connector on lg */}
          <div className="hidden lg:flex items-start mb-2 relative">
            {pillars.map(({ word }, i) => (
              <div key={word} className="flex-1 flex items-center">
                <div className="w-8 h-8 rounded-full border-2 border-sandstone-400 flex items-center justify-center shrink-0 z-10 bg-charcoal-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-sandstone-400 block" />
                </div>
                {i < pillars.length - 1 && <div className="flex-1 h-px bg-sandstone-400/30 mx-1" />}
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map(({ Icon, word, title, desc, points }, i) => (
              <RevealOnScroll key={word} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-white/10 bg-white/5 hover:border-sandstone-400/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-sandstone-400/20 flex items-center justify-center text-sandstone-300">
                      <Icon />
                    </div>
                    <div>
                      <div className="font-serif text-xl font-bold text-sandstone-300">{word}</div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-3">{title}</h3>
                  <p className="text-warmgray-400 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                  <ul className="space-y-2 pt-4 border-t border-white/8">
                    {points.map(p => (
                      <li key={p} className="flex items-center gap-2 text-xs text-warmgray-400">
                        <span className="w-1 h-1 rounded-full bg-sandstone-400/60 shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIGITAL ECOSYSTEM ─────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <RevealOnScroll>
              <div className="section-label">Digital Ecosystem</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mt-2 mb-6">
                Reducing Waste Through<br />
                <span className="text-sandstone-600">Technology & Coordination.</span>
              </h2>
              <p className="text-warmgray-600 text-lg leading-relaxed mb-5">
                Traditional interior execution operates through fragmented communication between multiple vendors and consultants. This creates confusion, delays, duplication, and waste. HSIOS™ creates a connected ecosystem where information flows transparently.
              </p>
              <div className="space-y-3 mt-8">
                {[
                  'Information flows transparently across all stakeholders',
                  'Site execution is digitally monitored in real time',
                  'Procurement is planned more accurately — no over-ordering',
                  'Material usage is controlled and documented',
                  'Fewer emergency corrections, fewer transport cycles',
                  'Lower embodied carbon impact project-wide',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sandstone-400/20 border border-sandstone-300 flex items-center justify-center shrink-0 mt-0.5 text-sandstone-600">
                      <IconCheck />
                    </div>
                    <span className="text-sm text-warmgray-600 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Ecosystem diagram */}
            <RevealOnScroll delay={0.1}>
              <div className="relative p-8 rounded-3xl bg-ivory-100 border border-ivory-300">
                <p className="text-xs font-semibold text-charcoal-600 uppercase tracking-widest mb-8 text-center">Connected Stakeholder Ecosystem</p>
                {/* Centre hub */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-sandstone-400 flex flex-col items-center justify-center shadow-lg">
                    <span className="font-serif text-xs font-bold text-white">HSIOS™</span>
                    <span className="text-white/70 text-[9px] mt-0.5">Platform</span>
                  </div>
                </div>
                {/* Spokes */}
                <div className="grid grid-cols-3 gap-3">
                  {ecosystem.map(({ role, desc }) => (
                    <div key={role} className="flex flex-col items-center text-center p-3 rounded-xl bg-white border border-ivory-300 shadow-sm">
                      <span className="font-semibold text-charcoal-700 text-xs">{role}</span>
                      <span className="text-warmgray-500 text-[10px] mt-1 leading-tight">{desc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-4 rounded-xl bg-sandstone-400/10 border border-sandstone-300/30 text-center">
                  <span className="text-xs font-semibold text-sandstone-700">One platform · Zero information gaps · Every decision documented</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── BEYOND CONSTRUCTION ───────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-2xl mb-16">
            <div className="section-label">Long-Term Sustainability</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-2">
              Sustainability That Extends<br />
              <span className="text-sandstone-600">Beyond Construction.</span>
            </h2>
            <p className="text-warmgray-600 mt-5 text-lg leading-relaxed">
              The environmental impact of a home continues long after possession. A well-managed home lasts longer, performs better, and creates significantly less waste over its lifecycle.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-5">
            {longTermItems.map(({ Icon, label, desc }, i) => (
              <RevealOnScroll key={label} delay={i * 0.07}>
                <div className="flex gap-5 p-7 rounded-2xl bg-white border border-ivory-300 items-start">
                  <div className="w-12 h-12 rounded-xl bg-sandstone-400/15 border border-sandstone-400/20 flex items-center justify-center text-sandstone-600 shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-charcoal-800 mb-2">{label}</h3>
                    <p className="text-sm text-warmgray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Timeline strip */}
          <RevealOnScroll className="mt-12">
            <div className="p-8 rounded-3xl bg-charcoal-800 grid sm:grid-cols-4 gap-0 divide-x divide-white/10">
              {[
                { phase: 'Planning',     action: 'Material selection, sustainability benchmarks set' },
                { phase: 'Execution',    action: 'Waste tracked, rework eliminated, emissions monitored' },
                { phase: 'Possession',   action: 'Full sustainability report handed over with assets' },
                { phase: 'Long-term',    action: 'Maintenance records, lifecycle tracking, efficient upgrades' },
              ].map(({ phase, action }) => (
                <div key={phase} className="px-6 first:pl-0 last:pr-0">
                  <div className="text-sandstone-300 font-semibold text-sm mb-2">{phase}</div>
                  <div className="text-warmgray-400 text-xs leading-relaxed">{action}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── LUXURY + TECH + RESPONSIBILITY ────────────────────── */}
      <section className="section-py bg-sandstone-400 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Warm diagonal light sweep — textured sandstone atmosphere */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(160,118,55,0.35) 0%, transparent 45%, rgba(120,88,35,0.20) 100%)' }} />
          {/* Subtle organic contour lines — suggest natural material texture */}
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(125deg, transparent 0px, transparent 28px, rgba(80,55,20,1) 28px, rgba(80,55,20,1) 29px)', backgroundSize: '120px 120px' }} />
          {/* Centre-glow warmth */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(210,168,90,0.10) 0%, transparent 65%)' }} />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll className="max-w-2xl mb-14">
            <div className="section-label text-white/60">Philosophy</div>
            <h2 className="font-serif text-display-lg text-white mt-2">
              Luxury, Technology<br />& Responsibility<br />
              <em className="not-italic text-white/80">Together.</em>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mt-5">
              Modern luxury should not only be defined by aesthetics — it should also reflect intelligence, efficiency, and responsibility. HSIOS™ combines all three to create spaces that are elegant, future-ready, and environmentally conscious.
            </p>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-5 gap-3">
            {[
              'Premium Interior Management',
              'Advanced Digital Processes',
              'Sustainable Planning Methods',
              'Smart Execution Systems',
              'Long-term Lifecycle Thinking',
            ].map((item, i) => (
              <RevealOnScroll key={item} delay={i * 0.07}>
                <div className="p-5 rounded-2xl bg-charcoal-900/25 border border-charcoal-900/30 text-center backdrop-blur-sm">
                  <div className="font-serif text-3xl font-bold text-white/50 mb-2">{String(i + 1).padStart(2, '0')}</div>
                  <p className="text-white text-sm font-semibold leading-snug">{item}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── MYTHS VS TRUTH ────────────────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-14">
            <div className="section-label text-sandstone-400">Setting the Record Straight</div>
            <h2 className="font-serif text-display-lg text-white mt-2">
              Sustainability Myths<br />
              <em className="not-italic text-sandstone-300">We Reject.</em>
            </h2>
          </RevealOnScroll>

          <div className="space-y-4 max-w-4xl">
            {myths.map(({ myth, truth }, i) => (
              <RevealOnScroll key={myth} delay={i * 0.07}>
                <div className="grid sm:grid-cols-2 rounded-2xl overflow-hidden border border-white/10">
                  <div className="flex items-start gap-4 p-7 bg-white/5">
                    <div className="w-7 h-7 rounded-full bg-red-900/50 border border-red-700/40 flex items-center justify-center shrink-0 mt-0.5 text-red-400">
                      <IconX />
                    </div>
                    <div>
                      <p className="text-xs text-warmgray-500 uppercase tracking-widest mb-2">The myth</p>
                      <p className="text-warmgray-300 text-sm leading-relaxed italic">&ldquo;{myth}&rdquo;</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-7 bg-sandstone-400/10 border-l border-white/10">
                    <div className="w-7 h-7 rounded-full bg-sandstone-400/30 border border-sandstone-400/40 flex items-center justify-center shrink-0 mt-0.5 text-sandstone-300">
                      <IconCheck />
                    </div>
                    <div>
                      <p className="text-xs text-sandstone-400 uppercase tracking-widest mb-2">The truth</p>
                      <p className="text-white text-sm leading-relaxed font-medium">{truth}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING STATEMENT ─────────────────────────────────── */}
      <section className="py-28 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Deep architectural dark — velvet-like depth */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, #1e1508 0%, #100c06 40%, #060504 100%)' }} />
          {/* Warm ember glow rising from centre-bottom */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 80%, rgba(160,110,40,0.14) 0%, transparent 60%)' }} />
          {/* Constellation dot grid — interconnected intelligence metaphor */}
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, rgba(194,152,68,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
          {/* Vignette edges */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(6,5,4,0.7) 100%)' }} />
        </div>
        <RevealOnScroll>
          <div className="container-luxury relative z-10 text-center max-w-3xl mx-auto">
            <div className="font-serif text-7xl text-sandstone-400/20 leading-none mb-4 select-none">&ldquo;</div>
            <p className="font-serif text-display-sm text-white leading-snug mb-4">
              Sustainability is not only about building beautiful spaces —
            </p>
            <p className="font-serif text-display-sm text-sandstone-300 leading-snug mb-8">
              it is about building them responsibly.
            </p>
            <p className="text-warmgray-400 text-sm font-semibold tracking-wider uppercase">
              — Nishant Mhatre, Founder · Hestia Smart Interiors
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 bg-sandstone-400 text-center">
        <RevealOnScroll>
          <div className="container-luxury max-w-2xl">
            <div className="section-label justify-center text-white/60">Build With Purpose</div>
            <h2 className="font-serif text-display-md text-white mb-5 mt-2">
              Premium Interiors.<br />
              <em className="not-italic text-white/85">Responsible Outcomes.</em>
            </h2>
            <p className="text-white/80 leading-relaxed mb-8 text-lg">
              Every HSI project ends with a full sustainability report — waste reduction, sourcing decisions, carbon estimates, and documented disposal records.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-charcoal-800 hover:bg-ivory-100 font-semibold">Book a Consultation</Link>
              <Link href="/hsi-os" className="btn btn-outline-white">Explore HSIOS™</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
