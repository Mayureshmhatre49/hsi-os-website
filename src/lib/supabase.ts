import { createClient } from '@supabase/supabase-js'

const url  = process.env.SUPABASE_URL!
const anon = process.env.SUPABASE_ANON_KEY!
const svc  = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Public client — respects RLS (used for partner auth)
export const supabase = createClient(url, anon)

// Service-role client — bypasses RLS (used in admin API routes)
export const supabaseAdmin = createClient(url, svc)
