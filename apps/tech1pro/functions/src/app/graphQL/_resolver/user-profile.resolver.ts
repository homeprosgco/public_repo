/*
https://docs.nestjs.com/providers#services
*/

import { UserProfileInput, UserProfile } from '@graphql-schema/*';
import { Injectable } from '@nestjs/common';
import { Args, Resolver, Mutation, Context, Query } from '@nestjs/graphql';
import { ServerContext } from '../_interface/server-context.interface';

@Resolver('UserProfile')
@Injectable()
export class UserProfileResolver {

  @Query()
  async userProfileById(@Args('userProfileId') profileId: string, @Context() ctx: ServerContext) {
    return await ctx.users.getUserById(profileId)
  }

  @Mutation()
  async createUserProfile(@Args('userProfileInput') userProfileInput: UserProfileInput, @Context() ctx: ServerContext): Promise<UserProfile> {
    return await ctx.users.addUser(userProfileInput);
  }

  @Query()
  async allUsers(@Context() ctx: ServerContext): Promise<UserProfile[]> {
    return await ctx.users.getAllUsers() as UserProfile[];
  }

}
