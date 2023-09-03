<script lang="ts">
import type { Note } from '$lib/stores/notesStore'

export let note: Note
</script>

<li
  class="focus-within:border-primary-500 hover:border-primary-500 dark:focus-within:border-primary-400 dark:hover:border-primary-400 grid rounded border-2 border-slate-500 bg-slate-200 transition hover:scale-105 hover:bg-transparent dark:bg-slate-800"
>
  <a href="/edit?id={note.id}" class="flex flex-col justify-between gap-2 p-2 outline-none">
    <p class="text-lg font-medium leading-tight">{note.title}</p>
    <p class="text-sm opacity-70">{note.updatedAt.toLocaleDateString()}</p>
  </a>
</li>
