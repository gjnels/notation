<script lang="ts">
import Navlink from './Navlink.svelte'
</script>

<header class="flex justify-between gap-4 bg-slate-200 p-2 dark:bg-slate-800">
  <h1 class="text-xl font-bold">
    <a href="/">Notation</a>
  </h1>
  <nav>
    <Navlink href="/create">New Note</Navlink>
  </nav>
</header>
