import { prisma } from "~/_server/prisma/prisma.server"

export const favoriteServiceProviders = async (userId: string) => {
  const providers = await prisma.favoriteServiceProvider.findMany({
    where: {
      userId
    }
  });
  return { providers }
}