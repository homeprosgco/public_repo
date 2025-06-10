import { Prisma, PrismaClient } from "@prisma/client";
import { User } from "@supabase/supabase-js";
import UserBookings from "../user-booking.model.server";

export const userBookings = async (user: User, prisma: PrismaClient) => {
  const bookings = await UserBookings(prisma.userBooking).userBookings(user.id);
  return { bookings }
}

export type UserBookings = Prisma.PromiseReturnType<typeof userBookings>