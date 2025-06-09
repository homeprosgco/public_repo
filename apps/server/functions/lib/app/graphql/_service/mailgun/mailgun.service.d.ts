import { MessagesSendResult } from 'mailgun.js/interfaces/Messages';
import { IHtmlEmailMessage } from '../../../../lib/client/mailgun/mailgun';
export declare class MailgunService {
    sendHtmlEmailMessage(htmlEmailMessage: IHtmlEmailMessage): Promise<MessagesSendResult>;
}
