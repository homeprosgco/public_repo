import { Prisma } from "@prisma/client";
import { preferredBookingDateSchema, bookingSchema, bookingImageFolderIdSchema } from "prisma/zod";
import { z } from "zod";
import { bookingData } from "~/_lib/integrations/faker/bookingData";
import { inferSafeParseErrors } from "~/_lib/utils";
import { prisma } from "~/_server/prisma/prisma.server";

const PreferredBookingDates = preferredBookingDateSchema.pick({
  appointmentDate: true,
  timeSlots: true
}).array()

type PreferredBookingDates = z.infer<typeof PreferredBookingDates>

const BookingFields = bookingSchema.pick({
  bookingCategory: true,
  bookingType: true,
  contactTelephone: true,
  customerName: true,
  email: true,
  customerUploadURLs: true,
  hiringTimeline: true,
  isAuthorizedPerson: true,
  projectTitle: true,
  projectStatus: true,
  propertyType: true,
  serviceAddress: true,
  serviceType: true,
  zipcode: true,
}).extend({
  preferredBookingDates: preferredBookingDateSchema.pick({
    appointmentDate: true,
    timeSlots: true
  }).array(),
  bookingImageFolderId: bookingImageFolderIdSchema.pick({
    id: true
  })
});

type BookingFields = z.infer<typeof BookingFields>;
type BookingFieldsErrors = inferSafeParseErrors<typeof BookingFields>;
type BookingActionData = {
  fields: BookingFields;
  errors?: BookingFieldsErrors;
}

type BookingFieldsType = ReturnType<typeof bookingData>

function bookingValidator(userId: string, fields: BookingFieldsType) {
  const { preferredBookingDates, bookingImageFolderId, ...rest } = fields;

  return Prisma.validator<Prisma.UserBookingCreateArgs>()({
    data: {
      user: {
        connect: {
          id: userId
        }
      },
      booking: {
        create: {
          ...rest,
          preferredBookingDates: {
            createMany: {
              data: [
                ...preferredBookingDates as PreferredBookingDates
              ]
            }
          },
          bookingImageFolderId: {
            create: {
              ...bookingImageFolderId
            }
          }
        }
      }
    }
  });
}

export const createUserBooking = async (userId: string, fields: BookingFieldsType) => {
  const result = BookingFields.safeParse(fields);

  if (!result.success) {
    return { fields, errors: result.error.flatten() }
  } else {
    const validBooking = bookingValidator(userId, fields);
    const booking = await prisma.userBooking.create(validBooking);
    return { booking };
  }
}

