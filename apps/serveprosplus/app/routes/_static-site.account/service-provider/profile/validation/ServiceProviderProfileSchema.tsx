import { operatingHourSchema, websiteSchema } from "prisma/zod";
import ServiceProviderOnboardingSchema from "~/routes/onboarding/validation/ServiceProviderOnboardingSchema";
import UserProfileSchema from "~/routes/_static-site.account/profile/user/validation/UserProfileSchema";

const ServiceProviderProfileSchema = ServiceProviderOnboardingSchema.extend({
  user: UserProfileSchema,
});

export default ServiceProviderProfileSchema;
