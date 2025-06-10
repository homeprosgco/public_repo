import * as z from "zod"
import { CompleteBooking, relatedBookingSchema, CompleteServiceProvider, relatedServiceProviderSchema } from "./index"

export const bookingInterestedProviderSchema = z.object({
  bookingId: z.string(),
  serviceProviderId: z.string(),
})

export interface CompleteBookingInterestedProvider extends z.infer<typeof bookingInterestedProviderSchema> {
  booking: CompleteBooking
  serviceProvider: CompleteServiceProvider
}

/**
 * relatedBookingInterestedProviderSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBookingInterestedProviderSchema: z.ZodSchema<CompleteBookingInterestedProvider> = z.lazy(() => bookingInterestedProviderSchema.extend({
  booking: relatedBookingSchema,
  serviceProvider: relatedServiceProviderSchema,
}))
