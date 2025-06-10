import * as z from "zod"
import { ServiceProviderProspectSource, ServiceCategory, CampaignSentStatus } from "@prisma/client"
import { CompleteProspectReview, relatedProspectReviewSchema } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const serviceProviderProspectSchema = z.object({
  id: z.string(),
  companyName: z.string(),
  phoneNumber: z.string(),
  primaryPhotoURL: z.string().nullish(),
  source: z.nativeEnum(ServiceProviderProspectSource),
  serviceCategories: z.nativeEnum(ServiceCategory).array(),
  campaignSent: z.boolean(),
  campaignLastSent: z.date(),
  campaignSentStatus: z.nativeEnum(CampaignSentStatus),
  createdAt: z.date(),
  imageURLs: jsonSchema.array(),
  location: z.string(),
  interested: z.boolean(),
  directURL: z.string().nullish(),
  website: z.string().nullish(),
  companyBio: z.string().nullish(),
  title: z.string().nullish(),
})

export interface CompleteServiceProviderProspect extends z.infer<typeof serviceProviderProspectSchema> {
  prospectReviews: CompleteProspectReview[]
}

/**
 * relatedServiceProviderProspectSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedServiceProviderProspectSchema: z.ZodSchema<CompleteServiceProviderProspect> = z.lazy(() => serviceProviderProspectSchema.extend({
  prospectReviews: relatedProspectReviewSchema.array(),
}))
