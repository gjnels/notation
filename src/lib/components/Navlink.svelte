<script lang="ts">
import { page } from '$app/stores'
import { twMerge } from 'tailwind-merge'

export let href: string

$: active = $page.url.pathname.includes(href)
</script>

<a
  href={href}
  class={twMerge('border-b-2 border-transparent py-0.5 text-sm font-medium outline-none hover:text-orange-500 focus-visible:text-orange-500 dark:hover:text-orange-400 dark:focus-visible:text-orange-400', active && 'border-orange-500 opacity-100')}
>
  <slot />
</a>
