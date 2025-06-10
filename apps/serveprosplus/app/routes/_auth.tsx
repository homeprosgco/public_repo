import { Outlet, useOutletContext } from "@remix-run/react";

export default function AuthLayout() {
  const { supabase } = useOutletContext<any>();

  return <Outlet context={{ supabase }} />;
}
