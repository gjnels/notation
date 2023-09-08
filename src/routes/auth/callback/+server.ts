import type { RequestHandler } from './$types'
import { redirect } from '@sveltejs/kit'

export const GET: RequestHandler = async function ({ url, locals: { supabase } }) {
  const code = url.searchParams.get('code')

  if (code) await supabase.auth.exchangeCodeForSession(code)

  throw redirect(303, '/')
}
