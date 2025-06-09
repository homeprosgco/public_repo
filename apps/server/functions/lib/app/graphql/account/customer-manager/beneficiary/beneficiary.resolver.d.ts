import { Beneficiary } from '../../../../graphql.schema.interface';
import { ServerContext } from '../../../_interface/server-context.interface';
export declare class BeneficiaryResolver {
    beneficiaries(context: ServerContext): Promise<Beneficiary[]>;
}
