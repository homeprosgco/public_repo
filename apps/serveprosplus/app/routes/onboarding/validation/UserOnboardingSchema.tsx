import { userSchema } from "prisma/zod";

const UserOnboardingSchema = userSchema.pick({
  fullname: true,
  primaryAddress: true,
  accountType: true,
});
export default UserOnboardingSchema;
