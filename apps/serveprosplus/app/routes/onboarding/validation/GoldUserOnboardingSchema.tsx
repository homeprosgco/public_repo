import { goldUserSchema, websiteSchema } from "prisma/zod";
import UserOnboardingSchema from "./UserOnboardingSchema";

const GoldUserOnboardingSchema = goldUserSchema
  .pick({
    companyName: true,
    primaryTelephone: true,
  })
  .extend({
    user: UserOnboardingSchema,
    website: websiteSchema.pick({
      websiteURL: true
    })
  });

export default GoldUserOnboardingSchema;
