import { Resolver, Query, Context } from '@nestjs/graphql';
import { Prospect } from '../../../../graphql.schema.interface';
import { ServerContext } from '../../../_interface/server-context.interface';

@Resolver('Prospect')
export class ProspectResolver {

  @Query()
  async prospects(@Context() context: ServerContext): Promise<Prospect[]> {
    const {data: prospects} = await context.firestore.getDocuments<Prospect>(`app/nextstephomerepair/accounts/h02bw1evWPFvgTx3RiPV/prospects`)
    console.log(prospects);
    return prospects;
  }
  
}
