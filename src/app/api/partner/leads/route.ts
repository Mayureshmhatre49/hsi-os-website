import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('partner_token')?.value
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: { user }, error } = await supabase.auth.getUser(token)
  if (error || !user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const partnerId = user.user_metadata?.partner_id
  if (!partnerId) return NextResponse.json({ error: 'Not a partner account.' }, { status: 403 })

  const { data: leads, error: leadsErr } = await supabaseAdmin
    .from('leads')
    .select('id, name, project_type, location, budget, status, created_at')
    .eq('referral_partner_id', partnerId)
    .order('created_at', { ascending: false })

  if (leadsErr) return NextResponse.json({ error: leadsErr.message }, { status: 500 })
  return NextResponse.json({ leads })
}
