import * as z from "zod"
import { DayOfWeek } from "@prisma/client"
import { CompleteServiceProvider, relatedServiceProviderSchema } from "./index"

export const operatingHourSchema = z.object({
  id: z.string(),
  dayOfWeek: z.nativeEnum(DayOfWeek),
  serviceProviderId: z.string(),
  openingHour: z.string(),
  closingHour: z.string(),
  isClosed: z.boolean(),
})

export interface CompleteOperatingHour extends z.infer<typeof operatingHourSchema> {
  serviceProvider: CompleteServiceProvider
}

/**
 * relatedOperatingHourSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedOperatingHourSchema: z.ZodSchema<CompleteOperatingHour> = z.lazy(() => operatingHourSchema.extend({
  serviceProvider: relatedServiceProviderSchema,
}))
