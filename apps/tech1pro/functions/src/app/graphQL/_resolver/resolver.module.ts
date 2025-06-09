import { Module } from '@nestjs/common';
import { ServiceModule } from '../_service/service.module';
import { AccountResolver } from './account.resolver';
import { AuthResolver } from './auth-resolver';
import { BeneficiaryResolver } from './beneficiary.resolver';
import { CustomerResolver } from './customer.resolver';
import { EstimateResolver } from './estimate.resolver';
import { InvoiceResolver } from './invoice.resolver';
import { JobLeadResolver } from './job-lead.resolver';
import { JobResolver } from './job.resolver';
import { ProjectResolver } from './project.resolver';
import { ProposalResolver } from './proposal.resolver';
import { ProspectResolver } from './prospect.resolver';
import { UserProfileResolver } from './user-profile.resolver';

@Module({
  imports: [ServiceModule],
  providers: [
    AccountResolver,
    AuthResolver,
    BeneficiaryResolver,
    CustomerResolver,
    EstimateResolver,
    InvoiceResolver,
    JobResolver,
    JobLeadResolver,
    ProjectResolver,
    ProposalResolver,
    ProspectResolver,
    UserProfileResolver,
  ]
})
export class ResolverModule { }
