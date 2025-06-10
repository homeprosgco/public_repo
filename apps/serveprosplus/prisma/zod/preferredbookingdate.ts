import * as z from "zod"
import { BookingTimeSlot } from "@prisma/client"
import { CompleteBooking, relatedBookingSchema } from "./index"

export const preferredBookingDateSchema = z.object({
  id: z.string(),
  appointmentDate: z.date(),
  timeSlots: z.nativeEnum(BookingTimeSlot).array(),
  bookingId: z.string(),
})

export interface CompletePreferredBookingDate extends z.infer<typeof preferredBookingDateSchema> {
  booking: CompleteBooking
}

/**
 * relatedPreferredBookingDateSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedPreferredBookingDateSchema: z.ZodSchema<CompletePreferredBookingDate> = z.lazy(() => preferredBookingDateSchema.extend({
  booking: relatedBookingSchema,
}))
