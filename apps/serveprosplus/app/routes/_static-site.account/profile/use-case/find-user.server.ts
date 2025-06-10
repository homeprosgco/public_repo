import { User } from "@prisma/client";
import { prisma } from "~/_server/prisma/prisma.server";

export const findUser = async (authUserId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: authUserId
    }
  }) as User;
  return { user }
}