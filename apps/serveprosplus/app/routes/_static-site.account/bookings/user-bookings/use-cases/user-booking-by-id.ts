import { PrismaClient, User } from "@prisma/client";
import UserBookings from "../user-booking.model.server";

export const userBookingbyId = async (user: User, bookingId: string, prisma: PrismaClient) => {
  const {booking} = await UserBookings(prisma.userBooking).userBooking(user.id, bookingId);
  return { booking }
}