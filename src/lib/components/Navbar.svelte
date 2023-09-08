<script lang="ts">
  import Button from './Button.svelte'
  import Logo from './Logo.svelte'
  import Navlink from './Navlink.svelte'

  export let onLogout: () => void
</script>

<header class="flex items-center gap-8 bg-surface-300 px-4 py-2 dark:bg-surface-700">
  <Logo />
  <nav>
    <Navlink href="/create">New Note</Navlink>
  </nav>
  <Button on:click={onLogout} class="ml-auto text-sm">Logout</Button>
</header>
