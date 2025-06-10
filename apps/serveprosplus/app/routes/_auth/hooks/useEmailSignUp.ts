import { useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useSupabaseContext } from "../useSupabaseContext";

export const useEmailSignUp = () => {
  const { supabase } = useSupabaseContext();
  const [error, setError] = useState<any>(null);
  const [host, setHost] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    setHost(window.location.host);
  }, [])

  async function handleEmailSignUp({ email, password }: { email: string; password: string; }) {

    if (!email || !password) {
      return;
    }

    const { error, data: user } = await supabase.auth.signUp({
      email, password, options: {
        emailRedirectTo: `${host}/onboarding`
      }
    });

    console.log("Error:", error);
    console.log("Data: ", user);
    if (user) navigate("/email-confirmation", { replace: true });

    if (error) {
      setError(error);
    }

    return;

  }

  return [
    handleEmailSignUp,
    error
  ]

}