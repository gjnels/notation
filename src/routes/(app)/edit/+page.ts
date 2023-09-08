import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { notes } from '$lib/stores/notes'

export const load: PageLoad = function ({ url: { searchParams } }) {
  const id = searchParams.get('id')
  if (!id) throw redirect(302, '/')

  const note = notes.findNote(id)
  if (!note) throw redirect(302, '/')

  return note
}
