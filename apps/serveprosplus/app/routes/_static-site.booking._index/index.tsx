import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";
import { getSession, getUser } from "../_auth/supabase.server";
import BookingMultiStepForm from "../_static-site.booking/BookingMultiStepForm";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import {
  MaybeAuthUser,
  MaybeSession,
  SupabaseContext,
} from "../_auth/useSupabaseContext";
import { User } from "@prisma/client";
import { findUser } from "../_static-site.account/profile/use-case/find-user.server";
import { createUserBooking } from "../_static-site.account/profile/use-case/create-user-booking.server";
import { createBooking } from "../_static-site.booking/use-cases/create-booking.server";

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const url = new URL(request.url);
  const serviceCategory = url.searchParams.get("category");

  let user: MaybeAuthUser = null;
  let appUser: User | null = null;
  const session: MaybeSession = await getSession({ request, response });

  if (session) {
    user = await getUser({ request, response });
    if (user) {
      const data = await findUser(user.id);
      appUser = data.user;
    }
  }

  if (serviceCategory) {
    return {
      appUser,
      serviceCategory,
    };
  }

  return { appUser };
};

export const action = async ({ request }: ActionArgs) => {
  const response = new Response();
  const formData = await request.formData();
  const bookingFields = JSON.parse(formData.get("bookingFields") as string);

  const authuser = await getUser({ request, response });
  // let user: User | null = null;

  if (authuser) {
    let { user } = await findUser(authuser.id);

    if (user) {
      let { fields, errors } = await createUserBooking(user.id, bookingFields);

      if (errors) {
        return { fields, errors };
      }
      return redirect("/booking");
    }
  } else {
    let { fields, errors } = await createBooking(bookingFields);

    if (errors) {
      return { fields, errors };
    }
    return redirect("/booking");
  }
};

export default function BookingRoute() {
  const { supabase } = useOutletContext<SupabaseContext>();
  const { appUser } = useLoaderData<typeof loader>() as unknown as {
    appUser: User;
  };

  return <BookingMultiStepForm supabase={supabase} user={appUser} />;
}
