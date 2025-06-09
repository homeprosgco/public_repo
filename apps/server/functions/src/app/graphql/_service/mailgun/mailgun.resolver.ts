import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { MailgunService } from './mailgun.service';
import { MailgunMessageResult } from '../../../graphql.schema.interface';
import { IHtmlEmailMessage } from 'src/lib/client/mailgun/mailgun';

@Resolver('MailgunMessageResult')
export class MailgunResolver {

  constructor(private emailSvc: MailgunService) { }

  @Mutation()
  async sendHtmlEmailMessage(@Args('input') htmlEmailMessage: IHtmlEmailMessage): Promise<MailgunMessageResult> {
    return this.emailSvc.sendHtmlEmailMessage(htmlEmailMessage)
  }

  // @Mutation()
  // async sendTextEmail(@Args('input') htmlEmailMessage: IHtmlEmailMessage): Promise<MailgunMessageResult> {
  //   return await this.emailSvc.sendTextEmail(htmlEmailMessage);
  // }

  // @Mutation()
  // async sendLinkNewUserInvitationEmail(): Promise<MailgunMessageResult> {
  //   return await this.emailSvc.sendLinkNewUserInvitationEmail();
  // }

  // @Mutation()
  // async sendTestEmail(): Promise<MailgunMessageResult> {
  //   return await this.emailSvc.sendTestEmail();
  // }

}