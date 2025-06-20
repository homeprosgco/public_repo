import { ClientProvider } from "@mantine/remix";
import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <ClientProvider>
          <RemixBrowser />
        </ClientProvider>
      </StrictMode>
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // we will register it after the page complete the load
    navigator.serviceWorker.register("/OneSignalSDKWorker.js");
  });
}

// if ('serviceWorker' in navigator) {

//   navigator.serviceWorker.getRegistrations().then(function(registrations) {

//   for(let registration of registrations) {

//           registration.unregister()

//   }}).catch(function(err) {

//       console.log('Service Worker registration failed: ', err);

//   });
// }

// if ("serviceWorker" in navigator) {
//   // Use the window load event to keep the page load performant
//   async function loadSW() {
//     console.log("loaded");

//     return navigator.serviceWorker
//       .register("/entry.worker.js", { type: "module" })
//       .then(() => navigator.serviceWorker.ready)
//       .then(() => {
//         if (navigator.serviceWorker.controller) {
//           navigator.serviceWorker.controller.postMessage({
//             type: "SYNC_REMIX_MANIFEST",
//             manifest: window.__remixManifest,
//           });
//         } else {
//           navigator.serviceWorker.addEventListener("controllerchange", () => {
//             navigator.serviceWorker.controller?.postMessage({
//               type: "SYNC_REMIX_MANIFEST",
//               manifest: window.__remixManifest,
//             });
//           });
//         }
//       })
//       .catch((error) => {
//         console.error("Service worker registration failed", error);
//       });
//   }

//   if (
//     document.readyState === "complete" ||
//     document.readyState === "interactive"
//   ) {
//     loadSW();
//   } else {
//     window.addEventListener("load", loadSW);
//   }
// }
// function urlBase64ToUint8Array(base64String: string): Uint8Array {
//   const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding)
//     .replace(/\-/g, "+")
//     .replace(/_/g, "/");

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (var i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }

// navigator.serviceWorker.ready
//   .then((registration) => {
//     const subscription = registration.pushManager.getSubscription();
//     return { subscription, registration };
//   })
//   .then(async (sub) => {
//     if (await sub.subscription) {
//       return sub.subscription;
//     }

//     const subInfo = await fetch("/resources/subscribe");
//     const returnedSubscription = await subInfo.text();

//     const convertedVapidKey = urlBase64ToUint8Array(returnedSubscription);
//     return sub.registration.pushManager.subscribe({
//       userVisibleOnly: true,
//       applicationServerKey: convertedVapidKey,
//     });
//   })
//   .then(async (subscription) => {
//     await fetch("./resources/subscribe", {
//       method: "POST",
//       body: JSON.stringify({
//         subscription: subscription,
//         type: "POST_SUBSCRIPTION",
//       }),
//     });
//   });
