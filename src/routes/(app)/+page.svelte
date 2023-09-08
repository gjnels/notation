<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<p>Welcome to Notation, {data.profile.name}!</p>
