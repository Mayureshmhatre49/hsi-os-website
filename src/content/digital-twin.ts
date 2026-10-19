/* ─────────────────────────────────────────────────────────────
   HSIOS™ Digital Twin — public copy that is reused across the
   /digital-twin page, its JSON-LD and the chatbot.

   Source: HSIOS_Digital_Twin_SRS_India_v1 (26 Sep 2026).
   Only Phase 1 capabilities are described as the product; later
   phases appear as roadmap only. Do not add prices, uptime figures,
   insurer names or device brands until they are confirmed.
   ───────────────────────────────────────────────────────────── */

export type FAQ = { q: string; a: string }

export const twinFaqs: FAQ[] = [
  {
    q: 'What is the HSIOS™ Digital Twin?',
    a: 'A complete, verified record of one home: every room, every appliance and piece of MEP equipment, its invoice, warranty and AMC, its care instructions and repair contact — linked to a 360° walkthrough of the house. It is a module of HSIOS™ and is also offered on its own for homes HSI did not build.',
  },
  {
    q: 'Do caretakers need to install an app?',
    a: 'No. Each asset carries a weather-resistant QR label. Scanning it with any phone camera opens a simple page — in English, Hindi or Marathi — showing what the item is, how to look after it and who to call when it needs repair.',
  },
  {
    q: 'What can someone see if they scan a label?',
    a: 'Only what is needed to look after that one item: its name, room, care steps and repair contact, plus whether it is under warranty or AMC. A public scan does not show invoice values, the owner’s identity, the home’s full address or photos of the interior. Owners and managers who are signed in see the full record.',
  },
  {
    q: 'I am an HSI client. Is my villa included?',
    a: 'Every HSI villa is being set up to be handed over with its Digital Twin, built from the records HSIOS™ already keeps during execution — the BOQ, vendor records and handover dossier. Book a walkthrough and we will show you what your home’s twin will contain.',
  },
  {
    q: 'My villa was not built by HSI. Can I still get one?',
    a: 'Yes — that is what early access is for. Our onboarding team visits the home, captures the 360° walkthrough, registers and labels each asset and reads your existing invoices and warranty cards. We are opening standalone homes in stages, starting with Alibag, Karjat–Lonavala and Goa.',
  },
  {
    q: 'How are warranty and AMC reminders sent?',
    a: 'On WhatsApp first, 30 days, 7 days and on the day a warranty or AMC runs out, with email as a fallback. Reminders respect your quiet hours and your time zone, so owners abroad are not woken at 3 a.m.',
  },
  {
    q: 'Who owns the data?',
    a: 'You do. You can export the complete record — structured data, original documents and media — at any time, and the export is designed to transfer to a new owner if you sell. Personal data is handled under India’s Digital Personal Data Protection Act, with consent taken separately for each purpose.',
  },
  {
    q: 'Does it control smart devices or monitor energy?',
    a: 'Not in the first release. Water-leak detection with automatic shut-off, safety sensors, remote switching of high-draw appliances and per-appliance energy metering are planned for the next phase, built on the open Matter standard rather than any one brand’s cloud.',
  },
]
