import { z } from "zod";
import ServiceProviderProspectSchema from "./ServiceProviderProspectSchema";

export type ServiceProviderProspectsFieldsType = z.infer<typeof ServiceProviderProspectSchema>