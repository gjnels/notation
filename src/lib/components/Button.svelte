<script lang="ts">
  import { twMerge } from 'tailwind-merge'

  export let type: 'submit' | 'reset' | 'button' = 'button'
  export let color: 'surface' | 'primary' = 'primary'
</script>

<button
  {type}
  on:click
  {...$$restProps}
  class={twMerge(
    'rounded px-3 py-1 font-semibold outline-none transition',
    $$props.disabled
      ? 'cursor-not-allowed opacity-75'
      : 'hover:brightness-110 focus-visible:ring focus-visible:ring-surface-800 dark:focus-visible:ring-surface-200',
    color === 'primary' && 'bg-primary-500 text-black',
    color === 'surface' && 'bg-surface-500 text-white',
    $$props.class
  )}
>
  <slot />
</button>
