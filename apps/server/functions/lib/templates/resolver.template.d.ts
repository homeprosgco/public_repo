import { ServerContext } from '../app/graphql/_interface/server-context.interface';
export declare class AuthResolver {
    authUserResponse(ctx: ServerContext): ServerContext;
    registerAuthUser(input: any, ctx: ServerContext): Promise<ServerContext>;
    signinAuthUser(ctx: ServerContext): Promise<ServerContext>;
    registerAccountUser(ctx: ServerContext): Promise<ServerContext>;
    createUserToken(ctx: ServerContext): Promise<ServerContext>;
}
