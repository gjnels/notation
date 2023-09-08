import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async function ({ locals: { getSession } }) {
  return {
    session: await getSession()
  }
}
