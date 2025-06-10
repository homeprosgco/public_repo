import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const adminUserSchema = z.object({
  userId: z.string(),
  department: z.string(),
})

export interface CompleteAdminUser extends z.infer<typeof adminUserSchema> {
  user: CompleteUser
}

/**
 * relatedAdminUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedAdminUserSchema: z.ZodSchema<CompleteAdminUser> = z.lazy(() => adminUserSchema.extend({
  user: relatedUserSchema,
}))
