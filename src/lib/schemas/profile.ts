import { z } from 'zod'

export const profileSchema = z.object({
  id: z.string().uuid(),
  name: z.string().nonempty({ message: 'Name cannot be blank.' })
})
