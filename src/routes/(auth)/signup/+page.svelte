<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import type { PageData } from './$types'
  import { superForm } from 'sveltekit-superforms/client'
  import { CheckBadge, CheckCircle, Icon } from 'svelte-hero-icons'

  export let data: PageData

  const { form, enhance, errors, message } = superForm(data.form)
</script>

{#if $message?.success}
  <p class="flex items-center justify-center gap-2 text-lg">
    <Icon src={CheckBadge} size="2em" solid class="text-primary-500" />
    <span>{$message.message}</span>
  </p>
{:else}
  <form method="post" use:enhance class="mx-auto flex max-w-lg flex-col gap-3">
    <h2 class="text-center text-2xl font-bold">Create Your Account</h2>
    <label for="email" class="flex flex-col">
      <span>Email</span>
      <input type="email" name="email" bind:value={$form.email} required />
      {#if $errors.email}
        <span class="text-danger-500">{$errors.email}</span>
      {/if}
    </label>

    <label for="password" class="flex flex-col">
      <span>Password</span>
      <input type="password" name="password" bind:value={$form.password} required />
      {#if $errors.password}
        <span class="text-danger-500">{$errors.password}</span>
      {/if}
    </label>

    {#if $message?.success === false}
      <p class="text-danger-500">{$message.message}</p>
    {/if}

    <Button type="submit" color="primary" class="mt-2">Sign Up</Button>

    <p class="text-center">
      Already have an account? <a href="/login">Login!</a>
    </p>
  </form>
{/if}
