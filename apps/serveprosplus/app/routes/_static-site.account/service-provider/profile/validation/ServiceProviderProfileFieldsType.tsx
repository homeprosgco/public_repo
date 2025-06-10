import { z } from "zod";
import ServiceProviderProfileSchema from "./ServiceProviderProfileSchema";

export type ServiceProviderProfileFieldsType = z.infer<typeof ServiceProviderProfileSchema>;