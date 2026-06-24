import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Lazy singleton — client is created on first use, not at import/build time.
// This prevents Next.js build failures when SUPABASE_* env vars aren't set
// in the build environment (they only need to be set at runtime on the server).
function lazyClient(urlEnv: string, keyEnv: string): SupabaseClient {
  let client: SupabaseClient | null = null
  return new Proxy({} as SupabaseClient, {
    get(_, prop: string | symbol) {
      if (!client) {
        const url = process.env[urlEnv]
        const key = process.env[keyEnv]
        if (!url || !key) throw new Error(`Missing env vars: ${urlEnv} / ${keyEnv}`)
        client = createClient(url, key)
      }
      return (client as unknown as Record<string | symbol, unknown>)[prop]
    },
  })
}

// Public client — for partner auth (respects RLS)
export const supabase = lazyClient('SUPABASE_URL', 'SUPABASE_ANON_KEY')

// Service-role client — for admin operations (bypasses RLS)
export const supabaseAdmin = lazyClient('SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY')
