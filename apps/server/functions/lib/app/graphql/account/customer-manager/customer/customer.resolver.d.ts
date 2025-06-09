import { Customer } from '../../../../graphql.schema.interface';
import { ServerContext } from '../../../_interface/server-context.interface';
export declare class CustomerResolver {
    customers(context: ServerContext): Promise<Customer[]>;
}
