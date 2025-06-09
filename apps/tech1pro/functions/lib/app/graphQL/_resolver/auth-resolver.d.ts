import { AuthUserEmailInput, AuthUserInput, CreateUserInput, Token } from '@graphql-schema/*';
import { ServerContext } from '../_interface/server-context.interface';
export declare class AuthResolver {
    constructor();
    createUser(createUserInput: CreateUserInput, ctx: ServerContext): Promise<Token>;
    registerAuthUser(authUserInput: AuthUserInput, ctx: ServerContext): Promise<{
        status: string;
        operationType: string;
        operationResult: string;
        statusCode: number;
        idToken: string;
    }>;
    authUserCustomSigninToken(authUserEmailInput: AuthUserEmailInput, ctx: ServerContext): Promise<{
        token: string;
    }>;
    seedAuthUsers(ctx: ServerContext): Promise<{
        status: string;
        operationType: string;
        operationResult: string;
        statusCode: number;
        idToken: string;
    }[]>;
}
