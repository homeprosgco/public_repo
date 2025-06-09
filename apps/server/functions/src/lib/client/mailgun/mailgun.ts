import Mailgun from "mailgun.js";
import FormData from 'form-data';
import { MessagesSendResult } from "mailgun.js/interfaces/Messages";
export { MessagesSendResult };

export interface IHtmlEmailMessage {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({ username: 'api', key: '4e64c1a5bea4c38079c567bac3060cf4-c4d287b4-a140a392' });
// const DOMAIN = "mail.tech1-pro.com";
const SANDBOX = "sandbox225bfe7955454b8dbf71b48303761a5b.mailgun.org";

export const sendHtmlEmailMessage = async (htmlEmailMessage: IHtmlEmailMessage): Promise<MessagesSendResult> => {
  const { from, to, subject, text, html } = htmlEmailMessage;
  return await mg.messages.create(SANDBOX, { from, to, subject, text, html });
}