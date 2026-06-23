import { NextRequest, NextResponse } from 'next/server'
import { getAdminFromRequest } from '@/lib/admin-auth'
import { supabaseAdmin } from '@/lib/supabase'

const VALID_STATUSES = ['NEW', 'CONTACTED', 'SITE_VISIT', 'CONVERTED', 'LOST']

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!getAdminFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const { status, note } = await req.json()

  if (!VALID_STATUSES.includes(status)) {
    return NextResponse.json({ error: 'Invalid status.' }, { status: 400 })
  }

  // Get current status for history
  const { data: lead } = await supabaseAdmin
    .from('leads')
    .select('status')
    .eq('id', id)
    .single()

  const oldStatus = lead?.status ?? null

  const [updateRes] = await Promise.all([
    supabaseAdmin
      .from('leads')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id),
    supabaseAdmin
      .from('lead_status_history')
      .insert([{ lead_id: id, old_status: oldStatus, new_status: status, note: note ?? null }]),
  ])

  if (updateRes.error) return NextResponse.json({ error: updateRes.error.message }, { status: 500 })

  // Notify partner by email if lead has a referral partner
  try {
    const { data: fullLead } = await supabaseAdmin
      .from('leads')
      .select('name, referral_partners(name, email)')
      .eq('id', id)
      .single()

    const rawPartner = (fullLead as unknown as { referral_partners?: { name: string; email: string }[] | null })?.referral_partners
    const partner = Array.isArray(rawPartner) ? rawPartner[0] : rawPartner
    if (partner?.email) {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST ?? 'smtp.hostinger.com',
        port: parseInt(process.env.SMTP_PORT ?? '465', 10),
        secure: true,
        auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
      })

      const statusLabel: Record<string, string> = {
        NEW: 'New', CONTACTED: 'Contacted', SITE_VISIT: 'Site Visit Scheduled',
        CONVERTED: 'Converted ✓', LOST: 'Not Proceeding',
      }

      await transporter.sendMail({
        from: `"Hestia Smart Interiors" <${process.env.SMTP_USER}>`,
        to: partner.email,
        subject: `Lead Update: ${fullLead?.name} — ${statusLabel[status] ?? status}`,
        html: `
<div style="font-family:Georgia,serif;background:#FAF7F2;padding:40px 20px;color:#1C1C1E;max-width:520px;margin:0 auto;">
  <div style="background:#1C1C1E;padding:24px 32px;border-radius:12px 12px 0 0;">
    <h2 style="color:#C4A882;margin:0;font-size:18px;">Lead Status Update</h2>
    <p style="color:rgba(255,255,255,0.5);font-family:sans-serif;font-size:12px;margin:6px 0 0;">Hestia Smart Interiors — Referral Partner Portal</p>
  </div>
  <div style="background:white;padding:28px 32px;border:1px solid #EAE0D0;border-radius:0 0 12px 12px;">
    <p style="font-family:sans-serif;font-size:14px;color:#3A3530;">Hi ${partner.name},</p>
    <p style="font-family:sans-serif;font-size:14px;color:#3A3530;">
      Your referred lead <strong>${fullLead?.name}</strong> has been updated to:
    </p>
    <div style="background:#FAF7F2;border:1px solid #EAE0D0;border-radius:8px;padding:14px 20px;margin:16px 0;font-family:sans-serif;font-size:16px;font-weight:700;color:#8B6B35;">
      ${statusLabel[status] ?? status}
    </div>
    ${note ? `<p style="font-family:sans-serif;font-size:13px;color:#9B9080;font-style:italic;">"${note}"</p>` : ''}
    <p style="font-family:sans-serif;font-size:12px;color:#9B9080;margin-top:20px;">
      Log in to your partner portal at <a href="${process.env.NEXT_PUBLIC_SITE_URL}/partner" style="color:#9A7A54;">hsios.in/partner</a> to view full details.
    </p>
  </div>
</div>`,
      })
    }
  } catch (e) {
    console.error('[Partner notify error]', e)
  }

  return NextResponse.json({ ok: true })
}
