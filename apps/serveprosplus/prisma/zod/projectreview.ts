import * as z from "zod"
import { CompleteProject, relatedProjectSchema, CompleteUser, relatedUserSchema, CompleteReview, relatedReviewSchema } from "./index"

export const projectReviewSchema = z.object({
  projectId: z.string(),
  userId: z.string(),
  reviewId: z.string(),
})

export interface CompleteProjectReview extends z.infer<typeof projectReviewSchema> {
  project: CompleteProject
  user: CompleteUser
  review: CompleteReview
}

/**
 * relatedProjectReviewSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProjectReviewSchema: z.ZodSchema<CompleteProjectReview> = z.lazy(() => projectReviewSchema.extend({
  project: relatedProjectSchema,
  user: relatedUserSchema,
  review: relatedReviewSchema,
}))
