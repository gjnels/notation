import { message, superValidate } from 'sveltekit-superforms/server'
import type { Actions, PageServerLoad } from './$types'
import { profileSchema } from '$lib/schemas/profile'
import { fail, redirect } from '@sveltejs/kit'

export const load: PageServerLoad = async function ({ parent }) {
  const { profile } = await parent()

  return {
    form: await superValidate(profile, profileSchema)
  }
}

export const actions: Actions = {
  default: async function ({ request, locals: { supabase }, url }) {
    const form = await superValidate(request, profileSchema)

    if (!form.valid) {
      return fail(400, { form })
    }

    const { id, ...profile } = form.data

    const { error: err } = await supabase
      .from('profiles')
      .update({ ...profile })
      .eq('id', id)

    if (err) {
      return message(form, {
        success: false,
        message: `Failed to update your profile: ${err.message}`
      })
    }

    throw redirect(303, url.pathname)
  }
}
