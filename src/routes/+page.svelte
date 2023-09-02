<script lang="ts">
import { notes } from '$lib/stores/notesStore'
</script>

<a
  href="/create"
  class="mb-4 inline-block rounded bg-orange-400 px-3 py-1.5 text-sm font-semibold text-black outline-none transition hover:brightness-110 dark:bg-orange-500 dark:text-white"
  >New Note</a
>

<ul class="max-w-[200px] space-y-2">
  {#each $notes as note (note.id)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <li>
      <a href="/edit?id={note.id}">
        <span class="font-semibold">{note.title}</span>
      </a>
    </li>
  {/each}
</ul>
