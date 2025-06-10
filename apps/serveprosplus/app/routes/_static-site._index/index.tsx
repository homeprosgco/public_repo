import { MediaQuery } from "@mantine/core";
import { AccountType, User } from "@prisma/client";
import { LoaderArgs } from "@remix-run/node";
import { useLoaderData, useLocation, useMatches } from "@remix-run/react";
import { getUser } from "../_auth/supabase.server";
import { findUser } from "../_static-site.account/profile/use-case/find-user.server";
import Homepage from "../_static-site/homepage/Homepage";
import MobileHomePage from "../_static-site/mobile/MobileHomepage";
import MobileServiceProviderHomePage from "../_static-site/mobile/MobileServiceProviderHomepage";

export async function loader({ request }: LoaderArgs) {
  const response = new Response();
  let authuser = await getUser({ request, response });
  let user: User | null = null;

  if (authuser) {
    try {
      let { user } = await findUser('32e3e7d6-1bfd-4280-b579-25403d63cf09');
      if (user) {
        user = user as User;
        return { user };
      }
      return { user };
    } catch (error) {
      return { user };
    }
  }
  return { user };
}

type LoaderType = Awaited<ReturnType<typeof loader>>;

// show different mobile view based on user account type - service provider view
export default function Index() {
  const {user} = useLoaderData<typeof loader>() as LoaderType;
  console.log(user);

  return (
    <>
      {user ? (
        <>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <div>
              {user.accountType === AccountType.Service_Provider ? (
                <MobileServiceProviderHomePage />
              ) : (
                <MobileHomePage user={user} />
              )}
            </div>
          </MediaQuery>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <div>
              <Homepage />
            </div>
          </MediaQuery>
        </>
      ) : (
        <Homepage />
      )}
    </>
  );
}
