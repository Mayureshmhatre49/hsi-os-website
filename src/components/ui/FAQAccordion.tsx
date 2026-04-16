'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What is HSI OS and how is it different from regular project management tools?',
    a: 'HSI OS is purpose-built for premium residential interior execution — not a generic tool adapted for interiors. It speaks the language of villa projects: scope definitions, trade sequencing, material lead times, vendor coordination, and client reporting. Unlike general tools like Asana or Monday, HSI OS handles real-time cost tracking, procurement workflows, and execution milestones specific to high-end interior projects in Alibag and Mumbai.',
  },
  {
    q: 'Can I use HSI OS with my existing architect or interior designer?',
    a: 'Absolutely. HSI is collaborative, not restrictive. You can retain your existing architect or interior designer and use HSI OS to manage the execution layer — tracking progress, monitoring costs, and maintaining transparency. The platform is designed to work alongside any design team.',
  },
  {
    q: 'Does HSI handle villa and luxury home interiors in Alibag and Mumbai?',
    a: 'Yes. Alibag and Mumbai are HSI\'s two primary markets. From Alibag villa projects (Casa Frangipani, Serenity Villa, Villa Vayu, Villa Bellissimo and more) to high-end Mumbai apartments and penthouses, we understand the specific execution challenges each market brings: material logistics, coastal waterproofing, local vendor ecosystems, and on-time delivery for discerning homeowners.',
  },
  {
    q: 'What is the difference between HSI as a service vs. HSI OS as a platform?',
    a: 'HSI offers two engagement models. As a service, HSI manages your entire interior execution — from planning and design coordination to on-site delivery — with our team running the process using HSI OS. As a platform, HSI OS can be used by your own architects, developers, or execution teams to manage projects independently. You can also combine both — our team + our platform.',
  },
  {
    q: 'How does HSI OS help with cost transparency in interior projects?',
    a: 'HSI OS tracks every rupee across your project in real time. It categorises spend by room, trade, or vendor — and alerts you the moment costs deviate from plan. You get a live budget dashboard showing approved spend, pending payments, and projected completion costs. This eliminates the most common homeowner nightmare: discovering at the end that your interior ran 30–40% over budget with no clear explanation.',
  },
  {
    q: 'Is HSI suitable for developers building multiple premium residences?',
    a: 'Yes. HSI OS is designed to scale across multiple units and projects. Developers can standardise execution across all their residences, maintain consistent quality benchmarks, and provide homebuyers with real-time project visibility as a differentiator. HSI works as a full execution partner or as a platform your internal team can use across your portfolio.',
  },
  {
    q: 'How do I get started with HSI?',
    a: 'Start by requesting a demo through our contact page. Share your project type, location, and timeline. Our team will schedule a call to understand your needs and walk you through how HSI OS would work for your specific project — whether you need full execution support or just the platform for your existing team.',
  },
]

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
