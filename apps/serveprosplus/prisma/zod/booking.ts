import * as z from "zod"
import { ServiceCategory, BookingResponseType, ProjectTimeline, ProjectAuthorizedOwner, ProjectStatus, PropertyType, ServiceDetails, BookingStatus } from "@prisma/client"
import { CompletePreferredBookingDate, relatedPreferredBookingDateSchema, CompleteBookingAppointment, relatedBookingAppointmentSchema, CompleteBookingOnlineQuote, relatedBookingOnlineQuoteSchema, CompleteBookingImageFolderId, relatedBookingImageFolderIdSchema, CompleteBookedProvider, relatedBookedProviderSchema, CompleteBookingInterestedProvider, relatedBookingInterestedProviderSchema, CompleteServiceProvidersBookings, relatedServiceProvidersBookingsSchema, CompleteUserBooking, relatedUserBookingSchema } from "./index"

export const bookingSchema = z.object({
  id: z.string(),
  bookingCategory: z.nativeEnum(ServiceCategory),
  bookingType: z.nativeEnum(BookingResponseType),
  contactTelephone: z.string().regex(/([0-9]{3})-([0-9]{3})-([0-9]{4})/, { message: "Phone number should match format ###-###-####" }),
  createdAt: z.date(),
  customerName: z.string().min(3, { message: "Name must be longer than 3 characters" }),
  customerUploadURLs: z.string().array(),
  email: z.string().email({ message: "Invalid email address" }),
  hiringTimeline: z.nativeEnum(ProjectTimeline),
  isApproved: z.boolean(),
  isAuthorizedPerson: z.nativeEnum(ProjectAuthorizedOwner),
  isDirectQuote: z.boolean(),
  projectDescription: z.string().min(80, { message: "Please provide us with some details about your project" }),
  projectFocus: z.string(),
  projectStatus: z.nativeEnum(ProjectStatus),
  projectTitle: z.string(),
  propertyType: z.nativeEnum(PropertyType),
  serviceAddress: z.string().min(1, { message: "Address is required" }),
  serviceType: z.nativeEnum(ServiceDetails),
  status: z.nativeEnum(BookingStatus),
  updatedAt: z.date(),
  views: z.number().int(),
  zipcode: z.string(),
})

export interface CompleteBooking extends z.infer<typeof bookingSchema> {
  preferredBookingDates: CompletePreferredBookingDate[]
  bookingAppointments: CompleteBookingAppointment[]
  bookingOnlineQuotes: CompleteBookingOnlineQuote[]
  bookingImageFolderId?: CompleteBookingImageFolderId | null
  bookedProvider?: CompleteBookedProvider | null
  interestedProviders: CompleteBookingInterestedProvider[]
  serviceProviders: CompleteServiceProvidersBookings[]
  userBooking?: CompleteUserBooking | null
}

/**
 * relatedBookingSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBookingSchema: z.ZodSchema<CompleteBooking> = z.lazy(() => bookingSchema.extend({
  preferredBookingDates: relatedPreferredBookingDateSchema.array(),
  bookingAppointments: relatedBookingAppointmentSchema.array(),
  bookingOnlineQuotes: relatedBookingOnlineQuoteSchema.array(),
  bookingImageFolderId: relatedBookingImageFolderIdSchema.nullish(),
  bookedProvider: relatedBookedProviderSchema.nullish(),
  interestedProviders: relatedBookingInterestedProviderSchema.array(),
  serviceProviders: relatedServiceProvidersBookingsSchema.array(),
  userBooking: relatedUserBookingSchema.nullish(),
}))
