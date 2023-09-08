<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import type { PageData } from './$types'
  import { superForm } from 'sveltekit-superforms/client'

  export let data: PageData

  const { form, enhance, errors } = superForm(data.form)
</script>

<form method="post" use:enhance class="mx-auto flex max-w-lg flex-col gap-3">
  <h2 class="text-center text-2xl font-bold">Login to Your Account</h2>
  <label for="email" class="flex flex-col">
    <span>Email</span>
    <input type="email" name="email" bind:value={$form.email} required />
    {#if $errors.email}
      <span class="text-rose-500">{$errors.email}</span>
    {/if}
  </label>

  <label for="password" class="flex flex-col">
    <span>Password</span>
    <input type="password" name="password" bind:value={$form.password} required />
    {#if $errors.password}
      <span class="text-rose-500">{$errors.password}</span>
    {/if}
  </label>

  <Button type="submit" color="primary" class="mt-2">Login</Button>

  <p class="text-center">
    Don't have an account? <a href="/signup">Sign Up!</a>
  </p>
</form>
