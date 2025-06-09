import { Module } from '@nestjs/common';
import { AppGraphQLModule } from './app/graphQL/graphQL.module';

@Module({
  imports: [AppGraphQLModule]
})
export class AppModule {}
