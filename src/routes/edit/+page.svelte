<script lang="ts">
import type { PageData } from './$types'
import { goto } from '$app/navigation'

import { notes } from '$lib/stores/notesStore'
import NoteForm from '$lib/components/NoteForm.svelte'

export let data: PageData
let { title, body, id } = data

function handleDeleteNote() {
  notes.deleteNote(id)
  goto('/')
}
</script>

<h1 class="text-xl font-bold">Edit Note</h1>
<button on:click={handleDeleteNote}>Delete Note</button>
<NoteForm title={title} body={body} id={id} />
