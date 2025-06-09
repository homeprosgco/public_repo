import { BeneficiaryService } from './../../../../../../../../tech1pro/functions/src/app/graphQL/_service/firebase/admin/firestore/beneficiary.service';
import { Module } from '@nestjs/common';
import { BeneficiaryResolver } from './beneficiary.resolver';

@Module({
  providers: [
    BeneficiaryService, BeneficiaryResolver]
})
export class BeneficiaryModule { }
