import * as z from "zod"
import { CompleteServiceProviderProspect, relatedServiceProviderProspectSchema } from "./index"

export const prospectReviewSchema = z.object({
  id: z.string(),
  prospectId: z.string(),
  date: z.date(),
  rating: z.number().int(),
  review: z.string(),
  photoURLs: z.string().array(),
  reviewerName: z.string(),
  reviewerLocation: z.string(),
})

export interface CompleteProspectReview extends z.infer<typeof prospectReviewSchema> {
  prospect: CompleteServiceProviderProspect
}

/**
 * relatedProspectReviewSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProspectReviewSchema: z.ZodSchema<CompleteProspectReview> = z.lazy(() => prospectReviewSchema.extend({
  prospect: relatedServiceProviderProspectSchema,
}))
