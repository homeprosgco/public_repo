import { useOutletContext } from "@remix-run/react";
import { AuthUser, SupabaseClient, User } from "@supabase/supabase-js";
import type { Session } from "@supabase/auth-helpers-remix";

export type MaybeSession = Session | null;
export type MaybeAuthUser = AuthUser | null;
export type MaybeUser = User | null;

export type SupabaseContext = {
  supabase: SupabaseClient;
  session: MaybeSession;
  authUser: MaybeAuthUser;
  user: MaybeUser;
};

export function useSupabaseContext() {
  return useOutletContext<SupabaseContext>();
}