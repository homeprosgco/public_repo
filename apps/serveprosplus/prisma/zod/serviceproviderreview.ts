import * as z from "zod"
import { CompleteServiceProvider, relatedServiceProviderSchema, CompleteReview, relatedReviewSchema } from "./index"

export const serviceProviderReviewSchema = z.object({
  providerId: z.string(),
  reviewId: z.string(),
})

export interface CompleteServiceProviderReview extends z.infer<typeof serviceProviderReviewSchema> {
  serviceProvider: CompleteServiceProvider
  review: CompleteReview
}

/**
 * relatedServiceProviderReviewSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedServiceProviderReviewSchema: z.ZodSchema<CompleteServiceProviderReview> = z.lazy(() => serviceProviderReviewSchema.extend({
  serviceProvider: relatedServiceProviderSchema,
  review: relatedReviewSchema,
}))
