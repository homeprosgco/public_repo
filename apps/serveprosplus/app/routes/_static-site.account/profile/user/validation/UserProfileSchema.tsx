import { avatarURLSchema, userSchema } from "prisma/zod";
import UserOnboardingSchema from "~/routes/onboarding/validation/UserOnboardingSchema";

const UserProfileSchema = UserOnboardingSchema;

export const UserProfileWithAvatar = UserProfileSchema.extend({
  avatarURL: avatarURLSchema.pick({src: true})
});

export const UserProfileUpdateSchema = userSchema.omit({
  id: true,
  authId: true,
  updatedAt:true,
  createdAt: true
}).partial();

export default UserProfileSchema;
