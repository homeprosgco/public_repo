import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { BeneficiaryModule } from './beneficiary/beneficiary.module';
import { ProspectModule } from './prospect/prospect.module';

@Module({
  imports: [CustomerModule, BeneficiaryModule, ProspectModule]
})
export class CustomerManagerModule {}
