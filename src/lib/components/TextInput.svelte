<script lang="ts">
import { twMerge } from 'tailwind-merge'
import FormError from './FormError.svelte'

export let value: string
export let placeholder = ''
export let classes = ''
export let error = ''
</script>

<input
  type="text"
  placeholder={placeholder}
  bind:value={value}
  class={twMerge("focus-visible:border-primary-500 dark:focus-visible:border-primary-400 rounded border-2 border-slate-400 bg-slate-50 p-2 outline-none transition dark:border-slate-500 dark:bg-slate-800", classes)}
/>

<FormError bind:error={error} />
