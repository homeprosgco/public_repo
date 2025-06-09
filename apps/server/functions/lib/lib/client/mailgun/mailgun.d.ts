import { MessagesSendResult } from "mailgun.js/interfaces/Messages";
export { MessagesSendResult };
export interface IHtmlEmailMessage {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}
export declare const sendHtmlEmailMessage: (htmlEmailMessage: IHtmlEmailMessage) => Promise<MessagesSendResult>;
