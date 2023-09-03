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
  class={twMerge("focus-visible:border-primary-500 dark:focus-visible:border-primary-400 border-surface-400 bg-surface-50 dark:border-surface-500 dark:bg-surface-800 rounded border-2 p-2 outline-none transition", classes)}
/>

<FormError bind:error={error} />
