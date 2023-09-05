<script lang="ts">
import { twMerge } from 'tailwind-merge'
import { goto } from '$app/navigation'
import { notes } from '$lib/stores/notes'
import TextInput from './TextInput.svelte'
import TextArea from './TextArea.svelte'

export let classes = ''

export let title = ''
export let body = ''
export let id = ''
let error = ''

const MAX_TITLE_LENGTH = 80

function handleSubmit() {
  if (!title) {
    error = 'Title is required'
    return
  }

  if (title.length > MAX_TITLE_LENGTH) {
    error = `Title cannot be longer than ${MAX_TITLE_LENGTH} characters`
    return
  }

  error = ''

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
  class={twMerge("flex max-w-xl flex-col gap-4", classes)}
>
  <TextInput placeholder="Title" bind:value={title} error={error} />
  <TextArea rows={5} placeholder="Body" bind:value={body} />
  <button
    type="submit"
    class="bg-primary-400 dark:bg-primary-500 rounded px-3 py-1.5 font-semibold outline-none transition hover:brightness-110"
    >{id ? 'Update' : 'Create'} Note</button
  >
  {#if id}
    <button
      on:click={() => handleDeleteNote(id)}
      class="bg-danger-400 dark:bg-danger-500 mt-4 rounded px-3 py-1.5 text-sm font-semibold outline-none hover:brightness-110"
      >Delete Note</button
    >
  {/if}
</form>
