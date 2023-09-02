<script lang="ts">
import type { Note } from '$lib/stores/notesStore'

export let note: Note
</script>

<li
  class="grid rounded border-2 border-slate-500 bg-slate-200 transition focus-within:border-orange-500 hover:scale-105 hover:border-orange-500 hover:bg-transparent dark:bg-slate-800 dark:focus-within:border-orange-400 dark:hover:border-orange-400"
>
  <a href="/edit?id={note.id}" class="flex flex-col justify-between gap-2 p-2 outline-none">
    <p class="text-lg font-medium leading-tight">{note.title}</p>
    <p class="text-sm opacity-70">{note.updatedAt.toLocaleDateString()}</p>
  </a>
</li>
