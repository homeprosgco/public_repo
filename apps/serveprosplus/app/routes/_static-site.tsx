import { Box, Flex, MediaQuery, ScrollArea, Transition } from "@mantine/core";
import { Outlet, useLoaderData, useOutletContext } from "@remix-run/react";
import { StaticSiteAppShell } from "~/client/_shared";
import BottomNavBar from "~/client/_shared/BottomNavBar";
import { useViewportSize } from "@mantine/hooks";
import { SupabaseContext } from "./_auth/useSupabaseContext";
import { useEffect, useState } from "react";
import FixedScreen from "~/client/_layouts/FixedScreen";
import { json, LoaderArgs, redirect } from "@remix-run/node";
import { getUser } from "./_auth/supabase.server";
import { User } from "@prisma/client";
import { findUser } from "./_static-site.account/profile/use-case/find-user.server";

export async function loader({ request }: LoaderArgs) {
  const response = new Response();
  let authuser = await getUser({ request, response });

  if (authuser) {
    const { user: appUser } = await findUser('32e3e7d6-1bfd-4280-b579-25403d63cf09');
    return json({ appUser });
  }

  return { appUser: null };
}

type LoaderType = Awaited<ReturnType<typeof loader>>;

export default function StaticSiteLayout() {
  const { session, user, supabase } = useOutletContext<SupabaseContext>();
  const { height } = useViewportSize();
  const [opened, setOpened] = useState(false);
  const { appUser } = useLoaderData<typeof loader>() as {
    appUser: User | null;
  };

  useEffect(() => setOpened(true), []);

  return (
    <>
      {/* <UnderConstruction /> */}
      {appUser ? (
        <>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Box>
              <Transition
                mounted={opened}
                transition="fade"
                duration={500}
                timingFunction="ease"
              >
                {(styles) => (
                  <div style={{ ...styles }}>
                    <FixedScreen id="mobile-outlet" padding="0px">
                      <Flex
                        id="mobile-layout"
                        direction="column"
                        h={height - 50}
                        pb={8}
                      >
                        <Box id="mobile-content" sx={{ flex: "1 0 auto" }}>
                          <ScrollArea.Autosize
                            maxHeight={height - 60}
                            type="never"
                          >
                            <Outlet context={{ supabase, session, user }} />
                          </ScrollArea.Autosize>
                        </Box>
                        <Flex sx={{ flexBasis: "content" }}>
                          <BottomNavBar user={appUser} />
                        </Flex>
                      </Flex>
                    </FixedScreen>
                  </div>
                )}
              </Transition>
            </Box>
          </MediaQuery>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Box>
              <StaticSiteAppShell user={session ? session.user : null}>
                <Outlet context={{ supabase, session, user }} />
              </StaticSiteAppShell>
            </Box>
          </MediaQuery>
        </>
      ) : (
        <StaticSiteAppShell user={session ? session.user : null}>
          <Outlet context={{ supabase, session, user }} />
        </StaticSiteAppShell>
      )}
    </>
  );
}
