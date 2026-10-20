import { MapPin, Phone, ArrowUpRight } from 'lucide-react'
import TrackedContactLink from '@/components/ui/TrackedContactLink'
import { INDIA_OFFICES } from '@/lib/contact'

/**
 * Name, address and phone of one HSI office, shown on the matching city
 * page. Keeping NAP identical to the footer, /contact and the business
 * schema is what search engines use to tie the page to the location.
 */
export default function OfficeBlock({ office: label, heading }: { office: 'Alibag Office' | 'Pune Office'; heading: string }) {
  const o = INDIA_OFFICES.find((x) => x.label === label)
  if (!o) return null
  return (
    <section className="py-16 bg-white border-t border-ivory-200" aria-labelledby={`office-${o.label.replace(/\s/g, '-')}`}>
      <div className="container-luxury">
        <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start md:items-center rounded-3xl bg-ivory-100 border border-ivory-300 p-8">
          <div className="w-12 h-12 rounded-2xl bg-sandstone-100 border border-sandstone-200 flex items-center justify-center text-sandstone-600">
            <MapPin size={22} strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div>
            <h2 id={`office-${o.label.replace(/\s/g, '-')}`} className="font-serif text-2xl text-charcoal-800 mb-2">{heading}</h2>
            <address className="not-italic text-warmgray-700 leading-relaxed">
              <span className="font-semibold text-charcoal-800">{o.company}</span> · {o.addressLines.join(', ')}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <TrackedContactLink
              href={`tel:${o.phone.e164}`}
              kind="phone"
              source={`office-block-${o.label}`}
              className="inline-flex items-center gap-2 font-semibold text-sandstone-600 hover:text-sandstone-700 transition-colors whitespace-nowrap"
            >
              <Phone size={15} strokeWidth={1.75} aria-hidden="true" />
              {o.phone.display}
            </TrackedContactLink>
            {o.mapsUrl && (
              <a
                href={o.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-charcoal-700 hover:text-sandstone-700 transition-colors whitespace-nowrap"
              >
                Get directions <ArrowUpRight size={14} aria-hidden="true" />
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
