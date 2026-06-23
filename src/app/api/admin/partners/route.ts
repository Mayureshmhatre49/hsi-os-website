import { NextRequest, NextResponse } from 'next/server'
import { getAdminFromRequest } from '@/lib/admin-auth'
import { supabaseAdmin } from '@/lib/supabase'
import { randomBytes } from 'crypto'
import QRCode from 'qrcode'

function generateCode(): string {
  return randomBytes(4).toString('hex').toUpperCase().slice(0, 6)
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

  return NextResponse.json({
    partner,
    link,
    referralUrl,
    tempPassword: authErr ? null : tempPassword,
  }, { status: 201 })
}
