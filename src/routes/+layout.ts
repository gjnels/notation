import type { LayoutLoad } from './$types'
import type { Database } from '../database.types'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import { redirect } from '@sveltejs/kit'

export const load: LayoutLoad = async function ({ fetch, data, depends, url }) {
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient<Database>({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: data.session
  })

  const {
    data: { session }
  } = await supabase.auth.getSession()

  // protect entire application if not authenticated
  if (!session && url.pathname !== '/login') throw redirect(303, '/login')

  return { supabase, session }
}
