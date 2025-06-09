import { Global, Module } from '@nestjs/common';
import { FirestoreService } from './firebase/firestore/firestore.service';
import { MailgunResolver } from './mailgun/mailgun.resolver';
import { MailgunService } from './mailgun/mailgun.service';

@Global()
@Module({
  providers: [MailgunService, MailgunResolver, FirestoreService],
  exports: [
    MailgunService,
    FirestoreService
  ]
})
export class ServiceModule {}
