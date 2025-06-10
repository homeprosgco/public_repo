import { createEmotionCache, MantineProvider } from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";
import {
  json,
  LinksFunction,
  LoaderArgs,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useFetcher,
  useLoaderData,
  useLocation,
  useMatches,
} from "@remix-run/react";
import { theme } from "./theme";
import { createBrowserClient, User } from "@supabase/auth-helpers-remix";
import { useEffect, useState } from "react";
import GoogleMapsLoader from "./_lib/integrations/google-maps/GoogleMapsLoader";
import { MaybeAuthUser, MaybeSession } from "./routes/_auth/useSupabaseContext";
import { getSession, getUser } from "./routes/_auth/supabase.server";
import { Error404Page } from "./client/_shared/error-page/Error404Page";
import { initOneSignalLocal } from "./_lib/integrations/one-signal/one-signal.client";
import { useLocalStorage } from "usehooks-ts";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/icons/android-icon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/icons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/icons/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/icons/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "/icons/apple-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "/icons/apple-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "/icons/apple-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "/icons/apple-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/icons/apple-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/icons/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/icons/apple-icon-180x180.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/icons/apple-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/icons/apple-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "192x192",
      href: "/icons/apple-icon-192x192.png",
    },
    {
      rel: "manifest",
      href: "/resources/manifest.webmanifest",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@300;400;500;600;700&display=swap",
    },
  ];
};

export const loader = async ({ request }: LoaderArgs) => {
  // environment variables may be stored somewhere other than
  // `process.env` in runtimes other than node
  // we need to pipe these Supabase environment variables to the browser
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
  };

  // We can retrieve the session on the server and hand it to the client.
  // This is used to make sure the session is available immediately upon rendering
  const response = new Response();
  let user: MaybeAuthUser = null;
  const session: MaybeSession = await getSession({ request, response });

  if (session) {
    user = await getUser({ request, response });
    console.log("session user id: ", session.user.id);
    if (user) {
      console.log("user id: ", user.id);
    }
  }

  // in order for the set-cookie header to be set,
  // headers must be returned as part of the loader response
  return json(
    {
      env,
      session,
      user,
    },
    {
      headers: response.headers,
    }
  );
};

createEmotionCache({ key: "mantine" });

export default function App() {
  let location = useLocation();
  const fetcher = useFetcher();
  const { env, session, user } = useLoaderData<typeof loader>();
  const [currentLocation, setCurrentLocation] = useLocalStorage(
    "location",
    "/"
  );

  useEffect(() => {
    setCurrentLocation((prevValue: string) => location.pathname);
  }, [location.pathname]);

  let isMount = false;

  useEffect(() => {
    if (!isMount) {
      initOneSignalLocal();
      isMount = true;
    }
  });

  const [supabase] = useState(() =>
    createBrowserClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)
  );

  const serverAccessToken = session?.access_token;

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(session?.user);
      if (session?.access_token !== serverAccessToken) {
        // server and client are out of sync.
        // Remix recalls active loaders after actions complete
        fetcher.submit(null, {
          method: "post",
          action: `/handle-supabase-auth?redirect=${currentLocation}`,
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [serverAccessToken, supabase, fetcher]);

  return (
    <Document>
      <GoogleMapsLoader>
        <Outlet context={{ supabase, session, user }} />
      </GoogleMapsLoader>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          {title ? <title>{title}</title> : null}
          <StylesPlaceholder />
          <Meta />
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <div>
        <h1>There was an error</h1>
        <p>{error.message}</p>
        <hr />
        <p>
          Hey, developer, you should replace this with what you want your users
          to see.
        </p>
      </div>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Error404Page />
    </Document>
  );
}
function registerForPushNotifications(): any {
  throw new Error("Function not implemented.");
}
