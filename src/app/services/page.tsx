import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Services — Turnkey Interior Execution',
  description:
    'Turnkey luxury interior execution for villas and second homes, or an execution partner for architects and designers — one accountable team, delivered through HSIOS™.',
  alternates: getAlternates('/services'),
}

// NOTE: minimal Step-2 stub so the new "Services" nav/footer link resolves.
// Full page (Two ways to work, 10 disciplines, what every project includes,
// after-handover care, where we work) is built in Step 3 / §3.3.
export default function ServicesPage() {
  return (
    <section className="section-py bg-ivory-100">
      <div className="container-luxury max-w-3xl">
        <RevealOnScroll>
          <div className="section-label">Services</div>
          <h1 className="font-serif text-display-lg text-charcoal-800 mb-6">
            Turnkey interior execution,{' '}
            <span className="text-sandstone-600">one accountable team.</span>
          </h1>
          <p className="text-lg text-warmgray-600 leading-relaxed mb-10">
            From approved drawings to a handed-over home — HSI delivers the complete interior
            through its empanelled partner network, with a full bill of quantities before start,
            a clash check before site work, a live budget dashboard and daily photo proof, all
            tracked in HSIOS™, our in-house platform.
          </p>
          <Link href="/contact" className="btn btn-bronze">Book a Consultation</Link>
        </RevealOnScroll>
      </div>
    </section>
  )
}
