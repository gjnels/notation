import { error, redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async function ({
  locals: { getSession, supabase },
  depends
}) {
  depends('supabase:auth')

  const session = await getSession()

  if (!session) throw redirect(303, '/login')

  const { data, error: err } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()

  if (err) {
    throw error(404, 'Profile not found')
  }

  return { profile: data }
}
