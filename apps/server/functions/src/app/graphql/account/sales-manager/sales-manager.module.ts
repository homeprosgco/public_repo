import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { WorkServiceModule } from './work-service/work-service.module';
import { EstimateModule } from './estimate/estimate.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ProposalModule } from './proposal/proposal.module';

@Module({
  imports: [ItemModule, WorkServiceModule, EstimateModule, InvoiceModule, ProposalModule]
})
export class SalesManagerModule {}
