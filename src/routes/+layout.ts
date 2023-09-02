import { notes } from '$lib/stores/notesStore'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = function () {
  notes.loadNotes()
}
