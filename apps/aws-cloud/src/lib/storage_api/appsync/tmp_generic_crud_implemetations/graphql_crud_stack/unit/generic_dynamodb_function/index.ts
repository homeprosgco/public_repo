import { convertToNative } from '@aws-sdk/util-dynamodb';
import { AppSyncResolverContext } from '../../../../infrastucture/interface';

export function request(ctx: AppSyncResolverContext) {
  return {
    operation: ctx.stash.operation,
    ...ctx.arguments,
  };
}

export function response(ctx: AppSyncResolverContext) {
  if (!ctx.result) return null;

  // ✅ Convert DynamoDB results into JS objects
  const rawData = ctx.result.items
    ? ctx.result.items.map((item: any) => convertToNative(item))
    : [convertToNative(ctx.result)];

  // ✅ Extract primary entity dynamically
  const primaryEntity = rawData.find((item: { SK: string }) =>
    item.SK.startsWith(`DATA#`)
  );

  // ✅ Group related entities dynamically
  const relatedEntities: Record<string, any[]> = {};

  rawData.forEach((item: { SK: string }) => {
    const skParts = item.SK.split('#');
    if (skParts.length >= 2) {
      const entityType = skParts[1]; // Extract entity type dynamically
      if (!relatedEntities[entityType]) {
        relatedEntities[entityType] = [];
      }
      relatedEntities[entityType].push(item);
    }
  });

  // ✅ Merge related entities into the primary entity dynamically
  if (primaryEntity) {
    Object.keys(relatedEntities).forEach((key) => {
      primaryEntity[key.toLowerCase()] = relatedEntities[key]; // Attach related data
    });
  }

  return primaryEntity || relatedEntities; // ✅ Return structured response
}
