import * as z from "zod"
import { CompleteReview, relatedReviewSchema } from "./index"

export const companyReviewSchema = z.object({
  id: z.string(),
  reviewId: z.string(),
})

export interface CompleteCompanyReview extends z.infer<typeof companyReviewSchema> {
  review: CompleteReview
}

/**
 * relatedCompanyReviewSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedCompanyReviewSchema: z.ZodSchema<CompleteCompanyReview> = z.lazy(() => companyReviewSchema.extend({
  review: relatedReviewSchema,
}))
