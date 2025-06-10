import { Prisma, PrismaClient, User } from "@prisma/client";
import { BookingFieldsType } from "~/routes/_static-site.booking/validation";
import UserBookings from "../user-booking.model.server";

export const createUserBooking = async (user: User, booking: BookingFieldsType, prisma: PrismaClient) => {
  const { userBooking, fields, errors } = await UserBookings(prisma.userBooking).createUserBooking(user, booking);
  return { userBooking, fields, errors }
}

export type UserBooking = Prisma.PromiseReturnType<typeof createUserBooking>