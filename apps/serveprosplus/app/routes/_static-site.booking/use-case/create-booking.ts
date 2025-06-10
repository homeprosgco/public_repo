import { Prisma, PrismaClient, User } from "@prisma/client";
import BookingModel from "../booking.model.server";
import { BookingFieldsType } from "../validation";

export const createBooking = async (bookingFields: BookingFieldsType, prisma: PrismaClient) => {
  const { booking } = await BookingModel(prisma.booking).createBooking(bookingFields);
  return { booking }
}

export type Booking = Prisma.PromiseReturnType<typeof createBooking>