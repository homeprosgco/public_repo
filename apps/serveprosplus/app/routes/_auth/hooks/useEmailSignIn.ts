import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import { useSupabaseContext } from "../useSupabaseContext"

export const useEmailSignIn = () => {
  const { supabase } = useSupabaseContext();
  const [error, setError] = useState<any>(null);
  const navigate = useNavigate();

  async function handleEmailSignIn({ email, password }: { email: string; password: string; }) {

    if (!email || !password) {
      return;
    }

    const { error, data: { user } } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error);
    }

    return;

  }

  return [
    handleEmailSignIn,
    error
  ]

}