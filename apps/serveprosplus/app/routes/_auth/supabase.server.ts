import { createServerClient as _createServerClient } from '@supabase/auth-helpers-remix';
import { MaybeSession, MaybeUser } from './useSupabaseContext';

export const createServerClient = ({
  request,
  response
}: {
  request: Request;
  response: Response;
}) =>
  _createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    { request, response }
  );

export const getSession = async ({ request, response }: { request: Request; response: Response }): Promise<MaybeSession> => {
  const supabase = createServerClient({ request, response });
  const { data: { session } } = await supabase.auth.getSession();
  return session;
};

export const getUser = async ({ request, response }: { request: Request; response: Response }): Promise<MaybeUser> => {
  const supabase = createServerClient({ request, response });
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export const completeOnboarding = async ({ request, response }: { request: Request; response: Response }): Promise<MaybeUser> => {
  const supabase = createServerClient({ request, response });
  const { data: { user }, error } = await supabase.auth.updateUser({
    data: { onboardingComplete: false }
  });
  return user;
}

export const getStorage = async ({request, response}: { request: Request; response: Response }) => {
  const supabase = createServerClient({request, response});
 return supabase.storage;
}
