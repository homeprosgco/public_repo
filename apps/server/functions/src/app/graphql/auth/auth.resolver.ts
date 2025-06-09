import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthUserResponse, AuthUserResultOperationType, AuthUserInput, NewAccountUserInput, CreateUserTokenInput } from '../../graphql.schema.interface';
import { ServerContext } from '../_interface/server-context.interface';

@Resolver('AuthUserResponse')
export class AuthResolver {

  @Query()
  authUserResponse(): AuthUserResponse {
    return {
      status: 'ok',
      operationType: AuthUserResultOperationType.REGISTER_AUTH_USER,
      operationResult: 'successful',
      statusCode: 200,
      idToken: '09w9qv4905u934mc0wq9e0'
    };
  }

  @Mutation()
  async registerAuthUser(@Args('input') { email, password }: AuthUserInput, @Context() context: any) {
    console.log('Token', context.token)
    const { token, ...response } = await context.auth.signupWithEmailAndPassword({ email, password });
    context.token = token;
    return response;
  }

  @Mutation()
  async signinAuthUser(@Args('input') { email, password }: AuthUserInput, @Context() context: any) {
    const { token, ...response } = await context.auth.authService.signinWithEmailAndPassword({ email, password });
    context.token = token;
    return response;
  }

  @Mutation()
  async registerAccountUser(@Args('input') { email, password, accountId }: NewAccountUserInput, @Context() ctx: any) {
    const { token, ...response } = await ctx.auth.authService.signupAccountUserWithEmailAndPassword({ email, password, accountId });
    ctx.token = token;
    return response;
  }

  @Mutation()
  async createUserToken(@Args('input') {userId, accountId}: CreateUserTokenInput, @Context() ctx: ServerContext) {
    ctx.token = await ctx.auth.createUserToken(userId, accountId);
    return {
      token: ctx.token
    };
  }

}