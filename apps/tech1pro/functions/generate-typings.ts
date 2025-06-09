import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/app/graphQL/_definitions/_graphql-schema/**/*.graphql'],
  path: join(process.cwd(), 'src/app/graphQL/_definitions/graphql.interface.ts'),
  watch: true,
  emitTypenameField: true,
});