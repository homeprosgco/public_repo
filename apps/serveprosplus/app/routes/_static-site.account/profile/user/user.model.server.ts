import { AccountType, Prisma, PrismaClient } from "@prisma/client";
import { User as AuthUser } from "@supabase/auth-helpers-remix";
import { z } from "zod";
import { OnboardingFieldsType } from "~/routes/onboarding/validation/OnboardingFieldsType";
import errorFields from "~/_lib/utils/error-fields";
import { UserProfileActionData, UserProfileUpdateSchema } from "./validation";
import UserProfileSchema from "./validation/UserProfileSchema";

function Users(prismaUser: PrismaClient['user']) {
  return Object.assign(prismaUser, {

    createUserAccount(authUser: AuthUser, { user }: OnboardingFieldsType) {
      return Prisma.validator<Prisma.UserCreateInput>()({
        authId: authUser.id,
        id: authUser.id,
        email: authUser.email as string,
        ...user
      });
    },

    updateUserAccount(fields: z.infer<typeof UserProfileUpdateSchema>) {
      return Prisma.validator<Prisma.UserUpdateInput>()({ ...fields })
    },

    async createUser(authUser: AuthUser, onboardingFields: OnboardingFieldsType) {
      const result = UserProfileSchema.safeParse(onboardingFields.user);

      if (!result.success) {

        return {
          fields: { ...onboardingFields.user },
          errors: errorFields<UserProfileActionData>(result.error.flatten())
        };
      }

      const user = await prismaUser.create({
        data: this.createUserAccount(authUser, onboardingFields)
      });

      return { user };
    },

    async users() {
      const users = await prismaUser.findMany({});
      return { users }
    },

    async customerUsers() {
      return await prismaUser.findMany({
        where: {
          accountType: {
            in: [AccountType.Homeowner, AccountType.Property_Manager, AccountType.Realtor]
          }
        }
      })
    },

    async customerUsersCount() {
      return await prismaUser.count({
        where: {
          accountType: {
            in: [AccountType.Homeowner, AccountType.Property_Manager, AccountType.Realtor]
          }
        }
      })
    },

    async user(id: string) {
      const user = await prismaUser.findUnique({
        where: {
          id
        }
      });

      return { user }
    },

    async usersWithBookings() {
      return await prismaUser.findMany({
        where: {
          userBookings: {
            some: {}
          }
        },
        include: {
          userBookings: {
            include: {
              booking: true
            }
          }
        }
      })
    },

    async favoriteProviders(id: string) {
      return await prismaUser.findMany({
        where: {
          id
        },
        include: {
          favoriteServiceProviders: true
        }
      })
    },

    async bookings(id: string) {
      const bookings = await prismaUser.findMany({
        where: {
          id
        },
        include: {
          userBookings: {
            include: {
              booking: true
            }
          }
        }
      });

      return bookings
    },

    async addFavoriteServiceProvider(id: string, serviceProviderId: string) {
      return await prismaUser.update({
        where: {
          id
        },
        data: {
          favoriteServiceProviders: {
            connect: {
              id: serviceProviderId
            }
          }
        }
      })
    },

    async removeFavoriteServiceProvider(id: string, serviceProviderId: string) {
      return await prismaUser.update({
        where: {
          id
        },
        data: {
          favoriteServiceProviders: {
            disconnect: {
              id: serviceProviderId
            }
          }
        }
      })
    }

  })
}

export default Users;

