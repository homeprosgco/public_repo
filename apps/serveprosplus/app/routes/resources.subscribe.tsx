import {
  PushNotification,
  SaveSubscription,
} from "../utils/server/pwa-utils.server";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";

import webPush from "web-push";

export const action: ActionFunction = async ({ request }) => {
  const data = await request.json();
  const subscription = data.subscription;

  SaveSubscription(subscription);

  return { message: "Done" };
};

export const loader: LoaderFunction = async () => {
  if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
    console.log(
      "You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY " +
        "environment variables. You can use the following ones:"
    );
    console.log(webPush.generateVAPIDKeys());
    return null;
  }

  const publicKey = process.env.VAPID_PUBLIC_KEY;

  return new Response(publicKey, {
    status: 202,
    statusText: "Successful Operation",
  });
};
