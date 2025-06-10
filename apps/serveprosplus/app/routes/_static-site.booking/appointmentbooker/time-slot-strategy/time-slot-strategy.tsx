import { BookingTimeSlot } from "@prisma/client";
import { TimeSlot } from "../type/TimeSlot";

export default function bookingTimeSlot(
  bookingTimeSlot: BookingTimeSlot
): TimeSlot {
  let timeSlot;

  switch (bookingTimeSlot) {
    case BookingTimeSlot.Early_Morning:
      timeSlot = {
        timeOfDay: "Early Morning",
        timeSlot: "(7am - 9am)",
      };
      break;
    case BookingTimeSlot.Morning:
      timeSlot = {
        timeOfDay: "Morning",
        timeSlot: "(9am - 12pm)",
      };
      break;
    case BookingTimeSlot.Afternoon:
      timeSlot = {
        timeOfDay: "Afternoon",
        timeSlot: "(12pm - 3pm)",
      };
      break;
    case BookingTimeSlot.Late_Afternoon:
      timeSlot = {
        timeOfDay: "Late Afternoon",
        timeSlot: "(3pm - 6pm)",
      };
      break;
  }

  return timeSlot;
}

export function timeSlots() {
  return [BookingTimeSlot.Morning, BookingTimeSlot.Early_Morning, BookingTimeSlot.Afternoon, BookingTimeSlot.Late_Afternoon];
}