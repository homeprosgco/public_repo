import { AuthUserResponse, AuthUserInput, NewAccountUserInput, CreateUserTokenInput } from '../../graphql.schema.interface';
import { ServerContext } from '../_interface/server-context.interface';
export declare class AuthResolver {
    authUserResponse(): AuthUserResponse;
    registerAuthUser({ email, password }: AuthUserInput, context: any): Promise<any>;
    signinAuthUser({ email, password }: AuthUserInput, context: any): Promise<any>;
    registerAccountUser({ email, password, accountId }: NewAccountUserInput, ctx: any): Promise<any>;
    createUserToken({ userId, accountId }: CreateUserTokenInput, ctx: ServerContext): Promise<{
        token: string;
    }>;
}
