import * as ddb from '@aws-appsync/utils/dynamodb';
import { AppSyncResolverContext } from '../../context_interface';

export function request(ctx: AppSyncResolverContext) {
  const entityId = ctx.args.input.id;
  const entityType = ctx.stash.entityType; // e.g., "Project", "Customer"

  // 🔹 Generate partition and sort keys
  const PK = ctx.stash.PK;
  const SKPrefix = ctx.stash.SKPrefix;
  const SK = ctx.stash.SK;

  // 🔹 Step 1: Fetch main entity separately
  const mainEntityQuery = ddb.get({ key: { PK, SK } });

  // 🔹 Step 2: Fetch related entities conditionally
  const fetchRelated = ctx.stash.requestHeaders.fetchRelated;
  const relatedEntities: string[] = ctx.stash.requestHeaders.relatedEntities;

  if (!fetchRelated || relatedEntities.length === 0) {
    return mainEntityQuery;
  }

  // 🔹 Build filter expressions for querying related entities
  const filterExpressions = relatedEntities.map(
    (entity, index) => `begins_with(SK, :skPrefix${index})`
  );
  const expressionValues = relatedEntities.reduce((acc, entity, index) => {
    acc[`:skPrefix${index}`] = `DATA#${entity}#`;
    return acc;
  }, {} as Record<string, string>);

  const relatedQuery = ddb.query({
    query: {
      expression: `PK = :pk AND (${filterExpressions.join(' OR ')})`,
      expressionValues: {
        ':pk': PK,
        ...expressionValues,
      },
    },
  });

  // 🔹 Step 3: Combine the two queries into a pipeline response
  return {
    operation: 'Parallel', // Runs both queries in parallel
    queries: [mainEntityQuery, relatedQuery],
  };
}

export const response = (ctx: AppSyncResolverContext) => {
  const [mainResult, relatedResult] = ctx.result.results; // Parallel query results

  if (!mainResult) {
    return {};
  }

  // 🔹 Extract entity name dynamically from SKPrefix (e.g., "Project" → "project")
  const entityType = mainResult.SK.split('#')[1].toLowerCase();

  // 🔹 Group related items dynamically
  const relatedItems = relatedResult.items?.reduce((acc: { [x: string]: any[]; }, item: { SK: string; }) => {
    const relatedEntityType = item.SK.split('#')[1].toLowerCase() + 's'; // Convert to plural (e.g., "Project" → "projects")
    acc[relatedEntityType] = acc[relatedEntityType] || [];
    acc[relatedEntityType].push(item);
    return acc;
  }, {} as Record<string, any[]>) || {};

  return {
    [entityType]: mainResult, // ✅ Dynamically set the entity name (e.g., "project")
    ...relatedItems, // ✅ Group related entities dynamically
  };
};

