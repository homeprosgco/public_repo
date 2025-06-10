import * as z from "zod"
import { CompleteProjectReview, relatedProjectReviewSchema, CompleteCompanyReview, relatedCompanyReviewSchema, CompleteServiceProviderReview, relatedServiceProviderReviewSchema } from "./index"

export const reviewSchema = z.object({
  id: z.string(),
  rating: z.number().int(),
  customerName: z.string(),
  location: z.string(),
  createdAt: z.date(),
  comment: z.string(),
})

export interface CompleteReview extends z.infer<typeof reviewSchema> {
  projectReview?: CompleteProjectReview | null
  companyReview?: CompleteCompanyReview | null
  serviceProviderReview?: CompleteServiceProviderReview | null
}

/**
 * relatedReviewSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedReviewSchema: z.ZodSchema<CompleteReview> = z.lazy(() => reviewSchema.extend({
  projectReview: relatedProjectReviewSchema.nullish(),
  companyReview: relatedCompanyReviewSchema.nullish(),
  serviceProviderReview: relatedServiceProviderReviewSchema.nullish(),
}))
