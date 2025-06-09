import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphqlModule } from './app/graphql/graphql.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AppController],
  imports: [
    GraphqlModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => {
        const token = req.header("authorization") && req.header("authorization").split(' ')[1] || 'unauthenticated user';
        return { token }
      }
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      cache: true
    })
  ],
})
export class AppModule { }
