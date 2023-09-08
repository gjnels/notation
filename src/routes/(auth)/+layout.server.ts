import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async function ({ locals: { getSession } }) {
  if (await getSession()) throw redirect(303, '/')
}
