import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUser } from "~/routes/_auth/supabase.server";
import avatar1 from "~/_images/demo/avatar-1.jpg";
import avatar2 from "~/_images/demo/avatar2.jpeg";
import avatar3 from "~/_images/demo/avatar3.jpeg";
import avatar4 from "~/_images/demo/avatar4.jpeg";
import { prisma } from "~/_server/prisma/prisma.server";
import BookingsMobile from "../bookings/BookingsMobile";
import {
  UserBookings,
  userBookings,
} from "../bookings/user-bookings/use-cases/user-bookings";

export async function loader({ request }: LoaderArgs) {
  const response = new Response();
  let authuser = await getUser({ request, response });

  if (!authuser) return;

  try {
    const bookings = await userBookings(authuser, prisma);
    console.log(bookings);
    return bookings;
  } catch (error) {
    return [];
  }
}

export default function BookingsRoute() {
  const bookings = useLoaderData<typeof loader>() as unknown as UserBookings;

  const appointments: any[] = [
    {
      appointmentId: "473822",
      companyName: "Mike's Plumbing",
      timeSlot: "8:30 - 10:30 AM",
      date: "Jan 20 2023",
      status: "submitted",
      startingPrice: "229",
      providerAvatarURL: avatar1,
      providerName: "Mike Williams",
      providerRating: "4.8",
      providerRatingCount: "33",
    },
    {
      appointmentId: "093732",
      companyName: "Mike's Plumbing",
      timeSlot: "2:30 - 2:30 PM",
      date: "Feb 1 2023",
      status: "cancelled",
      startingPrice: "289",
      providerAvatarURL: avatar2,
      providerName: "Mike Williams",
      providerRating: "5.0",
      providerRatingCount: "74",
    },
    {
      appointmentId: "320952",
      companyName: "Mike's Plumbing",
      timeSlot: "9:00 - 11:00 AM",
      date: "Jan 18 2023",
      status: "ongoing",
      startingPrice: "99",
      providerAvatarURL: avatar3,
      providerName: "Mike Williams",
      providerRating: "4.8",
      providerRatingCount: "4",
    },
    {
      appointmentId: "204963",
      companyName: "Mike's Plumbing",
      timeSlot: "2:30 - 4:30 PM",
      date: "Jan 29 2023",
      status: "completed",
      startingPrice: "59",
      providerAvatarURL: avatar4,
      providerName: "Mike Williams",
      providerRating: "4.1",
      providerRatingCount: "174",
    },
  ];

  return (
    <>
      <BookingsMobile userBookings={bookings} />
    </>
  );
}
