<script lang="ts">
  import '../index.css'
  import type { LayoutData } from './$types'
  import { onMount } from 'svelte'
  import { invalidate } from '$app/navigation'
  import Navbar from '$lib/components/Navbar.svelte'

  export let data: LayoutData

  $: ({ supabase, session } = data)

  onMount(function () {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(function (event, _session) {
      console.log(event)
      if (_session?.expires_at !== session?.expires_at) invalidate('supabase:auth')
    })

    return function () {
      subscription.unsubscribe()
    }
  })
</script>

<Navbar onLogout={async () => await supabase.auth.signOut()} authenticated={!!session} />

<main class="p-4">
  <slot />
</main>
