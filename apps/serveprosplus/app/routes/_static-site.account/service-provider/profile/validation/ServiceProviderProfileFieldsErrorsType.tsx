import { z } from "zod";
import ServiceProviderProfileSchema from "./ServiceProviderProfileSchema";

export type ServiceProviderProfileFieldsErrorsType = z.infer<
  typeof ServiceProviderProfileSchema
>;
