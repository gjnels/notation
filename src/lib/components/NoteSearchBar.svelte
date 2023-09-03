<script lang="ts">
import { searchQuery } from '$lib/stores/notesStore'
import TextInput from './TextInput.svelte'
</script>

<TextInput
  bind:value={$searchQuery}
  placeholder="Search your notes"
  classes="rounded-full px-3 py-1 max-w-sm"
/>
