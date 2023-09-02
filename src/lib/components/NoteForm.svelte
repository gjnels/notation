<script lang="ts">
import { twMerge } from 'tailwind-merge'
import { noteToUpdate, notes } from '$lib/stores/notesStore'

export let classes = ''

export let title = ''
export let body = ''
export let id = ''

function handleResetForm() {
  $noteToUpdate = undefined
  title = ''
  body = ''
  id = ''
}

function handleSubmit() {
  if (!title) return

  const note = { title, body, id: id || crypto.randomUUID() }
  id ? notes.updateNote(note) : notes.createNote(note)
  handleResetForm()
}
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class={twMerge("flex max-w-xl flex-col gap-2", classes)}
>
  <input
    type="text"
    placeholder="Title"
    bind:value={title}
    class="rounded border-2 border-slate-400 bg-transparent p-2 outline-none transition focus-visible:border-slate-900 dark:border-slate-500 dark:focus-visible:border-slate-50"
  />
  <textarea
    rows={5}
    placeholder="Body"
    bind:value={body}
    class="rounded border-2 border-slate-400 bg-transparent p-2 outline-none transition focus-visible:border-slate-900 dark:border-slate-500 dark:focus-visible:border-slate-50"
  />
  <button
    type="submit"
    class="rounded bg-orange-400 px-3 py-1.5 font-semibold text-black outline-none transition hover:brightness-110 dark:bg-orange-500 dark:text-white"
    >{id ? 'Update' : 'Create'} Note</button
  >
</form>
