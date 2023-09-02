<script lang="ts">
import { notes } from '$lib/stores/notesStore'
</script>

<a
  href="/create"
  class="mb-4 inline-block rounded bg-orange-400 px-3 py-1.5 text-sm font-semibold text-black outline-none transition hover:brightness-110 dark:bg-orange-500 dark:text-white"
  >New Note</a
>

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
