import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async function ({ locals: { getSession }, depends }) {
  depends('supabase:auth')

  const session = await getSession()

  if (!session) throw redirect(303, '/login')

  return { session }
}
