import { createClient } from '@supabase/supabase-js'

/** Server-side Supabase client using service role key (bypasses RLS).
 *  Only use in API routes — never import in client components. */
export function createServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!
  if (!url || !key) throw new Error('Missing Supabase env vars')
  return createClient(url, key)
}

/** Browser-safe Supabase client using anon key. */
export function createBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  if (!url || !key) throw new Error('Missing Supabase public env vars')
  return createClient(url, key)
}
