import { Prisma, ServiceCategory } from "@prisma/client"
import { prisma } from "~/_server/prisma/prisma.server";

export type CategorizedProspects = Prisma.PromiseReturnType<typeof providerProspectsByServiceCategory>;

export const providerProspectsByServiceCategory = async (serviceCategories: ServiceCategory[]) => {
  const prospects = await prisma.serviceProviderProspect.findMany({
    where: {
      serviceCategories: {
        hasSome: serviceCategories
      }
    },
    include: {
      prospectReviews: true
    }
  });
  return { prospects }
}