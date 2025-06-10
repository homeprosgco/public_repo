import { bookingImageFolderIdSchema, bookingSchema, preferredBookingDateSchema } from "prisma/zod";

const BookingSchema = bookingSchema
  .pick({
    Dates: true,
    customerUploadURLs: true,
    customerName: true,
    serviceAddress: true,
    bookingCategory: true,
    serviceType: true,
    hiringTimeline: true,
    propertyType: true,
    projectStatus: true,
    isAuthorizedPerson: true,
    projectFocus: true,
    projectDescription: true,
    contactTelephone: true,
    bookingType: true,
    zipcode: true,
    email: true,
    projectTitle: true
  })
  .extend({
    preferredBookingDates: preferredBookingDateSchema
      .pick({
        appointmentDate: true,
        timeSlots: true,
      })
      .array(),
    bookingImageFolderId: bookingImageFolderIdSchema.pick({
      id: true
    })
  });

export default BookingSchema;
