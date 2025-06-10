import { PrismaClient, User } from "@prisma/client";
import ServiceProviders from "../service-provider.model.server";

export const serviceProviderOnlineQuotes = async (user: User, prisma: PrismaClient) => {
  const { quotes } = await ServiceProviders(prisma.serviceProvider).onlineQuotes(user.id);
  return { quotes }
}