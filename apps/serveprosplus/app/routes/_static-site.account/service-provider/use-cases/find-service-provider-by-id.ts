import { PrismaClient, User } from "@prisma/client"
import ServiceProviders from "../service-provider.model.server"

export const findServiceProviderById = async (user: User, prisma: PrismaClient) => {
  const { serviceProvider } = await ServiceProviders(prisma.serviceProvider).serviceProvider(user.id);
  return { serviceProvider }
}