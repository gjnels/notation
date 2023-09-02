<script lang="ts">
export let error = ''
</script>

{#if error}
  <p class="text-red-500 dark:text-red-400">{error}</p>
{/if}
