<script lang="ts">
import { twMerge } from 'tailwind-merge'
import { goto } from '$app/navigation'
import { notes } from '$lib/stores/notesStore'

export let classes = ''

export let title = ''
export let body = ''
export let id = ''

function handleSubmit() {
  if (!title) return

  const note = { title, body, id: id || crypto.randomUUID() }
  id ? notes.updateNote(note) : notes.createNote(note)
  goto('/', { replaceState: true })
}

function handleDeleteNote(id: string) {
  notes.deleteNote(id)
  goto('/', { replaceState: true })
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
    class="rounded border-2 border-slate-400 bg-slate-50 p-2 outline-none transition focus-visible:border-slate-900 dark:border-slate-500 dark:bg-slate-800 dark:focus-visible:border-slate-50"
  />
  <textarea
    rows={5}
    placeholder="Body"
    bind:value={body}
    class="rounded border-2 border-slate-400 bg-slate-50 p-2 outline-none transition focus-visible:border-slate-900 dark:border-slate-500 dark:bg-slate-800 dark:focus-visible:border-slate-50"
  />
  <button
    type="submit"
    class="rounded bg-orange-400 px-3 py-1.5 font-semibold outline-none transition hover:brightness-110 dark:bg-orange-500"
    >{id ? 'Update' : 'Create'} Note</button
  >
  {#if id}
    <button
      on:click={() => handleDeleteNote(id)}
      class="mt-4 rounded bg-red-400 px-3 py-1.5 text-sm font-semibold outline-none hover:brightness-110 dark:bg-red-500"
      >Delete Note</button
    >
  {/if}
</form>
