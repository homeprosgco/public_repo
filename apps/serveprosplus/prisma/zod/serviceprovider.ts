import * as z from "zod"
import { ServiceCategory, ServiceDetails } from "@prisma/client"
import { CompleteBookingAppointment, relatedBookingAppointmentSchema, CompleteBookingOnlineQuote, relatedBookingOnlineQuoteSchema, CompleteFavoriteServiceProvider, relatedFavoriteServiceProviderSchema, CompleteOperatingHour, relatedOperatingHourSchema, CompleteProject, relatedProjectSchema, CompleteServiceProvidersBookings, relatedServiceProvidersBookingsSchema, CompleteServiceProviderReview, relatedServiceProviderReviewSchema, CompleteUser, relatedUserSchema, CompleteBookedProvider, relatedBookedProviderSchema, CompleteBookingInterestedProvider, relatedBookingInterestedProviderSchema } from "./index"

export const serviceProviderSchema = z.object({
  id: z.string(),
  areasOfExpertise: z.string().array().min(2, { message: "Add a minimum of 2 areas of expertise" }),
  companyBio: z.string().min(100, { message: "Company bio name must be longer than 100 characters" }),
  companyName: z.string().min(3, { message: "Company name must be longer than 3 characters" }),
  primaryTelephone: z.string().regex(/([0-9]{3})-([0-9]{3})-([0-9]{4})/, { message: "Phone number should match format ###-###-####" }),
  serviceCategories: z.nativeEnum(ServiceCategory).array(),
  serviceDetails: z.nativeEnum(ServiceDetails).array(),
  userId: z.string(),
  verifiedLicense: z.boolean(),
  logoURL: z.string().nullish(),
  profileProjectURLs: z.string().array(),
})

export interface CompleteServiceProvider extends z.infer<typeof serviceProviderSchema> {
  bookingAppointments: CompleteBookingAppointment[]
  bookingOnlineQuotes: CompleteBookingOnlineQuote[]
  favorited: CompleteFavoriteServiceProvider[]
  operatingHours: CompleteOperatingHour[]
  projects: CompleteProject[]
  serviceProviderBookings: CompleteServiceProvidersBookings[]
  serviceProviderReviews: CompleteServiceProviderReview[]
  user: CompleteUser
  bookedBookings: CompleteBookedProvider[]
  interestedBookings: CompleteBookingInterestedProvider[]
}

/**
 * relatedServiceProviderSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedServiceProviderSchema: z.ZodSchema<CompleteServiceProvider> = z.lazy(() => serviceProviderSchema.extend({
  bookingAppointments: relatedBookingAppointmentSchema.array(),
  bookingOnlineQuotes: relatedBookingOnlineQuoteSchema.array(),
  favorited: relatedFavoriteServiceProviderSchema.array(),
  operatingHours: relatedOperatingHourSchema.array(),
  projects: relatedProjectSchema.array(),
  serviceProviderBookings: relatedServiceProvidersBookingsSchema.array(),
  serviceProviderReviews: relatedServiceProviderReviewSchema.array(),
  user: relatedUserSchema,
  bookedBookings: relatedBookedProviderSchema.array(),
  interestedBookings: relatedBookingInterestedProviderSchema.array(),
}))
