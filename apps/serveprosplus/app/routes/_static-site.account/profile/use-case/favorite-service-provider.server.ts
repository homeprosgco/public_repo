import { prisma } from "~/_server/prisma/prisma.server"

export const favoriteServiceProvider = async (userId: string, serviceProviderId: string) => {
  const favorited = prisma.favoriteServiceProvider.create({
    data: {
      userId,
      serviceProviderId
    }
  });

  return { favorited }
}