import { prisma } from "~/_server/prisma/prisma.server"

export const unfavoriteServiceProvider = async (favoriteId: string) => {
  const unfavorite = await prisma.serviceProvider.delete({
    where: {
      id: favoriteId
    }
  });

  return { unfavorite }
}