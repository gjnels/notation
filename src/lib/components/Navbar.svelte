<script lang="ts">
  import Button from './Button.svelte'
  import Logo from './Logo.svelte'
  import Navlink from './Navlink.svelte'

  export let onLogout: () => void
  export let authenticated: boolean
</script>

<header
  class="flex items-center justify-between gap-8 bg-surface-300 px-4 py-2 dark:bg-surface-700"
>
  <div class="flex items-center gap-8">
    <Logo />
    {#if authenticated}
      <nav class="flex items-center gap-4">
        <Navlink href="/create">New Note</Navlink>
        <Navlink href="/profile">My Profile</Navlink>
      </nav>
    {/if}
  </div>

  <div class="flex items-center gap-8">
    {#if authenticated}
      <Button on:click={onLogout} class="text-sm">Logout</Button>
    {/if}
  </div>
</header>
