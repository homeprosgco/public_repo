import { BookingTimeSlot } from "@prisma/client";

export interface TimeSlot {
  timeOfDay: string;
  timeSlot: string;
  bookingTimeslot: BookingTimeSlot
}