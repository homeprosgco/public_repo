import { ProspectReview, ServiceProviderProspect } from "@prisma/client";
import { Prisma, prisma } from "~/_server/prisma/prisma.server";

export type CompleteProspect = Prisma.PromiseReturnType<typeof prospectById>;

export const prospectById = async (prospectId: string) => {
  const prospect = await prisma.serviceProviderProspect.findUnique({
    where: {
      id: prospectId
    },
    include: {
      prospectReviews: true
    }
  });

  return prospect as (ServiceProviderProspect & {
    prospectReviews: ProspectReview[];
})
}