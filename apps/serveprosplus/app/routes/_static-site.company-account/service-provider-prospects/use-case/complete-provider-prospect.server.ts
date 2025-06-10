import { Prisma, prisma } from "~/_server/prisma/prisma.server"

export type CompleteProviderProspect = Prisma.PromiseReturnType<typeof completeProviderProspect>;

export const completeProviderProspect = async (prospectId: string) => {
  const prospect = await prisma.serviceProviderProspect.findUnique({
    where: {
      id: prospectId
    },
    include: {
      prospectReviews: true
    }
  });

  return { ...prospect }
}