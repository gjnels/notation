<script lang="ts">
import { filteredNotes, notesLoading } from '$lib/stores/notes'
import LoadingSpinner from './LoadingSpinner.svelte'
import NoteItem from './NoteItem.svelte'
</script>

{#if $notesLoading}
  <LoadingSpinner />
{:else}
  <ul class="grid grid-cols-[repeat(auto-fill,_minmax(12rem,_1fr))] gap-4">
    {#each $filteredNotes as note (note.id)}
      <NoteItem note={note} />
    {/each}
  </ul>
{/if}
