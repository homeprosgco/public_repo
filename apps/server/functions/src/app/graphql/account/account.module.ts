import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { JobManagerModule } from './job-manager/job-manager.module';
import { SalesManagerModule } from './sales-manager/sales-manager.module';
import { CustomerManagerModule } from './customer-manager/customer-manager.module';
import { AccountResolver } from './account.resolver';

@Module({
  imports: [
    CompanyModule,
    JobManagerModule,
    SalesManagerModule,
    CustomerManagerModule
  ],
  providers: [AccountResolver]
})
export class AccountModule { }
