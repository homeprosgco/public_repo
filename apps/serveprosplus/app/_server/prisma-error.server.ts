import { Prisma } from "@prisma/client";

export const prismaError = (e: unknown) => {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    const { code, message } = e;
    return { code, message };
  }
  throw e;
}