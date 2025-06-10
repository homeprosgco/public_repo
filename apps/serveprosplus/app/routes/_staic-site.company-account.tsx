import { Flex, Box, MediaQuery } from "@mantine/core";
import { Outlet, useOutletContext } from "@remix-run/react";
import { SupabaseContext } from "./_auth/useSupabaseContext";

export default function CompanyAccountLayout() {
  const { session, user, supabase } = useOutletContext<SupabaseContext>();
  
  return (
    <>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Flex
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              display: "table-row",
            },
          })}
        >
          <Outlet context={{ supabase, session, user }} />
        </Flex>
      </MediaQuery>
    </>
  );
}
