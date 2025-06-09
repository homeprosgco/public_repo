import { ServerContext } from '../_interface/server-context.interface';
export declare class AccountResolver {
    account(ctx: ServerContext): Promise<{
        id: string;
    } & import("../../graphql.schema.interface").AccountProfile>;
    registerAuthUser(input: any, ctx: ServerContext): Promise<ServerContext>;
    signinAuthUser(ctx: ServerContext): Promise<ServerContext>;
    registerAccountUser(ctx: ServerContext): Promise<ServerContext>;
    createUserToken(ctx: ServerContext): Promise<ServerContext>;
}
