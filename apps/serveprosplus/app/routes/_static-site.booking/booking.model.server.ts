import { Booking, BookingResponseType, Prisma, PrismaClient, ServiceCategory } from "@prisma/client";
import { OnlineQuoteFieldsType } from "../_static-site.account/bookings/booking/online-quotes";
import ValidateOnlineQuoteFields from "../_static-site.account/bookings/booking/online-quotes/ValidateOnlineQuote";
import { BookingFieldsType } from "./validation";

function BookingModel(prismaBooking: PrismaClient['booking']) {
  return Object.assign(prismaBooking, {

    _createBooking(booking: BookingFieldsType) {
      const { preferredBookingDates, bookingImageFolderId, ...rest } = booking;

      if (preferredBookingDates && preferredBookingDates.length) {
        return Prisma.validator<Prisma.BookingCreateInput>()({
          ...rest,
          preferredBookingDates: {
            createMany: {
              data: [...preferredBookingDates]
            }
          }
        });
      }

      return Prisma.validator<Prisma.BookingCreateInput>()({
        ...rest,
      });

    },

    async createBooking(bookingFields: BookingFieldsType) {
      // const { fields, errors } = BookingValidate(bookingFields);

      // if (errors) {
      //   return { fields, errors }
      // }

      let booking: Booking;
      // console.log("saved booking: ", fields)
      booking = await prismaBooking.create({
        data: this._createBooking(bookingFields),
        include: {
          preferredBookingDates: true
        }
      });



      return { booking }

    },

    async matchServiceProviderBookings(serviceCategories: ServiceCategory[]) {
      return await prismaBooking.findMany({
        where: {
          bookingCategory: {
            in: serviceCategories
          }
        }
      })
    },

    async bookings() {
      return await prismaBooking.findMany({})
    },

    async bookingById(id: string) {
      return await prismaBooking.findUnique({
        where: {
          id
        }
      })
    },

    async inHomeEstimates() {
      return await prismaBooking.findMany({
        where: {
          bookingType: BookingResponseType.In_Home_Estimate
        }
      })
    },

    async onlineQuotes() {
      return await prismaBooking.findMany({
        where: {
          bookingType: BookingResponseType.Online_Quote
        }
      })
    },

    async addOnlineQuote(bookingId: string, serviceProviderId: string, onlineQuote: OnlineQuoteFieldsType) {
      const { fields, errors } = ValidateOnlineQuoteFields(onlineQuote);

      if (errors) {
        return { fields, errors }
      }

      return await prismaBooking.update({
        where: {
          id: bookingId
        },
        data: {
          bookingOnlineQuotes: {
            create: {
              ...onlineQuote,
              serviceProviderId
            }
          }
        }
      })
    },

  })
}

export default BookingModel;