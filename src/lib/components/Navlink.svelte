<script lang="ts">
import { page } from '$app/stores'
import { twMerge } from 'tailwind-merge'

export let href: string

$: active = $page.url.pathname.includes(href)
</script>

<a
  href={href}
  class={twMerge('hover:text-primary-500 focus-visible:text-primary-500 dark:hover:text-primary-400 dark:focus-visible:text-primary-400 border-b-2 border-transparent py-0.5 text-sm font-medium outline-none', active && 'border-primary-500 opacity-100')}
>
  <slot />
</a>
