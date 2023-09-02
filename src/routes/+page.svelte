<script lang="ts">
import NoteForm from '$lib/components/NoteForm.svelte'
import { notes, noteToUpdate } from '$lib/stores/notesStore'

function handleEditNote(id: string) {
  $noteToUpdate = $notes.find((note) => note.id === id)
}

function handleDeleteNote(id: string) {
  notes.deleteNote(id)
  if ($noteToUpdate?.id === id) $noteToUpdate = undefined
}
</script>

<div class="flex gap-8">
  {#if $notes.length}
    <ul>
      {#each $notes as note (note.id)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li class="flex items-center gap-4" on:click|preventDefault={() => handleEditNote(note.id)}>
          <h3>{note.title}</h3>
          <button
            on:click|preventDefault={() => handleDeleteNote(note.id)}
            class="flex h-4 w-4 items-center justify-center rounded-full bg-slate-700 text-slate-50 outline-none dark:bg-slate-300 dark:text-slate-900"
            ><span>&times;</span></button
          >
        </li>
      {/each}
    </ul>
  {:else}
    <p class="opacity-75">No notes found, add one now!</p>
  {/if}

  {#if $noteToUpdate}
    <NoteForm
      id={$noteToUpdate.id}
      title={$noteToUpdate.title}
      body={$noteToUpdate.body}
      classes="grow"
    />
  {:else}
    <NoteForm classes="grow" />
  {/if}
</div>
