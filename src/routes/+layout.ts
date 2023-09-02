import type { LayoutLoad } from './$types'
import { notes } from '$lib/stores/notesStore'

export const load: LayoutLoad = function () {
  notes.loadNotes()
}
