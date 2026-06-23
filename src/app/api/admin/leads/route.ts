import { NextRequest, NextResponse } from 'next/server'
import { getAdminFromRequest } from '@/lib/admin-auth'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  if (!getAdminFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const partnerId = searchParams.get('partner_id')
  const status    = searchParams.get('status')

  let query = supabaseAdmin
    .from('leads')
    .select(`
      id, name, email, phone, project_type, location, budget,
      timeline, services, source, lead_score, referral_code,
      referral_partner_id, status, created_at,
      referral_partners(name)
    `)
    .order('created_at', { ascending: false })

  if (partnerId) query = query.eq('referral_partner_id', partnerId)
  if (status)    query = query.eq('status', status)

  const { data: leads, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ leads })
}
