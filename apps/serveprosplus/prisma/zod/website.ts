import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const websiteSchema = z.object({
  id: z.string(),
  userId: z.string(),
  websiteURL: z.string(),
})

export interface CompleteWebsite extends z.infer<typeof websiteSchema> {
  user: CompleteUser
}

/**
 * relatedWebsiteSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedWebsiteSchema: z.ZodSchema<CompleteWebsite> = z.lazy(() => websiteSchema.extend({
  user: relatedUserSchema,
}))
