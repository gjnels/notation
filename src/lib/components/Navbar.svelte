<script lang="ts">
import Logo from './Logo.svelte'
import Navlink from './Navlink.svelte'
</script>

<header
  class="bg-surface-300 dark:bg-surface-700 flex items-center justify-between gap-4 px-4 py-2"
>
  <Logo />
  <nav>
    <Navlink href="/create">New Note</Navlink>
  </nav>
</header>
