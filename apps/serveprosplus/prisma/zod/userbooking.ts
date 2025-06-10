import * as z from "zod"
import { CompleteBooking, relatedBookingSchema, CompleteUser, relatedUserSchema } from "./index"

export const userBookingSchema = z.object({
  bookingId: z.string(),
  userId: z.string(),
})

export interface CompleteUserBooking extends z.infer<typeof userBookingSchema> {
  booking: CompleteBooking
  user: CompleteUser
}

/**
 * relatedUserBookingSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserBookingSchema: z.ZodSchema<CompleteUserBooking> = z.lazy(() => userBookingSchema.extend({
  booking: relatedBookingSchema,
  user: relatedUserSchema,
}))
