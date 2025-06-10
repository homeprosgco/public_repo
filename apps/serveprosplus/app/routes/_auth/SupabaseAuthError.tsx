import { AuthError as _AuthError } from "@supabase/supabase-js";

type AuthErrorProps = {
  error: _AuthError | null;
};

export default function SupabaseAuthError({ error }: AuthErrorProps) {
  return <>{error ? <div>{error?.message}</div> : <div> </div>}</>;
}
