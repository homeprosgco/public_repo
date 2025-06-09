import { CompanyProfile } from "../../../../../../graphql.schema.interface";
import { DatasourceService } from "../_datasource.service";
export declare class CompanyProfileService {
    private datasource;
    collectionName: string;
    constructor(datasource: DatasourceService);
    collectionPath(accountId: string): string;
    getCompanyProfile(accountId: string): Promise<{
        id: string;
    } & CompanyProfile>;
    createIndividual(accountId: string): Promise<Promise<{
        id: string;
    }>[]>;
    getAllByAccountId(accountId: string): Promise<({
        id: string;
    } & CompanyProfile)[]>;
    getAllCompanyIds(accountId: string): Promise<string[]>;
    deleteIndividual(accountId: string): Promise<FirebaseFirestore.WriteResult[]>;
}
