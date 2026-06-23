import { NextRequest, NextResponse } from 'next/server'
import { getAdminFromRequest } from '@/lib/admin-auth'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!getAdminFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params

  const { data: partner, error } = await supabaseAdmin
    .from('referral_partners')
    .select(`*, referral_links(*)`)
    .eq('id', id)
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 404 })

  const { data: leads } = await supabaseAdmin
    .from('leads')
    .select('id, name, phone, project_type, location, status, lead_score, created_at')
    .eq('referral_partner_id', id)
    .order('created_at', { ascending: false })

  return NextResponse.json({ partner, leads: leads ?? [] })
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!getAdminFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const body = await req.json()

  const { data, error } = await supabaseAdmin
    .from('referral_partners')
    .update({ name: body.name, phone: body.phone, company: body.company })
    .eq('id', id)
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ partner: data })
}
