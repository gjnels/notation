<script lang="ts">
import type { Note } from '$lib/stores/notesStore'

export let note: Note
</script>

<li
  class="rounded border-2 border-slate-500 p-2 transition hover:scale-105 hover:border-slate-900 dark:hover:border-slate-50"
>
  <a href="/edit?id={note.id}">
    <p class="text-lg font-medium">{note.title}</p>
    <p class="text-sm opacity-70">{note.updatedAt.toLocaleDateString()}</p>
  </a>
</li>
