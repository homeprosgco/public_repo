import * as z from "zod"
import { CompleteBooking, relatedBookingSchema, CompleteServiceProvider, relatedServiceProviderSchema } from "./index"

export const bookedProviderSchema = z.object({
  bookingId: z.string(),
  serviceProviderId: z.string(),
})

export interface CompleteBookedProvider extends z.infer<typeof bookedProviderSchema> {
  booking: CompleteBooking
  serviceProvider: CompleteServiceProvider
}

/**
 * relatedBookedProviderSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBookedProviderSchema: z.ZodSchema<CompleteBookedProvider> = z.lazy(() => bookedProviderSchema.extend({
  booking: relatedBookingSchema,
  serviceProvider: relatedServiceProviderSchema,
}))
