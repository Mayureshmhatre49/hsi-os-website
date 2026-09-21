/**
 * HSIOS™ / Our Platform FAQ data.
 *
 * Plain (non-'use client') module so BOTH the client FAQAccordion component and
 * the server /hsi-os page can import it — the server page uses it to emit
 * FAQPage JSON-LD, which is impossible if the data lives in a client module.
 */
export const faqs = [
  {
    q: 'What is HSIOS™ and how is it different from a normal project tool?',
    a: 'HSIOS™ is HSI’s in-house platform, purpose-built for premium villa interior execution — not a generic tool adapted for interiors. It handles scope and BOQ, trade sequencing, material lead times, vendor coordination, live cost tracking and client reporting, so your project is run the way high-end interiors in Alibag and Mumbai actually work.',
  },
  {
    q: 'Can HSI work with my existing architect or interior designer?',
    a: 'Yes. You keep your architect or designer and HSI runs the execution layer — procurement, sequencing, quality and handover — with everything tracked in HSIOS™ so your design intent is protected on site.',
  },
  {
    q: 'Does HSI handle villa and luxury home interiors in Alibag and Mumbai?',
    a: 'Yes. Alibag and Mumbai are HSI\'s two primary markets. From Alibag villa projects (Casa Frangipani, Serenity Villa, Villa Bellissimo and more) to high-end Mumbai apartments, we understand the specific execution challenges each brings: material logistics, coastal waterproofing, local vendor ecosystems, and on-time delivery for discerning owners.',
  },
  {
    q: 'How involved is HSI in my project?',
    a: 'HSI delivers your interior as one accountable team — from planning and design coordination through on-site delivery and handover — with your whole project visible to you in HSIOS™. If you’re an architect or designer, we can act purely as your execution partner while you keep design control.',
  },
  {
    q: 'How does HSIOS™ help with cost transparency?',
    a: 'HSIOS™ tracks every rupee in real time, categorised by room, trade and vendor, and flags any deviation from plan. You get a live budget dashboard with approved spend, pending payments and projected completion cost — so you never discover at the end that the project ran over with no explanation.',
  },
  {
    q: 'Is HSI suitable for developers building multiple premium residences?',
    a: 'Yes. HSIOS™ scales across multiple units, so developers can standardise execution and quality across every residence and give buyers real-time visibility into their own unit. HSI works as your execution partner across the portfolio.',
  },
  {
    q: 'How do I get started with HSI?',
    a: 'Book a consultation through our contact page and share your project type, location and timeline. We’ll schedule a call to understand your needs and walk you through exactly how you’ll track your project in HSIOS™.',
  },
]
