import { serviceProviderProspectSchema } from "prisma/zod";

const ServiceProviderProspectSchema = serviceProviderProspectSchema.pick({
  companyName: true,
  imageURLs: true,
  location: true,
  phoneNumber: true,
  serviceCategories: true,
  source: true
});

export default ServiceProviderProspectSchema;