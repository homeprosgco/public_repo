import { preferredBookingDateSchema, relatedBookingSchema } from "prisma/zod";

export const PreferredBookingDateSchema = preferredBookingDateSchema.pick({
  appointmentDate: true,
  timeSlots: true
});
