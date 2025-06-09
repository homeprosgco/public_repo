import { Resolver, Mutation } from '@nestjs/graphql';
// import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {

  // constructor(private userSvc: UserService) { }

  @Mutation()
  findUserById() {
    // return this.userSvc.user(input)
  }

  @Mutation()
  createUserProfile() {
    // return this.userSvc.createUserProfile(input);
  }

}