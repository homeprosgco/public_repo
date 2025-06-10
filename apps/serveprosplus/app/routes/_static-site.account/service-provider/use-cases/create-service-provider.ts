import { PrismaClient } from "@prisma/client";
import ServiceProviders from "../service-provider.model.server";
import { User as AuthUser } from "@supabase/supabase-js";
import { OnboardingFieldsType } from "~/routes/onboarding/validation/OnboardingFieldsType";

export const createServiceProvider = async (authUser: AuthUser, onboardingFields: OnboardingFieldsType, prisma: PrismaClient) => {
  const { user, fields, errors } = await ServiceProviders(prisma.serviceProvider).createServiceProvider(authUser, onboardingFields);
  return { user, fields, errors }
}