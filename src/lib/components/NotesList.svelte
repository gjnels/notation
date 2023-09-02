<script lang="ts">
import { notes } from '$lib/stores/notesStore'
import NoteItem from './NoteItem.svelte'
</script>

<ul class="grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-4">
  {#each $notes as note (note.id)}
    <NoteItem note={note} />
  {/each}
</ul>
