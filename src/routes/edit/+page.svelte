<script lang="ts">
import type { PageData } from './$types'
import { goto } from '$app/navigation'
import { notes } from '$lib/stores/notesStore'
import NoteForm from '$lib/components/NoteForm.svelte'

export let data: PageData
let { title, body, id } = data

function handleDeleteNote() {
  notes.deleteNote(id)
  goto('/', { replaceState: true })
}
</script>

<div class="flex flex-col items-center gap-4">
  <h1 class="text-xl font-bold">Edit Note</h1>
  <button
    on:click={handleDeleteNote}
    class="rounded bg-red-400 px-3 py-1.5 text-sm font-semibold outline-none hover:brightness-110 dark:bg-red-500"
    >Delete Note</button
  >
  <NoteForm title={title} body={body} id={id} classes="w-full" />
</div>
