import { useSetState } from "@mantine/hooks";
import { useState } from "react";
import { useSupabaseContext } from "../useSupabaseContext"

export const useAccountLogout = () => {
  const { supabase } = useSupabaseContext();
  const [error, setError] = useState<any>(null);

  async function handleLogout() {

    const { error } = await supabase.auth.signOut()

    if (error) {
      setError(error);
    }

    return;

  }

  return [
    handleLogout,
    error
  ]

}