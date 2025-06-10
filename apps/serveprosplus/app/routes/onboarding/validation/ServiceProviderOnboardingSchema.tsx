import { serviceProviderSchema } from "prisma/zod";
import GoldUserOnboardingSchema from "./GoldUserOnboardingSchema";

const ServiceProviderOnboardingSchema = serviceProviderSchema
  .pick({
    companyBio: true,
    serviceCategories: true,
    serviceDetails: true,
  })
  .merge(GoldUserOnboardingSchema);

export default ServiceProviderOnboardingSchema;
