import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { ServerContext } from '../app/graphql/_interface/server-context.interface';

@Resolver('ResolverName')
export class AuthResolver {

  @Query()
  authUserResponse(@Context() ctx: ServerContext) {
    return ctx;
  }

  @Mutation()
  async registerAuthUser(@Args() input: any, @Context() ctx: ServerContext) {
    return ctx;
  }

  @Mutation()
  async signinAuthUser(@Context() ctx: ServerContext) {
    return ctx;
  }

  @Mutation()
  async registerAccountUser(@Context() ctx: ServerContext) {
    return ctx;
  }

  @Mutation()
  async createUserToken(@Context() ctx: ServerContext) {
    return ctx;
  }

}