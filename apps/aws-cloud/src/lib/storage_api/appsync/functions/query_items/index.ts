import * as ddb from '@aws-appsync/utils/dynamodb';
import { AppSyncResolverContext } from '../../context_interface';

export function request(ctx: AppSyncResolverContext) {
  let queryRequest: ddb.QueryInput<any> = { query: {} };
  const isAdmin = ctx.stash.admin === true;

  if (ctx.stash.requestHeaders.useGSI) {
    const EntityType = ctx.stash.entityType;
    const tenantId = ctx.stash.auth.tenantId;
    queryRequest.index = isAdmin ? 'EntityTypeIndex' : 'EntityTypeAccountIndex';
    queryRequest.query = isAdmin
      ? { EntityType }
      : { EntityType, TenantId: tenantId };
  } else {
    const PK = ctx.stash.PK;

    queryRequest.query = {
      PK,
      SK: { beginsWith: ctx.stash.SKPrefix },
    };
  }

  // ✅ Determine logical operator (AND / OR)
  const useOrOperator = ctx.args.logicalOperator?.toUpperCase() === 'OR';

  // ✅ Apply Filters Dynamically
  if (ctx.args.filters && Array.isArray(ctx.args.filters)) {
    const filterConditions: Record<string, any>[] = [];

    ctx.args.filters.forEach(
      (filter: { field: string; value: string; operator: string }) => {
        const { field, value, operator } = filter;
        if (field && value !== undefined) {
          let condition = {};

          if (operator === 'EQ') {
            condition = { eq: value };
          } else if (operator === 'NE') {
            condition = { ne: value };
          } else if (operator === 'GT') {
            condition = { gt: value };
          } else if (operator === 'LT') {
            condition = { lt: value };
          } else if (operator === 'GTE') {
            condition = { gte: value };
          } else if (operator === 'LTE') {
            condition = { lte: value };
          } else if (operator === 'CONTAINS') {
            condition = { contains: value };
          } else if (operator === 'BEGINS_WITH') {
            condition = { beginsWith: value };
          }

          filterConditions.push({ [field]: condition });
        }
      }
    );

    // ✅ Attach filters with correct logical operator handling
    if (filterConditions.length > 0) {
      queryRequest.filter = useOrOperator
        ? { or: filterConditions }
        : { and: filterConditions };
    }
  }

  // ✅ Soft Delete Handling (Exclude `isDeleted = true` if not requested)
  if (!ctx.args.includeDeleted) {
    queryRequest.filter = {
      ...queryRequest.filter,
      isDeleted: { eq: false }, // ✅ Ensures only non-deleted items are returned
    };
  }
  queryRequest.limit = ctx.stash.requestHeaders.limit;
  queryRequest.nextToken = ctx.stash.requestHeaders.nextToken;

  return ddb.query(queryRequest);
}

export const response = (ctx: AppSyncResolverContext) =>
  ctx.result?.items || [];
