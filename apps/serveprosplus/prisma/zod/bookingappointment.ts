import * as z from "zod"
import { BookingTimeSlot } from "@prisma/client"
import { CompleteBooking, relatedBookingSchema, CompleteServiceProvider, relatedServiceProviderSchema } from "./index"

export const bookingAppointmentSchema = z.object({
  appointmentDate: z.date(),
  bookingId: z.string(),
  comment: z.string(),
  createdAt: z.date(),
  serviceProviderId: z.string(),
  startingPrice: z.string(),
  timeSlots: z.nativeEnum(BookingTimeSlot).array(),
  updatedAt: z.date(),
})

export interface CompleteBookingAppointment extends z.infer<typeof bookingAppointmentSchema> {
  booking: CompleteBooking
  serviceProvider: CompleteServiceProvider
}

/**
 * relatedBookingAppointmentSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBookingAppointmentSchema: z.ZodSchema<CompleteBookingAppointment> = z.lazy(() => bookingAppointmentSchema.extend({
  booking: relatedBookingSchema,
  serviceProvider: relatedServiceProviderSchema,
}))
