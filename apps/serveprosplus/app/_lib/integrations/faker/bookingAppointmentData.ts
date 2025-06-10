import { faker } from "@faker-js/faker"
import { BookingTimeSlot } from "@prisma/client"

export const bookingAppointmentData = (preferredBookingDate: Date, bookingTimeslots: BookingTimeSlot[]) => {
  return {
    appointmentDate: preferredBookingDate,
    comment: faker.lorem.paragraph(),
    startingPrice: faker.commerce.price(49, 599),
    timeSlots: faker.helpers.arrayElements(bookingTimeslots, 1)
  }
}