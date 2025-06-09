import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { ServerContext } from '../_interface/server-context.interface';

@Resolver('Account')
export class AccountResolver {

  @Query()
  account(@Context() ctx: ServerContext) {
    return ctx.accountSvc.getById(ctx.accountId);
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