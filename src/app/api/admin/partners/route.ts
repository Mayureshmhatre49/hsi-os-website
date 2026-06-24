import { NextRequest, NextResponse } from 'next/server'
import { getAdminFromRequest } from '@/lib/admin-auth'
import { supabaseAdmin } from '@/lib/supabase'
import { randomBytes } from 'crypto'
import QRCode from 'qrcode'
import nodemailer from 'nodemailer'

function generateCode(): string {
  return randomBytes(4).toString('hex').toUpperCase().slice(0, 6)
}

async function sendPartnerWelcomeEmails(
  partnerEmail: string,
  partnerName: string,
  tempPassword: string,
  referralUrl: string,
  siteUrl: string,
) {
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpHost = process.env.SMTP_HOST ?? 'smtp.hostinger.com'
  const smtpPort = parseInt(process.env.SMTP_PORT ?? '465', 10)

  if (!smtpUser || !smtpPass) return

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
    tls: { rejectUnauthorized: true },
  })

  const loginUrl = `${siteUrl}/partner/login`

  // Email to partner: welcome + credentials
  await transporter.sendMail({
    from: `"Hestia Smart Interiors" <${smtpUser}>`,
    to: partnerEmail,
    subject: 'Welcome to the HSI Referral Partner Portal — Your Login Details',
    html: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Georgia, serif; background: #FAF7F2; color: #1C1C1E; margin: 0; padding: 40px 20px;">
<div style="max-width: 580px; margin: 0 auto;">
  <div style="background: #1C1C1E; padding: 32px; border-radius: 12px 12px 0 0;">
    <h1 style="color: #C4A882; font-size: 22px; margin: 0; font-weight: 700;">Welcome, ${partnerName}.</h1>
    <p style="color: rgba(255,255,255,0.6); font-family: sans-serif; font-size: 13px; margin: 8px 0 0;">
      Hestia Smart Interiors — Referral Partner Portal
    </p>
  </div>
  <div style="background: white; padding: 32px; border: 1px solid #EAE0D0; border-radius: 0 0 12px 12px;">
    <p style="font-size: 15px; line-height: 1.75; color: #3A3530;">
      You have been registered as a referral partner for Hestia Smart Interiors. You can now log in to the Partner Portal to track leads you refer and monitor their progress.
    </p>

    <div style="background: #FAF7F2; border: 1px solid #EAE0D0; border-radius: 8px; padding: 20px; margin: 24px 0;">
      <div style="font-family: sans-serif; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #9A7A54; margin-bottom: 12px;">Your Login Credentials</div>
      <div style="font-size: 14px; margin-bottom: 8px;"><strong>Portal URL:</strong> <a href="${loginUrl}" style="color: #8B6B35;">${loginUrl}</a></div>
      <div style="font-size: 14px; margin-bottom: 8px;"><strong>Email:</strong> ${partnerEmail}</div>
      <div style="font-size: 14px;"><strong>Temporary Password:</strong> <span style="font-family: monospace; background: #1C1C1E; color: #C4A882; padding: 3px 10px; border-radius: 4px; font-size: 14px;">${tempPassword}</span></div>
    </div>

    <div style="background: #FFF8ED; border: 1px solid #F0D9A8; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="font-family: sans-serif; font-size: 12px; color: #92600A; margin: 0;">
        <strong>Important:</strong> Please log in and change your password after your first sign-in. Keep these credentials secure and do not share them with anyone.
      </p>
    </div>

    <div style="background: #FAF7F2; border: 1px solid #EAE0D0; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
      <div style="font-family: sans-serif; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #9A7A54; margin-bottom: 12px;">Your Referral Link</div>
      <div style="font-family: monospace; font-size: 13px; color: #1C1C1E; word-break: break-all;">${referralUrl}</div>
      <p style="font-family: sans-serif; font-size: 12px; color: #9B9080; margin: 8px 0 0;">Share this link with potential clients. Any enquiry submitted through this link will be automatically attributed to you.</p>
    </div>

    <hr style="border: none; border-top: 1px solid #EAE0D0; margin: 24px 0;">
    <p style="font-family: sans-serif; font-size: 12px; color: #9B9080;">
      Hestia Smart Interiors &bull; Powered by HSIOS™<br>
      hello@hsios.in &bull; +91-8010234802
    </p>
  </div>
</div>
</body>
</html>`,
    text: `Welcome to the HSI Referral Partner Portal, ${partnerName}!\n\nLogin URL: ${loginUrl}\nEmail: ${partnerEmail}\nTemporary Password: ${tempPassword}\n\nYour Referral Link: ${referralUrl}\n\nPlease change your password after your first login.\n\nHestia Smart Interiors | hello@hsios.in`,
  })

  // Email to admin: new partner notification
  const notifyTo = process.env.NOTIFY_EMAILS
    ? process.env.NOTIFY_EMAILS.split(',').map(e => e.trim())
    : [smtpUser]

  await transporter.sendMail({
    from: `"HSIOS™ Admin" <${smtpUser}>`,
    to: notifyTo,
    subject: `New Referral Partner Registered — ${partnerName}`,
    html: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Georgia, serif; background: #FAF7F2; color: #1C1C1E; margin: 0; padding: 40px 20px;">
<div style="max-width: 540px; margin: 0 auto;">
  <div style="background: #1C1C1E; padding: 32px; border-radius: 12px 12px 0 0;">
    <h1 style="color: #C4A882; font-size: 20px; margin: 0; font-weight: 700;">New Referral Partner Registered</h1>
    <p style="color: rgba(255,255,255,0.6); font-family: sans-serif; font-size: 13px; margin: 8px 0 0;">HSIOS™ Partner Portal Admin Notification</p>
  </div>
  <div style="background: white; padding: 32px; border: 1px solid #EAE0D0; border-radius: 0 0 12px 12px;">
    <div style="font-family: sans-serif; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #9A7A54; margin-bottom: 12px;">Partner Details</div>
    <div style="font-size: 14px; margin-bottom: 8px;"><strong>Name:</strong> ${partnerName}</div>
    <div style="font-size: 14px; margin-bottom: 8px;"><strong>Email:</strong> ${partnerEmail}</div>
    <div style="font-size: 14px; margin-bottom: 20px;"><strong>Referral URL:</strong> <span style="font-family: monospace; font-size: 12px;">${referralUrl}</span></div>
    <p style="font-family: sans-serif; font-size: 12px; color: #9B9080;">A welcome email with login credentials has been sent to the partner.</p>
    <hr style="border: none; border-top: 1px solid #EAE0D0; margin: 20px 0;">
    <p style="font-family: sans-serif; font-size: 12px; color: #9B9080;">
      Hestia Smart Interiors &bull; Powered by HSIOS™
    </p>
  </div>
</div>
</body>
</html>`,
    text: `New referral partner registered:\nName: ${partnerName}\nEmail: ${partnerEmail}\nReferral URL: ${referralUrl}\n\nA welcome email has been sent to the partner.`,
  })
}

export async function GET(req: NextRequest) {
  if (!getAdminFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: partners, error } = await supabaseAdmin
    .from('referral_partners')
    .select(`*, referral_links(id, code, payment_per_lead, is_active, created_at)`)
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ partners })
}

export async function POST(req: NextRequest) {
  if (!getAdminFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const { name, email, phone, company, payment_per_lead } = body

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'name, email and phone are required.' }, { status: 400 })
  }

  // 1. Create partner record
  const { data: partner, error: partnerErr } = await supabaseAdmin
    .from('referral_partners')
    .insert([{ name, email, phone, company: company || null }])
    .select()
    .single()

  if (partnerErr) return NextResponse.json({ error: partnerErr.message }, { status: 500 })

  // 2. Create Supabase Auth user for partner login
  const tempPassword = randomBytes(8).toString('hex')
  const { data: authData, error: authErr } = await supabaseAdmin.auth.admin.createUser({
    email,
    password: tempPassword,
    email_confirm: true,
    user_metadata: { role: 'partner', partner_id: partner.id, name },
  })

  if (!authErr && authData.user) {
    await supabaseAdmin
      .from('referral_partners')
      .update({ auth_user_id: authData.user.id })
      .eq('id', partner.id)
  }

  // 3. Generate unique referral code (retry on collision)
  let code = generateCode()
  for (let i = 0; i < 5; i++) {
    const { data: existing } = await supabaseAdmin
      .from('referral_links')
      .select('code')
      .eq('code', code)
      .single()
    if (!existing) break
    code = generateCode()
  }

  // 4. Generate QR code
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.hsios.in'
  const referralUrl = `${siteUrl}/enquiry?ref=${code}`
  const qrDataUrl = await QRCode.toDataURL(referralUrl, {
    width: 400,
    margin: 2,
    color: { dark: '#1C1C1E', light: '#FAF7F2' },
  })

  // 5. Save referral link
  const { data: link, error: linkErr } = await supabaseAdmin
    .from('referral_links')
    .insert([{
      partner_id: partner.id,
      code,
      payment_per_lead: payment_per_lead ?? 0,
      qr_data_url: qrDataUrl,
    }])
    .select()
    .single()

  if (linkErr) return NextResponse.json({ error: linkErr.message }, { status: 500 })

  // 6. Send welcome email to partner + admin notification
  if (!authErr) {
    sendPartnerWelcomeEmails(email, name, tempPassword, referralUrl, siteUrl)
      .catch(err => console.error('[Partner Welcome Email Error]', err))
  }

  return NextResponse.json({
    partner,
    link,
    referralUrl,
    tempPassword: authErr ? null : tempPassword,
  }, { status: 201 })
}
