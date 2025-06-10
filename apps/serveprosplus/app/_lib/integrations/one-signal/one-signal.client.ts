import OneSignal from 'react-onesignal';
export { OneSignal }

declare global {
  interface Window {
    OneSignal: any[];
  }
}

export default async function runOneSignalProd() {
  await OneSignal.init({
    appId: "dd6177a3-6401-4124-9cd2-691b9dc10b9a",
    requiresUserPrivacyConsent: true,
    persistNotification: false,
    autoResubscribe: true,
    autoRegister: false
  });
}

export function initOneSignalLocal() {
  window.OneSignal = window.OneSignal || [];
  window.OneSignal.push(function () {
    OneSignal.init({
      appId: "557732b9-9ecc-4250-ad71-31edc0c0212b",
      safari_web_id:
        "web.onesignal.auto.24c5a223-602c-4339-a230-554aefc554b5",
      notifyButton: {
        enable: false,
      },
      subdomainName: "serveprosplus",
      allowLocalhostAsSecureOrigin: true,
      persistNotification: false,
      autoRegister: false
    }).then(async () => {
      OneSignal.on("notificationDisplay", function (event) {
        console.log("OneSignal notification displayed:", event);
      });
    })
      .catch((e) => console.log(e))
  })

}

export async function isPushNotificationsEnabled() {
  return await OneSignal.isPushNotificationsEnabled();
}

export async function registerPushNotifications() {
  return await OneSignal.registerForPushNotifications();
}

export async function showSlideDownPrompt() {
  return await OneSignal.showSlidedownPrompt()
}

export async function setUserId(userId: string, userIdAuthHash: string) {
  return await OneSignal.setExternalUserId(userId, userIdAuthHash);
}

export async function setUserEmail(userEmail: string, userIdAuthHash: string, userEmailHash: string) {
  return await OneSignal.setEmail(userEmail, { emailAuthHash: userEmailHash, identifierAuthHash: userIdAuthHash });
}

export async function setUserSmsNumber(userSmsNumber: string, userIdAuthHash: string, userSmsNumberHash: string) {
  return await OneSignal.setSMSNumber(userSmsNumber, { identifierAuthHash: userIdAuthHash })
}
