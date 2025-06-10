import { Prisma, PrismaClient } from "@prisma/client";
import { OnboardingFieldsType } from "~/routes/onboarding/validation/OnboardingFieldsType";
import errorFields from "~/_lib/utils/error-fields";
import { UserProfileActionData } from "../profile/user";
import UserProfileSchema from "../profile/user/validation/UserProfileSchema";
import { OperatingHourFieldsType } from "./profile/validation/operating-hours/OperatingHourFieldsType";
import OperatingHoursValidate from "./profile/validation/operating-hours/OperatingHourValidate";
import { ServiceProviderProfileActionData } from "./profile/validation/ServiceProviderProfileActionData";
import { ServiceProviderProfileFieldsType } from "./profile/validation/ServiceProviderProfileFieldsType";
import ServiceProviderProfileSchema from "./profile/validation/ServiceProviderProfileSchema";
import { AuthUser } from "@supabase/supabase-js";

function ServiceProviders(prismaServiceProvider: PrismaClient['serviceProvider']) {
  return Object.assign(prismaServiceProvider, {

    createServiceProviderAccount(authUser: AuthUser, {user, website, ...rest}: OnboardingFieldsType) {
      return Prisma.validator<Prisma.ServiceProviderCreateInput>()({
        ...rest,
        user: {
          create: {
            authId: authUser.id,
            id: authUser.id,
            email: authUser.email as string,
            ...user,
            website: {
              create: {
                ...website
              }
            }
          },
          
        }
      })
    },

    async createServiceProvider(authUser: AuthUser, onboarding: OnboardingFieldsType) {
      const { user, ...rest} = onboarding;
      const result = ServiceProviderProfileSchema.safeParse(rest)
      const userResult = UserProfileSchema.safeParse(user);

      let errors = {};

      if (!userResult.success) {
        errors = {
          ...errors,
          ...errorFields<UserProfileActionData>(userResult.error.flatten())
        }
      }

      if (!result.success) {
        const { user, ...formErrors } = errorFields<ServiceProviderProfileActionData>(result.error.flatten());
        return {
          fields: onboarding,
          errors: {
            ...errors,
            ...formErrors
          }
        }

      }

      const serviceProvider = await prismaServiceProvider.create({
        data: this.createServiceProviderAccount(authUser, onboarding),
        include: {
          user: true
        }
      });

      return { user: serviceProvider }

    },

    async serviceProvider(userId: string) {
      const serviceProvider = await prismaServiceProvider.findUnique({
        where: {
          userId
        }
      });

      return { serviceProvider };
    },

    async serviceProviders() {
      return await prismaServiceProvider.findMany({});
    },

    async bookings(userId: string) {
      return await prismaServiceProvider.findMany({
        where: {
          userId
        },
        include: {
          serviceProviderBookings: true
        }
      })
    },

    async reviews(userId: string) {
      return await prismaServiceProvider.findMany({
        where: {
          userId
        },
        include: {
          serviceProviderReviews: true
        }
      })
    },

    async operatingHours(userId: string) {
      return await prismaServiceProvider.findMany({
        where: {
          userId
        },
        include: {
          operatingHours: true
        }
      })
    },

    _addOperatingHours(serviceProvideId: string, operatingHours: OperatingHourFieldsType) {
      return Prisma.validator<Prisma.ServiceProviderUpdateArgs>()({
        where: {
          id: serviceProvideId
        },
        data: {
          operatingHours: {
            createMany: {
              data: [...operatingHours]
            }
          }
        }
      });
    },

    async addOperatingHours(serviceProvideId: string, operatingHours: OperatingHourFieldsType) {
      const { fields, errors } = OperatingHoursValidate(operatingHours);

      if (errors)
        return { fields, errors }

      return await prismaServiceProvider.update({
        ...this._addOperatingHours(serviceProvideId, operatingHours)
      })
    },

    async onlineQuotes(userId: string) {
      const quotes = await prismaServiceProvider.findMany({
        where: {
          userId
        },
        include: {
          bookingOnlineQuotes: true
        }
      });

      return { quotes }
    },

    async appointments(userId: string) {
      const appointments = await prismaServiceProvider.findMany({
        where: {
          userId
        },
        include: {
          bookingAppointments: true
        }
      });

      return { appointments }
    },

  })
}

export default ServiceProviders;