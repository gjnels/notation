import type { Handle } from '@sveltejs/kit'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'

export const handle: Handle = async function ({ event, resolve }) {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event
  })

  event.locals.getSession = async function () {
    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession()
    return session
  }

  return resolve(event, {
    // tell Sveltekit that Supabase needs the `content-range` header
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    }
  })
}
