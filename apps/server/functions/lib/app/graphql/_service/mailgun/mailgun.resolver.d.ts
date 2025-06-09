import { MailgunService } from './mailgun.service';
import { MailgunMessageResult } from '../../../graphql.schema.interface';
import { IHtmlEmailMessage } from 'src/lib/client/mailgun/mailgun';
export declare class MailgunResolver {
    private emailSvc;
    constructor(emailSvc: MailgunService);
    sendHtmlEmailMessage(htmlEmailMessage: IHtmlEmailMessage): Promise<MailgunMessageResult>;
}
