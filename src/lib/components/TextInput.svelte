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
  {placeholder}
  bind:value
  class={twMerge(
    'rounded border-2 border-surface-400 bg-surface-50 p-2 outline-none transition focus-visible:border-primary-500 dark:border-surface-500 dark:bg-surface-800 dark:focus-visible:border-primary-400',
    classes
  )}
/>

<FormError bind:error />
