<script lang="ts">
import NoteSearchBar from '$lib/components/NoteSearchBar.svelte'
import NotesList from '$lib/components/NotesList.svelte'
</script>

<section class="flex flex-col gap-4">
  <NoteSearchBar />
  <NotesList />
</section>
