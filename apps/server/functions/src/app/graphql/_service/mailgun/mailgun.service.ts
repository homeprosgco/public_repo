import { Injectable } from '@nestjs/common';
import { MessagesSendResult } from 'mailgun.js/interfaces/Messages';
import { IHtmlEmailMessage, sendHtmlEmailMessage } from '../../../../lib/client/mailgun/mailgun';


@Injectable()
export class MailgunService {

  async sendHtmlEmailMessage(htmlEmailMessage: IHtmlEmailMessage): Promise<MessagesSendResult> {
    return await sendHtmlEmailMessage(htmlEmailMessage);
  }

  // async sendTextEmail(htmlEmailMessage: IHtmlEmailMessage): Promise<MessagesSendResult> {
  //   return await sendTextEmail(htmlEmailMessage);
  // }

  // async sendLinkNewUserInvitationEmail(): Promise<MessagesSendResult> {
  //   return await sendLinkNewUserInvitationEmail();
  // }

  // async sendTestEmail(): Promise<MessagesSendResult> {
  //   return await sendTestEmail();
  // }
  
}
