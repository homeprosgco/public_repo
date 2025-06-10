import { Prisma } from "@prisma/client";
import { serviceProviderSchema, userSchema } from "prisma/zod";
import { z } from "zod";
import { serviceProviderUserData } from "~/_lib/integrations/faker/serviceProviderUserData";
import { inferSafeParseErrors } from "~/_lib/utils";
import { prisma } from "~/_server/prisma/prisma.server";

const ServiceProviderFields = serviceProviderSchema.pick({
  companyBio: true,
  companyName: true,
  primaryTelephone: true,
  serviceCategories: true,
}).extend({
  user: userSchema.pick({
    fullname: true,
    primaryAddress: true,
    accountType: true,
  })
});

type ServiceProviderFields = z.infer<typeof ServiceProviderFields>;
type ServiceProviderFieldsErrors = inferSafeParseErrors<typeof ServiceProviderFields>;
type ServiceProviderActionData = {
  fields: ServiceProviderFields;
  errors?: ServiceProviderFieldsErrors;
}

type ServiceProviderFieldsType = ReturnType<typeof serviceProviderUserData>

function serviceProviderValidator(fields: ServiceProviderFieldsType) {
  const { user, ...rest } = fields;

  return Prisma.validator<Prisma.ServiceProviderCreateArgs>()({
    data: {
      ...rest,
      user: {
        create: {
          ...user,
          website: {
            create: {
              websiteURL: user.website.websiteURL
            }
          }
        }
      }
    }
  });
}

export const createServiceProvider = async (fields: ServiceProviderFieldsType) => {
  const result = ServiceProviderFields.safeParse(fields);

  if (!result.success) {
    return { fields, errors: result.error.flatten() }
  } else {
    const validServiceProvider = serviceProviderValidator(fields);
    const serviceProvider = await prisma.serviceProvider.create(validServiceProvider);
    return { serviceProvider };
  }
}

