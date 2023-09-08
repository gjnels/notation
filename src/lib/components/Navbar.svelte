<script lang="ts">
  import Logo from './Logo.svelte'
  import Navlink from './Navlink.svelte'
</script>

<header
  class="flex items-center justify-between gap-4 bg-surface-300 px-4 py-2 dark:bg-surface-700"
>
  <Logo />
  <nav>
    <Navlink href="/create">New Note</Navlink>
  </nav>
</header>
