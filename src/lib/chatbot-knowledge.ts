/**
 * Local knowledge base for the on-site assistant.
 *
 * Everything the chatbot can answer lives here — sourced from the website's
 * own content (services, HSIOS™, pricing, process, locations, FAQs, contact).
 * There is NO external API: retrieval runs entirely in the browser, so it is
 * private, free, fast, and works within the site's strict CSP.
 *
 * To extend the bot, add a KBEntry below with good `keywords`.
 */

import { PHONES, EMAIL } from '@/lib/contact'

export type KBLink = { href: string; label: string; external?: boolean }

export type KBEntry = {
  id: string
  /** Canonical question — also surfaced as a suggested prompt when `suggest` is true. */
  question: string
  /** Terms + synonyms used for matching. Lowercase, singular where possible. */
  keywords: string[]
  /** The answer shown in chat. Keep it concise (2–4 sentences). */
  answer: string
  /** Optional call-to-action rendered under the answer. */
  link?: KBLink
  /** Show as a starter suggestion chip. */
  suggest?: boolean
}

const CONTACT_LINE = `${PHONES.map(p => p.display).join(' or ')} · ${EMAIL}`

export const KNOWLEDGE: KBEntry[] = [
  {
    id: 'what-is-hsi',
    question: 'What is Hestia Smart Interiors?',
    keywords: ['hsi', 'hestia', 'company', 'who', 'firm', 'business', 'founded', 'story', 'background'],
    answer:
      'Hestia Smart Interiors (HSI) is a luxury interior execution firm. We deliver premium villa and home interiors exactly as designed — on budget, on schedule, and with documented accountability — powered by HSIOS™, our interior execution operating system. HSI was founded in 2021 and is part of Hestia Villas.',
    link: { href: '/about', label: 'About HSI' },
    suggest: true,
  },
  {
    id: 'what-is-hsios',
    question: 'What is HSIOS™?',
    keywords: ['hsios', 'os', 'platform', 'operating', 'system', 'software', 'tool', 'app'],
    answer:
      'HSIOS™ is an interior execution operating system purpose-built for premium residential projects — not a generic tool adapted for interiors. It handles real-time cost tracking, procurement workflows, vendor coordination, quality checkpoints and execution milestones specific to high-end villa and apartment projects.',
    link: { href: '/hsi-os', label: 'Explore HSIOS™' },
    suggest: true,
  },
  {
    id: 'services',
    question: 'What does HSI do?',
    keywords: ['service', 'services', 'offer', 'execution', 'build', 'deliver', 'help', 'trade', 'trades', 'discipline', 'disciplines', 'fitout'],
    answer:
      'HSI runs the full interior execution layer for luxury homes: structural coordination, flooring & surfaces, bespoke joinery, architectural metal & glass, electrical & smart systems, plumbing & bathrooms, HVAC, ceiling & drywall, surface finishing, and smart villa integration — 10 disciplines with 104 QA checkpoints, all tracked in HSIOS™.',
    link: { href: '/hsi-os', label: 'How execution works' },
  },
  {
    id: 'engagement-models',
    question: 'How can I engage HSI — service or platform?',
    keywords: ['engagement', 'model', 'service', 'platform', 'managed', 'option', 'ways', 'hire', 'plan'],
    answer:
      'Two ways. Managed Execution: our team runs your entire interior execution using HSIOS™. Platform Only: your own architects, developers or execution teams use HSIOS™ to manage projects independently. You can also combine both — our team plus our platform.',
    link: { href: '/demo', label: 'Request a demo' },
    suggest: true,
  },
  {
    id: 'pricing-benchmarks',
    question: 'How much do interiors cost per sq ft?',
    keywords: ['price', 'pricing', 'cost', 'rate', 'sqft', 'sq', 'ft', 'budget', 'expensive', 'much', 'charge', 'quote'],
    answer:
      'As a benchmark, premium apartment fitouts run about ₹2,500–₹5,500 / sq ft, and villa execution about ₹3,000–₹8,000+ / sq ft — reflecting total execution cost (materials plus labour across all trades). Loose furniture, landscape and architect fees are separate. Actual cost depends on trades, smart-home integration, structural work and custom joinery.',
    link: { href: '/pricing', label: 'See pricing' },
    suggest: true,
  },
  {
    id: 'management-fee',
    question: 'How does HSIOS™ charge for its services?',
    keywords: ['fee', 'charge', 'management', 'commission', 'margin', 'payment', 'pay', 'cost'],
    answer:
      'HSIOS™ charges a structured project management fee calculated on the approved execution value and fixed at engagement. It covers the full management scope — from BOQ to handover documentation — and replaces the traditional contractor margin model, so you know exactly what management costs before any work begins.',
    link: { href: '/pricing', label: 'Pricing details' },
  },
  {
    id: 'minimum-project',
    question: 'What is the minimum project value?',
    keywords: ['minimum', 'smallest', 'small', 'value', 'threshold', 'budget', 'least', 'size'],
    answer:
      'We typically work with projects from around ₹50L upward in total execution value. Below that, the structured execution layer HSIOS™ provides is hard to deliver cost-effectively. If you are unsure where your project sits, a discovery call will help clarify scope and investment.',
    link: { href: '/contact', label: 'Book a discovery call' },
  },
  {
    id: 'coastal-premium',
    question: 'Why do coastal / villa projects cost more?',
    keywords: ['coastal', 'villa', 'premium', 'higher', 'alibag', 'marine', 'why', 'expensive', 'more'],
    answer:
      'Coastal sites like Alibag need marine-grade plywood, SS-304 hardware, elastomeric paints and specialist waterproofing — a 15–25% material premium over standard city specs. Villas also carry more structural complexity, more trades and more custom joinery, which raises the execution floor.',
  },
  {
    id: 'fee-worth-it',
    question: 'Is the HSIOS™ fee worth it vs a contractor?',
    keywords: ['worth', 'value', 'contractor', 'traditional', 'roi', 'benefit', 'versus', 'vs', 'compare'],
    answer:
      'The management fee is typically recovered — and more — through early conflict detection alone. A single structural conflict found mid-execution can cost ₹5–20L in rework and 4–8 weeks of delay, and budget surprises at handover routinely run 15–30% over. Transparent execution does not cost more; opaque execution does.',
  },
  {
    id: 'cost-transparency',
    question: 'How does HSIOS™ keep costs transparent?',
    keywords: ['transparent', 'transparency', 'budget', 'dashboard', 'track', 'tracking', 'overrun', 'rupee', 'spend', 'money'],
    answer:
      'HSIOS™ tracks every rupee in real time, categorised by room, trade or vendor, and alerts you the moment costs deviate from plan. You get a live budget dashboard showing approved spend, pending payments and projected completion cost — so there are no 30–40% surprises at the end.',
    link: { href: '/hsi-os', label: 'See the platform' },
  },
  {
    id: 'own-designer',
    question: 'Can I use my own architect or designer?',
    keywords: ['designer', 'architect', 'own', 'existing', 'bring', 'collaborate', 'creative', 'drawings'],
    answer:
      'Yes. HSIOS™ is the execution layer, not the design firm — your architect or interior designer keeps full creative control. We take the approved drawings, manage procurement, coordinate all vendors and run execution, protecting your designer’s intent and your budget at the same time.',
    link: { href: '/for-architects', label: 'For architects' },
  },
  {
    id: 'locations',
    question: 'Which locations do you serve?',
    keywords: ['location', 'locations', 'where', 'city', 'cities', 'area', 'region', 'serve', 'coverage', 'place', 'goa', 'pune', 'bangalore', 'nashik', 'lonavala', 'india', 'nearby'],
    answer:
      'HSI serves Alibag, Mumbai, Pune, Goa, Bangalore, Nashik and Lonavala — with Alibag and Mumbai as our two primary markets — and takes on projects across India. NRI-owned projects are welcome anywhere.',
    link: { href: '/contact', label: 'Talk to us' },
    suggest: true,
  },
  {
    id: 'alibag-mumbai',
    question: 'Do you handle Alibag and Mumbai villa interiors?',
    keywords: ['alibag', 'alibaug', 'mumbai', 'villa', 'apartment', 'penthouse', 'primary'],
    answer:
      'Yes — Alibag and Mumbai are our two primary markets. From Alibag villas (Casa Frangipani, Serenity Villa, Villa Vayu, Villa Bellissimo and more) to high-end Mumbai apartments and penthouses, we know the local execution challenges: material logistics, coastal waterproofing and trusted vendor ecosystems.',
    link: { href: '/alibag-villa-interiors', label: 'Alibag interiors' },
  },
  {
    id: 'nri',
    question: 'Can you manage a project for an NRI remotely?',
    keywords: ['nri', 'remote', 'abroad', 'overseas', 'foreign', 'distance', 'remotely', 'outside', 'country'],
    answer:
      'Absolutely — NRI remote build is one of our specialities. HSIOS™ gives you a live dashboard with daily site photos, milestone status and real-time cost tracking, so you stay in full control of your home from anywhere in the world without needing to fly down.',
    link: { href: '/nri-home-interior-management', label: 'NRI remote build' },
    suggest: true,
  },
  {
    id: 'get-started',
    question: 'How do I get started?',
    keywords: ['start', 'started', 'begin', 'onboard', 'first', 'step', 'process', 'signup', 'sign', 'enquire', 'enquiry'],
    answer:
      'Start by booking a private consultation or requesting a demo — share your project type, location and timeline. We schedule a call to understand your needs and show exactly how HSIOS™ would work for your project, whether you want full execution support or just the platform.',
    link: { href: '/contact', label: 'Book a consultation' },
    suggest: true,
  },
  {
    id: 'contact',
    question: 'How do I contact HSI?',
    keywords: ['contact', 'phone', 'call', 'number', 'email', 'reach', 'whatsapp', 'talk', 'speak', 'connect'],
    answer:
      `You can reach us any time: ${CONTACT_LINE}. Prefer WhatsApp? Tap the green button on this page. We usually reply within a couple of hours during business hours.`,
    link: { href: '/contact', label: 'Contact page' },
    suggest: true,
  },
  {
    id: 'hours',
    question: 'What are your business hours?',
    keywords: ['hours', 'timing', 'open', 'time', 'available', 'when', 'weekend', 'saturday'],
    answer:
      'Our team is available Monday to Friday, 9am–6pm, and Saturday, 10am–3pm (IST). You can send an enquiry any time and we will respond within 24 hours.',
    link: { href: '/contact', label: 'Get in touch' },
  },
  {
    id: 'timeline',
    question: 'How long does a project take?',
    keywords: ['timeline', 'long', 'duration', 'time', 'schedule', 'months', 'fast', 'complete', 'finish', 'delivery'],
    answer:
      'Timelines depend on scope, size and trade complexity, so we set a milestone-verified schedule at planning and track it live in HSIOS™. The best way to get a realistic timeline for your home is a short discovery call where we review your drawings and scope.',
    link: { href: '/contact', label: 'Discuss your timeline' },
  },
  {
    id: 'projects',
    question: 'Can I see your past projects?',
    keywords: ['project', 'projects', 'portfolio', 'work', 'case', 'study', 'studies', 'example', 'gallery', 'delivered'],
    answer:
      'Yes — we have delivered 7+ luxury villas with 100% client retention. You can explore case studies including Casa Frangipani, Serenity Villa, Villa Vayu and Villa Bellissimo on our projects page.',
    link: { href: '/projects', label: 'View projects' },
    suggest: true,
  },
  {
    id: 'sustainability',
    question: 'How do you handle sustainability?',
    keywords: ['sustainability', 'sustainable', 'green', 'eco', 'environment', 'waste', 'carbon', 'responsible'],
    answer:
      'Sustainability is measured, not claimed. Every project concludes with a full report covering material sourcing, waste reduction, carbon estimates and disposal records — specific and provable, rather than vague green marketing.',
    link: { href: '/sustainability', label: 'Our sustainability approach' },
  },
  {
    id: 'security',
    question: 'Is my project data secure?',
    keywords: ['security', 'secure', 'data', 'privacy', 'trust', 'safe', 'confidential', 'protect'],
    answer:
      'Yes. HSIOS™ is built with security and trust in mind — your project data, budgets and documents are handled with strict confidentiality. You can review our approach on the Security & Trust page.',
    link: { href: '/security', label: 'Security & trust' },
  },
  {
    id: 'handover',
    question: 'What do I get at handover?',
    keywords: ['handover', 'warranty', 'documentation', 'document', 'closeout', 'end', 'complete', 'records', 'maintenance'],
    answer:
      'At project close you receive a complete handover pack: warranty records, vendor contacts, material specifications and maintenance schedules — everything compiled in HSIOS™ so your home is fully documented, not left as loose paperwork.',
    link: { href: '/hsi-os', label: 'How handover works' },
  },
  {
    id: 'developers',
    question: 'Do you work with property developers?',
    keywords: ['developer', 'developers', 'multiple', 'units', 'scale', 'portfolio', 'builder', 'projects'],
    answer:
      'Yes. HSIOS™ scales across multiple units and projects, letting developers standardise execution, hold consistent quality benchmarks and give buyers real-time project visibility as a differentiator — as a full execution partner or as a platform your internal team runs.',
    link: { href: '/for-developers', label: 'For developers' },
  },
  {
    id: 'try-platform',
    question: 'Can I try the HSIOS™ platform?',
    keywords: ['try', 'login', 'access', 'demo', 'trial', 'platform', 'os', 'login'],
    answer:
      'You can request a live demo to see HSIOS™ in action, or if you already have access, log in to the live platform at os.hsios.in.',
    link: { href: 'https://os.hsios.in/', label: 'Try HSIOS™ →', external: true },
  },
  {
    id: 'quality',
    question: 'How do you ensure quality?',
    keywords: ['quality', 'qa', 'checkpoint', 'checkpoints', 'inspection', 'standard', 'rework', 'defect', 'snag'],
    answer:
      'Quality is enforced through 104 QA checkpoints across the 10 execution disciplines, logged in HSIOS™. Every stage is verified before the next begins, which is how we keep rework and end-of-project surprises to a minimum.',
    link: { href: '/hsi-os', label: 'Execution & QA' },
  },
]

/** Starter suggestions shown when the chat opens. */
export const SUGGESTIONS: string[] = KNOWLEDGE.filter(k => k.suggest).map(k => k.question)

/* ── Retrieval (client-side, no dependencies) ──────────────────────────── */

const STOPWORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'am', 'do', 'does', 'did', 'i', 'you', 'we', 'my', 'me',
  'our', 'your', 'of', 'to', 'for', 'and', 'or', 'in', 'on', 'at', 'with', 'from', 'by',
  'it', 'this', 'that', 'these', 'those', 'be', 'been', 'have', 'has', 'had', 'will', 'would',
  'can', 'could', 'should', 'about', 'if', 'as', 'so', 'there', 'here', 'please', 'tell', 'know',
])

function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9₹\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map(t => (t.length > 3 && t.endsWith('s') ? t.slice(0, -1) : t))
    .filter(t => !STOPWORDS.has(t))
}

const GREETINGS = new Set(['hi', 'hello', 'hey', 'yo', 'hiya', 'namaste', 'greeting', 'hii'])
const THANKS = new Set(['thanks', 'thank', 'thx', 'thankyou', 'cheers', 'appreciate'])

export type BotReply = {
  answer: string
  link?: KBLink
  /** Follow-up suggestions shown as chips (e.g. on a fallback). */
  suggestions?: string[]
  matched: boolean
}

const FALLBACK: BotReply = {
  answer:
    `I’m not sure I have that one yet. I can help with our services, HSIOS™, pricing, locations, timelines and getting started — or reach the team directly at ${CONTACT_LINE}.`,
  link: { href: '/contact', label: 'Talk to the team' },
  suggestions: SUGGESTIONS.slice(0, 4),
  matched: false,
}

/**
 * Score every entry against the query and return the best answer, or a
 * helpful fallback when nothing clears the confidence threshold.
 */
export function getReply(query: string): BotReply {
  const raw = query.trim().toLowerCase()
  const tokens = tokenize(query)

  if (!raw) return FALLBACK

  // Greetings / thanks handled conversationally.
  if (tokens.length <= 2 && tokens.some(t => GREETINGS.has(t))) {
    return {
      answer:
        'Hi! I’m the HSI assistant. Ask me about our interior execution services, HSIOS™, pricing, locations or how to get started.',
      suggestions: SUGGESTIONS.slice(0, 4),
      matched: true,
    }
  }
  if (tokens.some(t => THANKS.has(t)) && tokens.length <= 3) {
    return {
      answer: 'Happy to help! Anything else you’d like to know about your project?',
      suggestions: SUGGESTIONS.slice(0, 3),
      matched: true,
    }
  }

  let best: KBEntry | null = null
  let bestScore = 0

  for (const entry of KNOWLEDGE) {
    const kw = new Set(entry.keywords)
    const qTokens = new Set(tokenize(entry.question))
    let score = 0

    for (const t of tokens) {
      if (kw.has(t)) score += 3
      else if (qTokens.has(t)) score += 1.5
      else if (t.length >= 4 && entry.keywords.some(k => k.includes(t) || t.includes(k))) score += 1
    }

    // Phrase bonus: query text appears near-verbatim in the question.
    if (raw.length >= 6 && entry.question.toLowerCase().includes(raw)) score += 4

    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }

  if (best && bestScore >= 3) {
    return { answer: best.answer, link: best.link, matched: true }
  }

  return FALLBACK
}
