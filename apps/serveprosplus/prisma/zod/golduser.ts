import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const goldUserSchema = z.object({
  userId: z.string(),
  companyName: z.string().min(3, { message: "Company name must be longer than 3 characters" }),
  primaryTelephone: z.string().regex(/([0-9]{3})-([0-9]{3})-([0-9]{4})/, { message: "Phone number should match format ###-###-####" }),
})

export interface CompleteGoldUser extends z.infer<typeof goldUserSchema> {
  user: CompleteUser
}

/**
 * relatedGoldUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedGoldUserSchema: z.ZodSchema<CompleteGoldUser> = z.lazy(() => goldUserSchema.extend({
  user: relatedUserSchema,
}))
