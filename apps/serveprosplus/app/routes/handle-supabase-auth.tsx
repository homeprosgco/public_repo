// this is used to tell Remix to call active loaders

import { ActionArgs, redirect } from "@remix-run/node";
import { getUser } from "./_auth/supabase.server";
import { MaybeAuthUser } from "./_auth/useSupabaseContext";
import { findUser } from "./_static-site.account/profile/use-case/find-user.server";

// after a user signs in or out
export const action = async ({ request }: ActionArgs) => {
  const response = new Response();
  const _user = await getUser({ request, response });
  if (_user) {
    const { user } = await findUser(_user.id);
    if (!user) return redirect("/onboarding");
  }
  const url = new URL(request.url);
  const currentLocation = url.searchParams.get("redirect") as string;
  console.log(currentLocation);
  return redirect(currentLocation);
};
