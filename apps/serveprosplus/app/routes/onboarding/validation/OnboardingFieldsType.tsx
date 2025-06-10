import { z } from "zod";
import ServiceProviderOnboardingSchema from "./ServiceProviderOnboardingSchema";


export type OnboardingFieldsType = z.infer<typeof ServiceProviderOnboardingSchema>