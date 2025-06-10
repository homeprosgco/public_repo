// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

import Twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const myTwilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER!;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_ID;

if (!accountSid || !authToken || !myTwilioPhoneNumber) throw new Error('Missing twilio accountSid/authToken/phoneNumber env variable');

const client = Twilio(accountSid, authToken);

export type SmsMessage = {
  body: string;
  to: string;
};

export const sendSmsMessage = async ({ body, to }: SmsMessage) => {
  if (!to.startsWith('+')) {
    to = '+' + to;
  }
  const message = await client.messages.create({ body, to, messagingServiceSid });
  return message.sid;
}

(async () => sendSmsMessage({ body: 'This is the ship that made the Kessel Run in fourteen parsecs?', to: "15616008201" }))()