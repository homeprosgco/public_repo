import { Injectable } from '@nestjs/common';
// import { User, Prisma } from '@prisma/client';
// import { CreateUserProfileInput, UserWhereUniqueInputId } from 'src/graphql.schema';
// import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  // constructor(private prisma: PrismaService) { }

  // async createUser(data: Prisma.UserCreateInput): Promise<User> {
  //   return this.prisma.user.create({ data });
  // }

  // async user({ id }: UserWhereUniqueInputId): Promise<User | null> {
  //   return this.prisma.user.findUnique({
  //     where: { uid: id }
  //   });
  // }

  // async createUserProfile({ firstname, lastname, user }: CreateUserProfileInput) {
  //   return this.prisma.userProfile.create({
  //     data: { firstname, lastname, user }
  //   });
  // }

  // async users(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.UserWhereUniqueInput;
  //   where?: Prisma.UserWhereInput;
  //   orderBy?: Prisma.UserOrderByWithRelationInput;
  // }): Promise<User[]> {
  //   const { skip, take, cursor, where, orderBy } = params;
  //   return this.prisma.user.findMany({
  //     skip,
  //     take,
  //     cursor,
  //     where,
  //     orderBy,
  //   });
  // }

  // async updateUser(params: {
  //   where: Prisma.UserWhereUniqueInput;
  //   data: Prisma.UserUpdateInput;
  // }): Promise<User> {
  //   const { where, data } = params;
  //   return this.prisma.user.update({
  //     data,
  //     where,
  //   });
  // }

  // async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
  //   return this.prisma.user.delete({
  //     where,
  //   });
  // }
}