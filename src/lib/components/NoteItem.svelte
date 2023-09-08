<script lang="ts">
  import type { Note } from '$lib/stores/notes'

  export let note: Note
</script>

<li
  class="grid rounded border-2 border-surface-500 bg-surface-200 transition focus-within:border-primary-500 hover:scale-105 hover:border-primary-500 hover:bg-transparent dark:bg-surface-800 dark:focus-within:border-primary-400 dark:hover:border-primary-400"
>
  <a href="/edit?id={note.id}" class="flex flex-col justify-between gap-2 p-2 outline-none">
    <p class="text-lg font-medium leading-tight">{note.title}</p>
    <p class="text-sm opacity-70">{note.updatedAt.toLocaleDateString()}</p>
  </a>
</li>
