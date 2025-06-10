import { AccountType, PrismaClient, User } from "@prisma/client";
import { User as AuthUser } from "@supabase/supabase-js";
import { OnboardingFieldsType } from "../validation/OnboardingFieldsType";
import { createUser } from '../../_static-site.account/profile/user'
import { createGoldUser } from "~/routes/_static-site.account/profile/golduser/use-case/create-gold-user";
import { createServiceProvider } from "~/routes/_static-site.account/service-provider/use-cases/create-service-provider";

export const onboardUser = async (authUser: AuthUser, onboardingFields: OnboardingFieldsType, prisma: PrismaClient) => {

  let onboardingUser;

  switch (onboardingFields.user.accountType) {
    case AccountType.Homeowner:
      onboardingUser = await createUser(authUser, onboardingFields, prisma);

      break;
    case AccountType.Property_Manager:
    case AccountType.Realtor:
      onboardingUser = await createGoldUser(authUser, onboardingFields, prisma);
      break;

    case AccountType.Service_Provider:
      onboardingUser = await createServiceProvider(authUser, onboardingFields, prisma);
      break;

  }

  return {onboardingUser};
}