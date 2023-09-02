<script lang="ts">
import { twMerge } from 'tailwind-merge'
import FormError from './FormError.svelte'

export let value: string
export let placeholder = ''
export let rows = 5
export let classes = ''
export let error = ''
</script>

<textarea
  rows={rows}
  placeholder={placeholder}
  bind:value={value}
  class={twMerge("rounded border-2 border-slate-400 bg-slate-50 p-2 outline-none transition focus-visible:border-orange-500 dark:border-slate-500 dark:bg-slate-800 dark:focus-visible:border-orange-400", classes)}
/>

<FormError bind:error={error} />
