<script lang="ts">
  import { twMerge } from 'tailwind-merge'
  import { goto } from '$app/navigation'
  import { notes } from '$lib/stores/notes'
  import Button from './Button.svelte'

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
  class={twMerge('flex max-w-xl flex-col gap-4', $$props.class)}
>
  <input type="text" placeholder="Title" bind:value={title} />
  {#if error}
    <span class="text-danger-500">{error}</span>
  {/if}
  <textarea rows={5} placeholder="Body" bind:value={body} />
  <Button type="submit">{id ? 'Update' : 'Create'} Note</Button>
  {#if id}
    <Button on:click={() => handleDeleteNote(id)} color="surface">Delete Note</Button>
  {/if}
</form>
