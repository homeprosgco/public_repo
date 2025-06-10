import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const avatarURLSchema = z.object({
  userId: z.string(),
  src: z.string(),
})

export interface CompleteAvatarURL extends z.infer<typeof avatarURLSchema> {
  user: CompleteUser
}

/**
 * relatedAvatarURLSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedAvatarURLSchema: z.ZodSchema<CompleteAvatarURL> = z.lazy(() => avatarURLSchema.extend({
  user: relatedUserSchema,
}))
