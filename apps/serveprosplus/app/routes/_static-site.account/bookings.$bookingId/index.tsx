import { Booking, User, UserBooking } from "@prisma/client";
import {
  ActionFunction,
  json,
  LoaderArgs,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUser } from "~/routes/_auth/supabase.server";
import { badRequest } from "~/_server/bad-request.server";
import { FormEntries } from "~/_server/form-data-entries.server";
import { prisma } from "~/_server/prisma/prisma.server";
import { OnlineQuoteFieldsType } from "../bookings/booking/online-quotes/OnlineQuoteFieldsType";
import ValidateOnlineQuote from "../bookings/booking/online-quotes/ValidateOnlineQuote";
import BookingDetailsMobile from "../bookings/BookingDetailsMobile";
import { userBookings } from "../bookings/user-bookings/use-cases";
import { userBookingbyId } from "../bookings/user-bookings/use-cases/user-booking-by-id";
import { findUser } from "../profile/user";

export const loader: LoaderFunction = async ({
  request,
  params,
}: LoaderArgs) => {
  const response = new Response();
  const user = await getUser({ request, response });
  let booking: Booking;
  if (user) {
    const bookingId = params.bookingId as string;
    const appUser = (await findUser(user, prisma)) as { user: User };
    booking = (await userBookingbyId(
      appUser.user,
      bookingId,
      prisma
    )) as unknown as Booking;
    console.log(booking)
    return {booking, appUser};
  }

  return redirect("/account/bookings");
};

export const action: ActionFunction = async ({ request, params }) => {
  // start validation
  console.log("bookingId: ", params.bookingId);
  console.log("requestURL: ", request.url);
  const formFields = await FormEntries<OnlineQuoteFieldsType>({ request });
  console.log("fields: ", formFields);

  const { fields, errors } = ValidateOnlineQuote(formFields);

  if (errors) {
    return badRequest({ fields, errors });
  } else {
    // add online quote to database booking using bookingId field
    // return the status of the database write operation
  }

  return json({ fields });
};

export default function BookingDetailsRoute() {
  const data = useLoaderData<typeof loader>();
  const {booking: {booking}, appUser: {user}} = data;

  return <BookingDetailsMobile appUser={user} booking={booking} />;
}
