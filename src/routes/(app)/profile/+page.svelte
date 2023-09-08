<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client'
  import type { PageData } from './$types'
  import Button from '$lib/components/Button.svelte'

  export let data: PageData

  const { form, enhance, errors, constraints } = superForm(data.form)
</script>

<form method="post" use:enhance class="mx-auto flex max-w-lg flex-col gap-3">
  <h2 class="text-center text-2xl font-bold">My Profile</h2>
  <input type="hidden" hidden value={$form.id} name="id" />

  <label class="flex flex-col">
    <span>Name</span>
    <input type="text" name="name" bind:value={$form.name} {...$constraints.name} />
    {#if $errors.name}
      <span class="text-danger-500">{$errors.name}</span>
    {/if}
  </label>

  <Button type="submit" class="mt-2" disabled={$form.name === data.profile.name}
    >Update Profile</Button
  >
</form>
