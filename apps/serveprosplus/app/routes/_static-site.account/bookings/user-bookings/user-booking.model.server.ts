import { Booking, Prisma, PrismaClient, User, UserBooking } from "@prisma/client";
import { BookingActionData, BookingFieldsType } from "~/routes/_static-site.booking/validation";
import BookingSchema from "~/routes/_static-site.booking/validation/BookingSchema";
import BookingValidate from "~/routes/_static-site.booking/validation/BookingValidate";
import errorFields from "~/_lib/utils/error-fields";

function UserBookings(prismaUserBooking: PrismaClient['userBooking']) {

  return Object.assign(prismaUserBooking, {

    isValidUserBooking(user: User, booking: BookingFieldsType) {
      const { preferredBookingDates, bookingImageFolderId, ...rest } = booking;

      if (preferredBookingDates && preferredBookingDates.length && bookingImageFolderId) {
        return Prisma.validator<Prisma.UserBookingCreateInput>()({
          booking: {
            create: {
              ...rest,
              customerName: user.fullname,
              email: user.email,
              preferredBookingDates: {
                createMany: {
                  data: [...preferredBookingDates]
                }
              },
              bookingImageFolderId: {
                create: {
                  id: bookingImageFolderId.id
                }
              }
            }
          },
          user: {
            connect: {
              id: user.id
            }
          }
        })
      }

      if (preferredBookingDates && preferredBookingDates.length) {
        return Prisma.validator<Prisma.UserBookingCreateInput>()({
          booking: {
            create: {
              ...rest,
              customerName: user.fullname,
              email: user.email,
              preferredBookingDates: {
                createMany: {
                  data: [...preferredBookingDates]
                }
              }
            }
          },
          user: {
            connect: {
              id: user.id
            }
          }
        })
      }

      return Prisma.validator<Prisma.UserBookingCreateInput>()({
        booking: {
          create: {
            ...rest,
          }
        },
        user: {
          connect: {
            id: user.id
          }
        }
      })


    },

    async createUserBooking(user: User, bookingFields: BookingFieldsType) {
      const userBooking = await prismaUserBooking.create({
        data: this.isValidUserBooking(user, bookingFields),
        include: {
          user: true
        }
      });

      return { userBooking }

    },

    async userBookings(userId: string) {
      const bookings = await prismaUserBooking.findMany({
        where: {
          userId
        },
        include: {
          booking: {
            include: {
              preferredBookingDates: true,
              bookedProvider: {
                include: {
                  serviceProvider: {
                    include: {
                      serviceProviderReviews: {
                        include: {
                          review: true
                        }
                      },
                      user: {
                        include: {
                          avatarURL: true
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });

      return bookings
    },

    async userBooking(userId: string, bookingId: string) {
      const userBooking: (UserBooking & {
        booking: Booking;
      }) | null = await prismaUserBooking.findUnique({
        where: {
          bookingId_userId: {
            bookingId,
            userId
          }
        },
        include: {
          booking: {
            include: {
              preferredBookingDates: true
            }
          }
        }
      });

      const { booking } = userBooking as (UserBooking & {
        booking: Booking;
      });

      return { booking }


    }

  })

}

export default UserBookings;