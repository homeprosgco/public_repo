import * as z from "zod"
import { ServiceCategory } from "@prisma/client"
import { CompleteServiceProvider, relatedServiceProviderSchema, CompleteProjectReview, relatedProjectReviewSchema } from "./index"

export const projectSchema = z.object({
  id: z.string(),
  serviceProviderId: z.string(),
  imageURLs: z.string().array(),
  serviceCategory: z.nativeEnum(ServiceCategory),
  title: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  location: z.string(),
  serviceType: z.string(),
  priceRangeLower: z.string(),
  priceRangeHigher: z.string(),
})

export interface CompleteProject extends z.infer<typeof projectSchema> {
  serviceProvider: CompleteServiceProvider
  projectReview?: CompleteProjectReview | null
}

/**
 * relatedProjectSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProjectSchema: z.ZodSchema<CompleteProject> = z.lazy(() => projectSchema.extend({
  serviceProvider: relatedServiceProviderSchema,
  projectReview: relatedProjectReviewSchema.nullish(),
}))
