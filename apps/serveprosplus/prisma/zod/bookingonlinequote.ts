import * as z from "zod"
import { CompleteBooking, relatedBookingSchema, CompleteServiceProvider, relatedServiceProviderSchema } from "./index"

export const bookingOnlineQuoteSchema = z.object({
  bookingId: z.string(),
  createdAt: z.date(),
  comment: z.string(),
  highPriceRange: z.string(),
  lowPriceRange: z.string(),
  serviceProviderId: z.string(),
})

export interface CompleteBookingOnlineQuote extends z.infer<typeof bookingOnlineQuoteSchema> {
  booking: CompleteBooking
  serviceProvider: CompleteServiceProvider
}

/**
 * relatedBookingOnlineQuoteSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBookingOnlineQuoteSchema: z.ZodSchema<CompleteBookingOnlineQuote> = z.lazy(() => bookingOnlineQuoteSchema.extend({
  booking: relatedBookingSchema,
  serviceProvider: relatedServiceProviderSchema,
}))
