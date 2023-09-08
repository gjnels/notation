import { authSchema } from '$lib/schemas/auth'
import type { Actions, PageServerLoad } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import { message, superValidate } from 'sveltekit-superforms/server'

export const load: PageServerLoad = async function ({ locals: { getSession } }) {
  if (await getSession()) throw redirect(303, '/')

  return {
    form: await superValidate(authSchema)
  }
}

export const actions: Actions = {
  default: async function ({ request, locals: { supabase } }) {
    const form = await superValidate(request, authSchema)

    if (!form.valid) {
      return fail(400, { form })
    }

    const { email, password } = form.data

    const { error, data } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      return fail(500, { message: 'Server error. Try again later.', form })
    }

    if (data) {
      return message(form, {
        success: false,
        message: 'An account already exists for this email address.'
      })
    }

    return message(form, {
      success: true,
      message: 'Please check your inbox for a link to confirm your email address.'
    })
  }
}
