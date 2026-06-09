import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/* ── Rate limiting ───────────────────────────────────────── */
const rateLimitMap = new Map<string, { count: number; reset: number }>()
const RATE_LIMIT  = 5
const WINDOW_MS   = 60_000
const MAP_CEILING = 10_000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  if (rateLimitMap.size >= MAP_CEILING) {
    for (const [key, val] of rateLimitMap) {
      if (now > val.reset) rateLimitMap.delete(key)
    }
  }

  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

/* ── Origin validation ───────────────────────────────────── */
const ALLOWED_ORIGINS = new Set([
  'https://www.hsios.in',
  'https://hsios.in',
  ...(process.env.NODE_ENV !== 'production' ? ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:4000'] : []),
])

function isAllowedOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin')
  if (!origin) {
    const referer = req.headers.get('referer')
    if (!referer) return false
    try {
      return ALLOWED_ORIGINS.has(new URL(referer).origin)
    } catch {
      return false
    }
  }
  return ALLOWED_ORIGINS.has(origin)
}

/* ── Input sanitization ──────────────────────────────────── */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitizeLine(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str.replace(/[<>\r\n]/g, '').trim().slice(0, 500)
}

/* ── Lead Scoring Engine ─────────────────────────────────── */
interface ScoreResult {
  score: number
  classification: string
  route: string
  badgeColor: string
}

function scoreLead(
  projectType: string,
  location: string,
  budget: string,
  timeline: string
): ScoreResult {
  // Check conditions
  const isVilla = projectType === 'Villa'
  const isApartment = projectType === 'Apartment'
  const isAlibag = location === 'Alibag'
  const isMumbai = location === 'Mumbai'
  
  // Budget flags
  const isBudget1CrPlus = budget === '₹1Cr - ₹3Cr' || budget === '₹3Cr+'
  const isBudget50LPlus = isBudget1CrPlus || budget === '₹50L - ₹1Cr'
  const isBudget25LPlus = isBudget50LPlus || budget === '₹25L - ₹50L'
  
  // Timeline flags
  const isImmediate = timeline === 'Immediately'

  // 100 Points: Villa, Alibag, ₹1Cr+, Immediate
  if (isVilla && isAlibag && isBudget1CrPlus && isImmediate) {
    return {
      score: 100,
      classification: 'Serious Prospect — VIP',
      route: 'Direct to Nishant',
      badgeColor: '#8B6B35', // Bronze/Gold
    }
  }

  // 80 Points: Villa, Mumbai, ₹50L+
  if (isVilla && isMumbai && isBudget50LPlus) {
    return {
      score: 80,
      classification: 'High Priority Prospect',
      route: 'Priority Follow-up',
      badgeColor: '#9A7A54', // Dark Sandstone
    }
  }

  // 50 Points: Apartment, ₹25L+
  if (isApartment && isBudget25LPlus) {
    return {
      score: 50,
      classification: 'Qualified Prospect',
      route: 'Normal Follow-up',
      badgeColor: '#5A5248', // Warm Gray
    }
  }

  // Fallback calculations for other combinations
  let score = 20
  if (isVilla || projectType === 'Farmhouse') score += 15
  if (isBudget25LPlus) score += 10
  if (isAlibag || isMumbai) score += 10
  if (isImmediate) score += 5

  return {
    score,
    classification: 'Standard Lead',
    route: 'General Follow-up Queue',
    badgeColor: '#9B9080', // Muted Gray
  }
}

export async function POST(req: NextRequest) {
  /* Origin check */
  if (!isAllowedOrigin(req)) {
    return NextResponse.json({ error: 'Forbidden.' }, { status: 403 })
  }

  /* Content-Type guard */
  const ct = req.headers.get('content-type') ?? ''
  if (!ct.includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported media type.' }, { status: 415 })
  }

  /* Rate limit by IP */
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please wait a moment.' }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json() as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Sanitization
  const name            = sanitizeLine(body.name)
  const email           = sanitizeLine(body.email)
  const phone           = sanitizeLine(body.phone)
  const projectType     = sanitizeLine(body.projectType)
  const location        = sanitizeLine(body.location)
  const budget          = sanitizeLine(body.budget)
  const timeline        = sanitizeLine(body.timeline)
  const source          = sanitizeLine(body.source) || 'website'
  
  // Extract and sanitize multi-select services array
  const rawServices     = Array.isArray(body.serviceInterest) ? body.serviceInterest : []
  const serviceInterest = rawServices.map(s => sanitizeLine(s)).filter(Boolean)

  // Validate required parameters
  if (!name || !phone || !projectType || !location || !budget || !timeline) {
    return NextResponse.json({ error: 'Required qualification fields are missing.' }, { status: 400 })
  }

  if (email && !isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  // Lead scoring execution
  const scoring = scoreLead(projectType, location, budget, timeline)

  /* ──────────────────────────────────────────────────────────
     FUTURE INTEGRATION HOOKS (Ready for production launch)
     ────────────────────────────────────────────────────────── */
  
  // 1. SUPABASE DATABASE HOOK
  /*
  try {
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)
    await supabase.from('leads').insert([{
      name, email, phone, project_type: projectType, location, budget, timeline,
      services: serviceInterest, source, lead_score: scoring.score,
      created_at: new Date().toISOString()
    }])
  } catch (err) {
    console.error('[Supabase Save Error]', err)
  }
  */

  // 2. ZOHO CRM INTEGRATION HOOK
  /*
  try {
    // Perform OAuth token exchange and insert Lead into Zoho CRM API
    const zohoPayload = {
      data: [{
        Last_Name: name.split(' ').pop() || name,
        First_Name: name.split(' ').slice(0, -1).join(' '),
        Email: email || '',
        Phone: phone,
        Lead_Source: source,
        Description: `Project: ${projectType}. Budget: ${budget}. Timeline: ${timeline}. Services: ${serviceInterest.join(', ')}`,
        Score: scoring.score,
        Route_Priority: scoring.route
      }]
    }
    // fetch('https://www.zohoapis.in/crm/v2/Leads', { ... })
  } catch (err) {
    console.error('[Zoho Sync Error]', err)
  }
  */

  // 3. WHATSAPP CLOUD API HOOK
  /*
  try {
    // Send template confirmation notification to the customer or lead owner
    const waPayload = {
      messaging_product: "whatsapp",
      to: phone,
      type: "template",
      template: {
        name: "consultation_welcome",
        language: { code: "en" }
      }
    }
    // fetch('https://graph.facebook.com/v17.0/PHONE_NUMBER_ID/messages', { ... })
  } catch (err) {
    console.error('[WhatsApp API Error]', err)
  }
  */

  /* ── SMTP Email Dispatch ───────────────────────────────── */
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpHost = process.env.SMTP_HOST ?? 'smtp.hostinger.com'
  const smtpPort = parseInt(process.env.SMTP_PORT ?? '465', 10)

  if (!smtpUser || !smtpPass) {
    console.log('[Dev Mode Lead Log]', { 
      name, email, phone, projectType, location, budget, timeline, serviceInterest, source, scoring 
    })
    // In dev environment, return success even if mailer isn't filled
    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json({ ok: true, leadScore: scoring.score })
    }
    return NextResponse.json({ error: 'Email service configuration is missing.' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
    tls: { rejectUnauthorized: true },
  })

  // Get recipient list
  const notifyTo = process.env.NOTIFY_EMAILS
    ? process.env.NOTIFY_EMAILS.split(',').map((e) => e.trim())
    : [smtpUser]

  // If score is 100, ensure Nishant's direct address is included
  if (scoring.score === 100 && !notifyTo.includes('nishant.mhatre@mail.com')) {
    notifyTo.push('nishant.mhatre@mail.com')
  }

  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Georgia, serif; background: #FAF7F2; color: #1C1C1E; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { background: #1C1C1E; padding: 32px; border-radius: 12px 12px 0 0; position: relative; }
    .header h1 { color: #C4A882; font-size: 22px; margin: 0; font-weight: 700; }
    .header p { color: rgba(255,255,255,0.6); font-size: 13px; margin: 6px 0 0; font-family: sans-serif; }
    
    .score-badge {
      display: inline-block;
      margin-top: 15px;
      padding: 6px 14px;
      background: ${scoring.badgeColor};
      color: white;
      font-family: sans-serif;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      border-radius: 30px;
    }

    .body { background: white; padding: 32px; border: 1px solid #EAE0D0; border-radius: 0 0 12px 12px; }
    .field { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #F3EDE3; }
    .field:last-child { border-bottom: none; margin-bottom: 0; }
    .label { font-family: sans-serif; font-size: 10px; font-weight: 700; text-transform: uppercase;
             letter-spacing: 0.12em; color: #9A7A54; margin-bottom: 5px; }
    .value { font-size: 15px; color: #1C1C1E; line-height: 1.6; }
    
    .service-tag {
      display: inline-block;
      background: #F3EDE3;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 12px;
      margin-right: 6px;
      margin-bottom: 6px;
      font-family: sans-serif;
      font-weight: 600;
      color: #5A5248;
    }

    .footer { margin-top: 24px; font-family: sans-serif; font-size: 12px; color: #9B9080; text-align: center; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Luxury Funnel Lead</h1>
      <p>Submitted via hsios.in/enquiry — ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
      <div class="score-badge">
        Score: ${scoring.score} &bull; ${scoring.classification} &bull; Route: ${scoring.route}
      </div>
    </div>
    
    <div class="body">
      <div class="field">
        <div class="label">Contact Details</div>
        <div class="value">
          <strong>Name:</strong> ${name}<br>
          <strong>Phone:</strong> ${phone}<br>
          <strong>Email:</strong> ${email || 'Not provided'}
        </div>
      </div>
      
      <div class="field">
        <div class="label">Project Specifications</div>
        <div class="value">
          <strong>Project Type:</strong> ${projectType}<br>
          <strong>Location:</strong> ${location}<br>
          <strong>Budget Range:</strong> ${budget}<br>
          <strong>Timeline:</strong> ${timeline}
        </div>
      </div>

      <div class="field">
        <div class="label">Attribution Channel</div>
        <div class="value">
          <strong>Source QR/URL:</strong> <span style="font-family: monospace; font-size: 13px; background: #FAF7F2; padding: 2px 6px; border-radius: 4px;">${source}</span>
        </div>
      </div>

      ${serviceInterest.length > 0 ? `
      <div class="field">
        <div class="label">Services Requested</div>
        <div class="value" style="padding-top: 6px;">
          ${serviceInterest.map(s => `<span class="service-tag">${s}</span>`).join('')}
        </div>
      </div>
      ` : ''}
    </div>

    <div class="footer">
      Hestia Smart Interiors &bull; Powered by HSIOS™ &bull; hello@hsios.in
    </div>
  </div>
</body>
</html>`

  try {
    // Send email to team list
    await transporter.sendMail({
      from: `"HSIOS™ Luxury Funnel" <${smtpUser}>`,
      to: notifyTo,
      replyTo: email || undefined,
      subject: `[Score: ${scoring.score} - ${scoring.route}] ${name} - ${projectType} in ${location} (${source})`,
      html: emailHtml,
      text: `New Lead: ${name}\nScore: ${scoring.score} (${scoring.classification})\nRoute: ${scoring.route}\nSource: ${source}\nPhone: ${phone}\nEmail: ${email}\nProject: ${projectType}\nLocation: ${location}\nBudget: ${budget}\nTimeline: ${timeline}\nServices: ${serviceInterest.join(', ')}`,
    })

    // If an email address was provided by client, send auto-acknowledgment
    if (email) {
      await transporter.sendMail({
        from: `"Hestia Smart Interiors" <${smtpUser}>`,
        to: email,
        subject: 'We received your project brief — Hestia Smart Interiors',
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Georgia, serif; background: #FAF7F2; color: #1C1C1E; padding: 40px 20px;">
<div style="max-width: 540px; margin: 0 auto;">
  <div style="background: #1C1C1E; padding: 32px; border-radius: 12px 12px 0 0;">
    <h1 style="color: #C4A882; font-size: 22px; margin: 0;">Thank You, ${name}.</h1>
    <p style="color: rgba(255,255,255,0.6); font-family: sans-serif; font-size: 13px; margin: 8px 0 0;">
      Hestia Smart Interiors — Consultation Scheduled
    </p>
  </div>
  <div style="background: white; padding: 32px; border: 1px solid #EAE0D0; border-radius: 0 0 12px 12px;">
    <p style="font-size: 15px; line-height: 1.75; color: #3A3530;">
      We have received your luxury consultation details. A Design Advisor is reviewing your project parameters (<strong>${projectType}</strong> in <strong>${location}</strong>) to customize your brief.
    </p>
    <p style="font-size: 15px; line-height: 1.75; color: #3A3530;">
      A representative will connect with you via Phone or WhatsApp within <strong>24 hours</strong>.
    </p>
    <p style="font-size: 15px; line-height: 1.75; color: #3A3530;">
      For immediate assistance, please connect with us on 
      <a href="https://wa.me/918010234802" style="color: #9A7A54; font-weight: 600;">WhatsApp (+91-8010234802)</a>.
    </p>
    <hr style="border: none; border-top: 1px solid #EAE0D0; margin: 24px 0;">
    <p style="font-family: sans-serif; font-size: 12px; color: #9B9080;">
      Hestia Smart Interiors &bull; Powered by HSIOS™<br>
      hello@hsios.in &bull; +91-8010234802
    </p>
  </div>
</div>
</body>
</html>`,
      })
    }

    return NextResponse.json({ ok: true, leadScore: scoring.score })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'unknown'
    console.error(`[Enquiry API Error] SMTP dispatch failed: ${msg}`)
    return NextResponse.json({ error: 'Failed to process enquiry. Please try again or contact us via WhatsApp.' }, { status: 500 })
  }
}
