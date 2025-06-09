import { Prospect } from '../../../../graphql.schema.interface';
import { ServerContext } from '../../../_interface/server-context.interface';
export declare class ProspectResolver {
    prospects(context: ServerContext): Promise<Prospect[]>;
}
