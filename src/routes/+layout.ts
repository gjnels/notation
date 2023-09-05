import type { LayoutLoad } from './$types'
import { notes } from '$lib/stores/notes'

export const load: LayoutLoad = function () {
  notes.loadNotes()
}
