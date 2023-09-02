<script lang="ts">
import Logo from './Logo.svelte'
import Navlink from './Navlink.svelte'
</script>

<header class="flex justify-between gap-4 bg-slate-200 px-4 py-2 dark:bg-slate-800">
  <Logo />
  <nav>
    <Navlink href="/create">New Note</Navlink>
  </nav>
</header>
