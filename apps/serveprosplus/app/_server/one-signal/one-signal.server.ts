import * as OneSignal from "@onesignal/node-onesignal";

const client = () => {
  return new OneSignal.DefaultApi(
    OneSignal.createConfiguration({
      authMethods: {
        app_key: {
          tokenProvider: {
            getToken() {
              return process.env.ONESIGNAL_REST_API_KEY as string;
            },
          },
        },
      },
    })
  );
}

const createContent = (notification: OneSignal.Notification) => {

}

export const createNotification = () => {
  const notification = new OneSignal.Notification();
  notification.app_id = process.env.ONESIGNAL_APP_ID as string;
  return notification;
}

export const createPushNotificationContent = (content: OneSignal.StringMap) => {
  const notification =  createNotification();
  notification.contents = content;
}

export const sendEmail = async (userIds: string[], emailBody: string) => {
  const notification = createEmailNotificationContent(userIds, emailBody);
  return await sendNotification(userIds, notification);
}

export const createEmailNotificationContent = (userIds: string[], emailBody: string) => {
  const notification =  createNotification();
  notification.email_body = emailBody;
  return notification;
}

export const sendNotification = async (userIds: string[], notification: OneSignal.Notification) => {
  notification.include_external_user_ids = userIds;
  setTimeout(async () => {
    const data = await client().createNotification(notification);
    console.log(data);
  }, 8000);
}

