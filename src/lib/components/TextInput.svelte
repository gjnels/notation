<script lang="ts">
import { twMerge } from 'tailwind-merge'

export let value: string
export let placeholder = ''
export let classes = ''
</script>

<input
  type="text"
  placeholder={placeholder}
  bind:value={value}
  class={twMerge("rounded border-2 border-slate-400 bg-slate-50 p-2 outline-none transition focus-visible:border-orange-500 dark:border-slate-500 dark:bg-slate-800 dark:focus-visible:border-orange-400", classes)}
/>
