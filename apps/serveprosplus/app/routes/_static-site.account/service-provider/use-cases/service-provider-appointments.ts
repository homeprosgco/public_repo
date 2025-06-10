import { PrismaClient, User } from "@prisma/client";
import ServiceProviders from "../service-provider.model.server";

export const serviceProviderAppointments = async (user: User, prisma: PrismaClient) => {
  const { appointments } = await ServiceProviders(prisma.serviceProvider).appointments(user.id);
  return { appointments }
}