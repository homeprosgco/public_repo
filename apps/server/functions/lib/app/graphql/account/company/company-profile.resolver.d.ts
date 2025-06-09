import { ServerContext } from '../../_interface/server-context.interface';
export declare class CompanyProfileResolver {
    companyProfile(ctx: ServerContext): Promise<{
        id: string;
    } & import("../../../graphql.schema.interface").CompanyProfile>;
    registerAuthUser(input: any, ctx: ServerContext): Promise<ServerContext>;
    signinAuthUser(ctx: ServerContext): Promise<ServerContext>;
    registerAccountUser(ctx: ServerContext): Promise<ServerContext>;
    createUserToken(ctx: ServerContext): Promise<ServerContext>;
}
