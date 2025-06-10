import * as z from "zod"
import { CompleteUser, relatedUserSchema, CompleteBooking, relatedBookingSchema, CompleteServiceProvider, relatedServiceProviderSchema } from "./index"

export const serviceProvidersBookingsSchema = z.object({
  assignedAt: z.date(),
  assignedById: z.string(),
  bookingId: z.string(),
  serviceProviderId: z.string(),
})

export interface CompleteServiceProvidersBookings extends z.infer<typeof serviceProvidersBookingsSchema> {
  assignedBy: CompleteUser
  booking: CompleteBooking
  serviceProvider: CompleteServiceProvider
}

/**
 * relatedServiceProvidersBookingsSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedServiceProvidersBookingsSchema: z.ZodSchema<CompleteServiceProvidersBookings> = z.lazy(() => serviceProvidersBookingsSchema.extend({
  assignedBy: relatedUserSchema,
  booking: relatedBookingSchema,
  serviceProvider: relatedServiceProviderSchema,
}))
