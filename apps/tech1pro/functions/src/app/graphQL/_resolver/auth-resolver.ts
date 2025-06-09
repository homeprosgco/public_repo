/*
https://docs.nestjs.com/providers#services
*/

import { faker } from '@faker-js/faker';
import { AuthUserEmailInput, AuthUserInput, CreateUserInput, Token } from '@graphql-schema/*';
import { Injectable } from '@nestjs/common';
import { Args, Resolver, Mutation, Context } from '@nestjs/graphql';
import { ServerContext } from '../_interface/server-context.interface';

@Resolver('Auth')
@Injectable()
export class AuthResolver {

  constructor() { }

  @Mutation()
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput, @Context() ctx: ServerContext): Promise<Token> {
    return await ctx.auth.createUser(createUserInput);
  }

  @Mutation()
  async registerAuthUser(@Args('input') authUserInput: AuthUserInput, @Context() ctx: ServerContext) {
    return await ctx.auth.registerAuthUser(authUserInput);
  }

  // returns a firebase custom user token to signin on the client
  @Mutation()
  async authUserCustomSigninToken(@Args('input') authUserEmailInput: AuthUserEmailInput, @Context() ctx: ServerContext) {
    console.log('auth custom')
    const token = await ctx.auth.authUserCustomSigninToken(authUserEmailInput);
    return { token };
  }

  @Mutation()
  async seedAuthUsers(@Context() ctx: ServerContext) {
    const fakeAuthUsers = Array.from({ length: faker.datatype.number({ min: 20, max: 45 }) }).map(async _ => {
      return await ctx.auth.registerAuthUser({
        email: faker.internet.email(),
        password: faker.internet.password()
      });
    });

    return Promise.all(fakeAuthUsers);
  }

}
