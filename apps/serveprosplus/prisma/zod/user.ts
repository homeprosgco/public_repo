import * as z from "zod"
import { AccountType, AccountStatus, MembershipStatus, Role } from "@prisma/client"
import { CompleteAdminUser, relatedAdminUserSchema, CompleteServiceProvidersBookings, relatedServiceProvidersBookingsSchema, CompleteAvatarURL, relatedAvatarURLSchema, CompleteFavoriteServiceProvider, relatedFavoriteServiceProviderSchema, CompleteGoldUser, relatedGoldUserSchema, CompleteProjectReview, relatedProjectReviewSchema, CompleteServiceProvider, relatedServiceProviderSchema, CompleteUserBooking, relatedUserBookingSchema, CompleteUserFeedback, relatedUserFeedbackSchema, CompleteWebsite, relatedWebsiteSchema } from "./index"

export const userSchema = z.object({
  id: z.string(),
  accountType: z.nativeEnum(AccountType),
  accountStatus: z.nativeEnum(AccountStatus),
  authId: z.string(),
  createdAt: z.date(),
  email: z.string().email({ message: "Invalid email address" }),
  fullname: z.string().min(3, { message: "Full name must be longer than 3 characters" }),
  isAdmin: z.boolean(),
  membershipStatus: z.nativeEnum(MembershipStatus),
  primaryAddress: z.string().min(5, { message: "Address must be longer than 5 characters" }),
  roles: z.nativeEnum(Role).array(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof userSchema> {
  adminUser?: CompleteAdminUser | null
  assignedBookings: CompleteServiceProvidersBookings[]
  avatarURL?: CompleteAvatarURL | null
  favoriteServiceProviders: CompleteFavoriteServiceProvider[]
  goldUser?: CompleteGoldUser | null
  projectReviews: CompleteProjectReview[]
  serviceProvider?: CompleteServiceProvider | null
  userBookings: CompleteUserBooking[]
  userFeedback: CompleteUserFeedback[]
  website?: CompleteWebsite | null
}

/**
 * relatedUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserSchema: z.ZodSchema<CompleteUser> = z.lazy(() => userSchema.extend({
  adminUser: relatedAdminUserSchema.nullish(),
  assignedBookings: relatedServiceProvidersBookingsSchema.array(),
  avatarURL: relatedAvatarURLSchema.nullish(),
  favoriteServiceProviders: relatedFavoriteServiceProviderSchema.array(),
  goldUser: relatedGoldUserSchema.nullish(),
  projectReviews: relatedProjectReviewSchema.array(),
  serviceProvider: relatedServiceProviderSchema.nullish(),
  userBookings: relatedUserBookingSchema.array(),
  userFeedback: relatedUserFeedbackSchema.array(),
  website: relatedWebsiteSchema.nullish(),
}))
