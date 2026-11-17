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
    a: 'Caretakers use the HSIOS™ Caretaker app to receive real-time action alerts — such as an AC left running or a pump operating overtime in a vacant villa — so they can check the property and take action straight away. For day-to-day asset care, scanning a QR label with any phone camera also works without any app or login.',
  },
  {
    q: 'What can someone see if they scan a label?',
    a: 'Only what is needed to look after that one item: its name, room, care steps and repair contact, plus whether it is under warranty or AMC. A public scan does not show invoice values, the owner’s identity, the home’s full address or photos of the interior. Owners and managers who are signed in see the full record.',
  },
  {
    q: 'I am an HSI client. Is my villa included?',
    a: 'Every HSI villa is handed over with its Digital Twin, built from the records HSIOS™ already keeps during execution — the BOQ, vendor records and handover dossier. Request an online demo and our team will show you what your home’s twin will contain.',
  },
  {
    q: 'My villa was not built by HSI. Can I still get one?',
    a: 'Yes. We implement the complete Digital Twin for existing luxury villas and second homes. Our onboarding team visits your home, captures the 360° walkthrough, registers and labels each asset, reads existing warranties, and installs the smart energy hardware. Book an online demo or schedule implementation for your property.',
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
    a: 'Yes, it does both. Through integrated home automation in the HSIOS™ Digital Twin app, you can switch on or switch off applicable devices remotely from anywhere — such as turning off an AC left running in a vacant villa or pre-heating a geyser before your arrival. At the same time, a 3-phase smart meter and smart relays track live power and per-appliance energy consumption around the clock.',
  },
  {
    q: 'Can it tell me if someone is using my villa while I’m away?',
    a: 'Yes. It detects unexpected power draw, such as ACs or geysers running while the villa is marked vacant. Both you and your caretaker receive an immediate alert with the exact room and appliance, so your caretaker can inspect and switch it off straight away.',
  },
  {
    q: 'Which appliances can be monitored individually?',
    a: 'Any high-load appliance on its own circuit. Typically that means air conditioners, geysers, the swimming-pool filter pump, the borewell pump, kitchen appliances and EV chargers. We recommend which ones are worth monitoring during the site visit.',
  },
  {
    q: 'Do I need the app?',
    a: 'Owners and villa managers use the HSIOS™ Android app for live energy, bill projections, full documents and portfolio oversight. Caretakers use the app to receive action alerts (like an AC left running) and care guides. A quick QR label scan also works on any phone camera without login.',
  },
  {
    q: 'Does monitoring and automation need internet at the villa?',
    a: 'Only the energy meter can work without villa Wi-Fi, as it has its own independent SIM connection that streams whole-house power readings directly to HSIOS™. However, for the entire home automation system to work — such as switching ACs, geysers, or pumps on and off remotely — the villa’s Wi-Fi network is required.',
  },
]
