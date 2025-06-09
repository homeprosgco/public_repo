import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { print } from 'graphql'; // ✅ Import `print` to convert DocumentNode to string
import { writeFileSync } from 'fs-extra';
import * as path from 'path';

// Load all GraphQL schema files
const typesArray = loadFilesSync(path.join(__dirname, "../graphql_types"), {
  extensions: ['graphql'],
  ignoreIndex: true,
});

// Merge schemas into a single GraphQL schema
const mergedSchema = mergeTypeDefs(typesArray);

// ✅ Convert DocumentNode to a GraphQL schema string
const schemaString: string = print(mergedSchema);

const outputPath: string = path.join(__dirname, "../schema.graphql");
writeFileSync(outputPath, schemaString);

console.log(`✅ Merged schema saved to: ${outputPath}`);
