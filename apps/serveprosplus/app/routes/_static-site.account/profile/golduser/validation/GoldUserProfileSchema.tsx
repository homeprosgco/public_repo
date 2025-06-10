import { avatarURLSchema, websiteSchema } from "prisma/zod";
import GoldUserOnboardingSchema from "~/routes/onboarding/validation/GoldUserOnboardingSchema";
import UserProfileSchema from "../../user/validation/UserProfileSchema";

const GoldUserProfileSchema = GoldUserOnboardingSchema;

const GoldUserProfileWithAvatar = GoldUserProfileSchema.merge(avatarURLSchema.pick({
  src: true
}))

export const GoldUserProfileWithWebsiteSchema = GoldUserOnboardingSchema.merge(
  websiteSchema.pick({
    websiteURL: true,
  })
);

export const GoldUserProfileWithWebsiteAvatar = GoldUserProfileSchema.merge(
  websiteSchema.pick({
    websiteURL: true
  }).merge(avatarURLSchema.pick({
    src: true
  })),
)

export default GoldUserProfileSchema;
