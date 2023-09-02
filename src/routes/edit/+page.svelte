<script lang="ts">
import type { PageData } from './$types'
import NoteForm from '$lib/components/NoteForm.svelte'

export let data: PageData
let { title, body, id } = data
</script>

<div class="flex flex-col items-center gap-4">
  <h1 class="text-xl font-bold">Edit Note</h1>
  <NoteForm title={title} body={body} id={id} classes="w-full" />
</div>
