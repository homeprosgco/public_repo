import { AccountProfile } from '../../graphql.schema.interface';
import { DatasourceService } from '../_service/firebase/firestore/datasource/_datasource.service';
export declare class AccountService {
    private datasource;
    create: any[];
    constructor(datasource: DatasourceService);
    addCreationEntities(...entities: any[]): void;
    createAll(): Promise<unknown[]>;
    accountIds(): Promise<string[]>;
    accounts(): Promise<({
        id: string;
    } & AccountProfile)[]>;
    getById(accountId: string): Promise<{
        id: string;
    } & AccountProfile>;
    getAccountUsers(accountId: string): Promise<string[]>;
    forEach<T>(cb: (accountId: string) => Promise<T[]>): Promise<T[]>;
}
