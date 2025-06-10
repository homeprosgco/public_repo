import { useState } from "react";
import { useSupabaseContext } from "../useSupabaseContext";

export const useGoogleSignIn = () => {
  const { supabase } = useSupabaseContext();
  const [error, setError] = useState<any>(null);

  async function handleGoogleSignIn() {

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    })

    if (error) {
      setError(error);
    }

    return;

  }

  return [
    handleGoogleSignIn,
    error
  ]

}