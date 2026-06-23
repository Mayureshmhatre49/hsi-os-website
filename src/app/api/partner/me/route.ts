import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('partner_token')?.value
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: { user }, error } = await supabase.auth.getUser(token)
  if (error || !user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const partnerId = user.user_metadata?.partner_id
  if (!partnerId) return NextResponse.json({ error: 'Not a partner account.' }, { status: 403 })

  const { data: partner } = await supabaseAdmin
    .from('referral_partners')
    .select('id, name, email, phone, company, referral_links(code, payment_per_lead, is_active)')
    .eq('id', partnerId)
    .single()

  return NextResponse.json({ partner })
}
