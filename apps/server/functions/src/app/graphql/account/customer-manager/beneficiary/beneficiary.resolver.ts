import { Resolver, Query, Context } from '@nestjs/graphql';
import { Beneficiary } from '../../../../graphql.schema.interface';
import { ServerContext } from '../../../_interface/server-context.interface';

@Resolver('Beneficiary')
export class BeneficiaryResolver {

  @Query()
  async beneficiaries(@Context() context: ServerContext): Promise<Beneficiary[]> {
    const {data: beneficiaries} = await context.firestore.getDocuments<Beneficiary>(`app/nextstephomerepair/accounts/h02bw1evWPFvgTx3RiPV/beneficiaries`)
    console.log(beneficiaries);
    return beneficiaries;
  }
  
}
