import { PrismaClient } from "@prisma/client";
import { User } from "@supabase/supabase-js";
import { OnboardingFieldsType } from "~/routes/onboarding/validation/OnboardingFieldsType";
import Users from "../user.model.server";

export const createUser = async (authUser: User, onboardingFields: OnboardingFieldsType, prisma: PrismaClient) => {
  const { user, fields, errors } = await Users(prisma.user).createUser(authUser, onboardingFields);
  return { user, fields, errors }
}