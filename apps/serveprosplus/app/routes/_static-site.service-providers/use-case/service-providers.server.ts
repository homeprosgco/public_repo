import { prisma } from "~/_server/prisma/prisma.server"

export const serviceProviders = async () => {
  return await prisma.serviceProvider.findMany({});
}