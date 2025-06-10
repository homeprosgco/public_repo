import { Prisma, PrismaClient } from "@prisma/client";
import { AuthUser } from "@supabase/supabase-js";
import GoldUserOnboardingSchema from "~/routes/onboarding/validation/GoldUserOnboardingSchema";
import { OnboardingFieldsType } from "~/routes/onboarding/validation/OnboardingFieldsType";
import UserOnboardingSchema from "~/routes/onboarding/validation/UserOnboardingSchema";
import errorFields from "~/_lib/utils/error-fields";
import { UserProfileActionData } from "../user";
import UserProfileSchema from "../user/validation/UserProfileSchema";
import { GoldUserProfileActionData, GoldUserProfileFieldsType } from "./validation";
import GoldUserProfileSchema from "./validation/GoldUserProfileSchema";

function GoldUsers(prismaGoldUser: PrismaClient['goldUser']) {
  return Object.assign(prismaGoldUser, {

    createGoldUserAccount(authUser: AuthUser, onboarding: OnboardingFieldsType) {
      return Prisma.validator<Prisma.GoldUserCreateInput>()({
        companyName: onboarding.companyName,
        primaryTelephone: onboarding.primaryTelephone,
        user: {
          create: {
            authId: authUser.id,
            id: authUser.id,
            email: authUser.email as string,
            fullname: onboarding.user.fullname,
            primaryAddress: onboarding.user.primaryAddress,
            accountType: onboarding.user.accountType,
            website: {
              create: {
                ...onboarding.website
              }
            }
          }
        }
      })
    },

    async createGoldUser(authUser: AuthUser, onboarding: OnboardingFieldsType) {
      const result = GoldUserOnboardingSchema.safeParse(onboarding);

      if (!result.success) {
        const { fields, errors } = errorFields<GoldUserProfileActionData>(result.error.flatten());
        return {
          fields,
          errors
        }
      }

      const goldUser = await prismaGoldUser.create({
        data: this.createGoldUserAccount(authUser, onboarding),
        include: {
          user: true
        }
      });

      return { user: goldUser }
    },

    async goldUsers() {
      return await prismaGoldUser.findMany({});
    },

    async goldUser(userId: string) {
      return await prismaGoldUser.findUnique({
        where: {
          userId
        }
      })
    }

  })
}

export default GoldUsers;