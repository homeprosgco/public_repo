import { Resolver, Query, Context } from '@nestjs/graphql';
import { Customer } from '../../../../graphql.schema.interface';
import { ServerContext } from '../../../_interface/server-context.interface';

@Resolver('Customer')
export class CustomerResolver {

  @Query()
  async customers(@Context() context: ServerContext): Promise<Customer[]> {
    const {data: customer} = await context.firestore.getDocuments<Customer>(`app/nextstephomerepair/accounts/h02bw1evWPFvgTx3RiPV/customers`)
    console.log(customer);
    return customer;
  }
  
}
