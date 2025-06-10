import { Prisma } from "@prisma/client";
import { bookingAppointmentSchema } from "prisma/zod";
import { z } from "zod";
import { bookingAppointmentData } from "~/_lib/integrations/faker/bookingAppointmentData";
import { inferSafeParseErrors } from "~/_lib/utils";
import { prisma } from "~/_server/prisma/prisma.server";

const BookingAppointmentFields = bookingAppointmentSchema.pick({
  appointmentDate: true,
  timeSlots: true,
  comment: true,
  startingPrice: true
});


export type BookingAppointmentFields = z.infer<typeof BookingAppointmentFields>
export type BookingAppointmentFieldsErrors = inferSafeParseErrors<typeof BookingAppointmentFields>;
type BookingAppointmentActionData = {
  fields: BookingAppointmentFields;
  errors?: BookingAppointmentFieldsErrors;
}
type BookingAppointmentFieldsType = ReturnType<typeof bookingAppointmentData>

function bookingAppointmentValidator(bookingId: string, serviceProviderId: string, fields: BookingAppointmentFieldsType) {
  return Prisma.validator<Prisma.BookingAppointmentCreateArgs>()({
    data: {
      ...fields,
      bookingId,
      serviceProviderId
    }

  })
}

export const confirmPreferredBookingAppointment = async (bookingId: string, serviceProviderId: string, fields: BookingAppointmentFields) => {
  const result = BookingAppointmentFields.safeParse(fields);

  if (!result.success) {
    return { fields, errors: result.error.flatten() }
  } else {
    const validBookingAppointment = bookingAppointmentValidator(bookingId, serviceProviderId, fields);
    const bookingAppointment = await prisma.bookingAppointment.create(validBookingAppointment);
    return { bookingAppointment }
  }
}