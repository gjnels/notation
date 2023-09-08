<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte'
  import '../index.css'
</script>

<Navbar />

<main class="p-4">
  <slot />
</main>
