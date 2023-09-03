<script lang="ts">
import { filteredNotes } from '$lib/stores/notesStore'
import NoteItem from './NoteItem.svelte'
</script>

<ul class="grid grid-cols-[repeat(auto-fill,_minmax(12rem,_1fr))] gap-4">
  {#each $filteredNotes as note (note.id)}
    <NoteItem note={note} />
  {/each}
</ul>
