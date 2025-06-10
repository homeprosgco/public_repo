import { PrismaClient } from "@prisma/client"
import { User } from "@supabase/auth-helpers-remix"
import Users from "../user.model.server"

export const findUser = async (authUser: User, prisma: PrismaClient) => {
  const { user } = await Users(prisma.user).user(authUser.id);
  return { user }
}