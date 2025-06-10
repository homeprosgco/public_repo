import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const userFeedbackSchema = z.object({
  id: z.string(),
  feedback: z.string(),
  createdAt: z.date(),
  userId: z.string(),
})

export interface CompleteUserFeedback extends z.infer<typeof userFeedbackSchema> {
  user: CompleteUser
}

/**
 * relatedUserFeedbackSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserFeedbackSchema: z.ZodSchema<CompleteUserFeedback> = z.lazy(() => userFeedbackSchema.extend({
  user: relatedUserSchema,
}))
