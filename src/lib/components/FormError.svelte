<script lang="ts">
  export let error = ''
</script>

{#if error}
  <p class="text-danger-500 dark:text-danger-400">{error}</p>
{/if}
