'use client'
import { useState } from 'react'
import { faqs } from '@/content/hsios-faqs'

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-ivory-300 border border-ivory-300 rounded-2xl overflow-hidden">
      {faqs.map(({ q, a }, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 px-7 py-6 text-left
                       hover:bg-ivory-100 transition-colors duration-200"
          >
            <h3 className="font-serif text-base font-semibold text-charcoal-800 leading-snug">{q}</h3>
            <span className={`flex-shrink-0 w-7 h-7 rounded-full border border-sandstone-300 flex items-center
                             justify-center text-sandstone-600 font-bold text-sm transition-transform duration-300
                             ${open === i ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          {open === i && (
            <div className="px-7 pb-7 pt-1">
              <p className="text-warmgray-600 leading-relaxed text-sm">{a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
