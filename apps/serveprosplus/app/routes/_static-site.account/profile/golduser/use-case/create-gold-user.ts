import { PrismaClient } from "@prisma/client";
import { User } from "@supabase/supabase-js";
import { OnboardingFieldsType } from "~/routes/onboarding/validation/OnboardingFieldsType";
import GoldUsers from "../gold-user.model.server";

export const createGoldUser = async (authUser: User, onboardingFields: OnboardingFieldsType, prisma: PrismaClient) => {
  const { user, fields, errors } = await GoldUsers(prisma.goldUser).createGoldUser(authUser, onboardingFields)
  return { user, fields, errors }
}