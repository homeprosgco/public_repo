import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ServiceModule } from './_service/service.module';
import { ResolverModule } from './_resolver/resolver.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    AuthModule,
    ServiceModule,
    ResolverModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./src/app/graphQL/_definitions/_graphql-schema/**/*.graphql'],
      context: ({ req }) => {
        const token = req.header("authorization") && req.header("authorization").split(' ')[1] || 'unauthenticated user';
        return { token }
      },
    })
  ]
})
export class AppGraphQLModule { }
