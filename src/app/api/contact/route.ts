import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/* ── Rate limiting ─────────────────────────────────────────
   In-memory — sufficient for single-process PM2 deployment.
   Max 10 000 tracked IPs to prevent unbounded memory growth.
   ─────────────────────────────────────────────────────────── */
const rateLimitMap = new Map<string, { count: number; reset: number }>()
const RATE_LIMIT  = 3
const WINDOW_MS   = 60_000
const MAP_CEILING = 10_000

function isRateLimited(ip: string): boolean {
  const now = Date.now()

  // Periodic cleanup: evict expired entries when map is large
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

/* ── Origin validation ─────────────────────────────────────
   Reject requests not originating from our own domain.
   ─────────────────────────────────────────────────────────── */
const ALLOWED_ORIGINS = new Set([
  'https://www.hsios.in',
  'https://hsios.in',
  ...(process.env.NODE_ENV !== 'production' ? ['http://localhost:3000', 'http://localhost:3001'] : []),
])

function isAllowedOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin')
  // Some browsers omit Origin on same-origin POSTs — fall back to Referer.
  if (!origin) {
    const referer = req.headers.get('referer')
    if (!referer) return false // No origin signals → reject (curl, server-to-server bots)
    try {
      return ALLOWED_ORIGINS.has(new URL(referer).origin)
    } catch {
      return false
    }
  }
  return ALLOWED_ORIGINS.has(origin)
}

/* ── Input validation ──────────────────────────────────── */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/* Strips '<', '>', and CRLF — safe for fields embedded in email headers. */
function sanitizeLine(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str.replace(/[<>\r\n]/g, '').trim().slice(0, 2000)
}

/* Strips '<' and '>' but preserves newlines — for the multi-line message body. */
function sanitizeBody(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str.replace(/[<>]/g, '').trim().slice(0, 2000)
}

export async function POST(req: NextRequest) {
  /* Origin check — block cross-site form submissions */
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
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json() as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  /* Honeypot check */
  if (body.honeypot) {
    // Silently accept but don't send email — it's a bot
    return NextResponse.json({ ok: true })
  }

  /* Sanitize inputs — single-line fields strip CRLF to block header injection */
  const name        = sanitizeLine(body.name)
  const email       = sanitizeLine(body.email)
  const phone       = sanitizeLine(body.phone)
  const projectType = sanitizeLine(body.projectType)
  const location    = sanitizeLine(body.location)
  const budget      = sanitizeLine(body.budget)
  const message     = sanitizeBody(body.message)

  /* Validate required fields */
  if (!name || !email || !projectType || !location || !message) {
    return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  /* ── Send Email via SMTP ─────────────────────────────── */
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpHost = process.env.SMTP_HOST ?? 'smtp.hostinger.com'
  const smtpPort = parseInt(process.env.SMTP_PORT ?? '465', 10)

  if (!smtpUser || !smtpPass) {
    // Fallback: log to console in development, return success
    console.log('[Contact Form]', { name, email, phone, projectType, location, budget, message })
    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json({ ok: true })
    }
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
    tls: { rejectUnauthorized: true },
  })

  const notifyTo = process.env.NOTIFY_EMAILS
    ? process.env.NOTIFY_EMAILS.split(',').map((e) => e.trim())
    : [smtpUser]

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body { font-family: Georgia, serif; background: #FAF7F2; color: #1C1C1E; margin: 0; padding: 0; }
  .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
  .header { background: #1C1C1E; padding: 32px; border-radius: 12px 12px 0 0; margin-bottom: 0; }
  .header h1 { color: #C4A882; font-size: 22px; margin: 0; font-weight: 700; }
  .header p { color: rgba(255,255,255,0.6); font-size: 13px; margin: 6px 0 0; font-family: sans-serif; }
  .body { background: white; padding: 32px; border: 1px solid #EAE0D0; border-radius: 0 0 12px 12px; }
  .field { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #F3EDE3; }
  .field:last-child { border-bottom: none; margin-bottom: 0; }
  .label { font-family: sans-serif; font-size: 10px; font-weight: 700; text-transform: uppercase;
           letter-spacing: 0.12em; color: #9A7A54; margin-bottom: 5px; }
  .value { font-size: 15px; color: #1C1C1E; line-height: 1.6; }
  .footer { margin-top: 24px; font-family: sans-serif; font-size: 12px; color: #9B9080; text-align: center; }
</style></head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Project Enquiry</h1>
      <p>Submitted via hsios.in — ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
    </div>
    <div class="body">
      <div class="field"><div class="label">Name</div><div class="value">${name}</div></div>
      <div class="field"><div class="label">Email</div><div class="value">${email}</div></div>
      ${phone ? `<div class="field"><div class="label">Phone / WhatsApp</div><div class="value">${phone}</div></div>` : ''}
      <div class="field"><div class="label">Project Type</div><div class="value">${projectType}</div></div>
      <div class="field"><div class="label">Location</div><div class="value">${location}</div></div>
      ${budget ? `<div class="field"><div class="label">Budget Range</div><div class="value">${budget}</div></div>` : ''}
      <div class="field"><div class="label">Project Description</div><div class="value">${message.replace(/\n/g, '<br>')}</div></div>
    </div>
    <div class="footer">Hestia Smart Interiors · hello@hsios.in · +91-8010234802</div>
  </div>
</body>
</html>`

  try {
    await transporter.sendMail({
      from: `"HSIOS™ Website" <${smtpUser}>`,
      to: notifyTo,
      replyTo: email,
      subject: `New Project Enquiry — ${name} — ${projectType} in ${location}`,
      html,
      text: `New Project Enquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: ${projectType}\nLocation: ${location}\nBudget: ${budget}\n\n${message}`,
    })

    // Auto-acknowledgement to client
    await transporter.sendMail({
      from: `"Hestia Smart Interiors" <${smtpUser}>`,
      to: email,
      subject: 'We received your enquiry — Hestia Smart Interiors',
      html: `
<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="font-family: Georgia, serif; background: #FAF7F2; color: #1C1C1E; padding: 40px 20px;">
<div style="max-width: 540px; margin: 0 auto;">
  <div style="background: #1C1C1E; padding: 32px; border-radius: 12px 12px 0 0;">
    <h1 style="color: #C4A882; font-size: 22px; margin: 0;">Thank You, ${name}.</h1>
    <p style="color: rgba(255,255,255,0.6); font-family: sans-serif; font-size: 13px; margin: 8px 0 0;">
      Hestia Smart Interiors — We&apos;ll be in touch shortly.
    </p>
  </div>
  <div style="background: white; padding: 32px; border: 1px solid #EAE0D0; border-radius: 0 0 12px 12px;">
    <p style="font-size: 15px; line-height: 1.75; color: #3A3530;">
      We have received your project enquiry and will respond within <strong>24 hours</strong>
      to schedule a consultation.
    </p>
    <p style="font-size: 15px; line-height: 1.75; color: #3A3530;">
      If your matter is urgent, please WhatsApp us at
      <a href="https://wa.me/918010234802" style="color: #9A7A54;">+91-8010234802</a>.
    </p>
    <hr style="border: none; border-top: 1px solid #EAE0D0; margin: 24px 0;">
    <p style="font-family: sans-serif; font-size: 12px; color: #9B9080;">
      Hestia Smart Interiors · Powered by HSIOS™<br>
      hello@hsios.in · +91-8010234802
    </p>
  </div>
</div>
</body></html>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'unknown'
    console.error(`[Contact API] SMTP error — ${message}`)
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
