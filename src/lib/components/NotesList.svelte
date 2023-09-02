<script lang="ts">
import { notes } from '$lib/stores/notesStore'
</script>

<ul class="space-y-3">
  {#each $notes as note (note.id)}
    <li>
      <a href="/edit?id={note.id}">
        <p class="text-lg font-medium">{note.title}</p>
        <p class="text-sm opacity-70">{note.updatedAt.toLocaleDateString()}</p>
      </a>
    </li>
  {/each}
</ul>
