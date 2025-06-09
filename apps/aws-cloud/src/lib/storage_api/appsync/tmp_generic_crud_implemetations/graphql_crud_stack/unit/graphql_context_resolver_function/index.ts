import { util } from '@aws-appsync/utils';
import { AppSyncResolverContext } from '../../../../infrastucture/interface';

interface QueryFilter {
  field: string;
  value: string | number | boolean; // Supports multiple data types
  operator?:
    | '='
    | '<'
    | '>'
    | '<='
    | '>='
    | '<>'
    | '!='
    | 'contains'
    | 'begins_with'; // Restrict operators
}

export function request(ctx: AppSyncResolverContext) {
  const { entityType, operation } = ctx.stash;

  if (!entityType || !operation) {
    throw new Error('Missing entityType or operation in request.');
  }

  // ✅ Construct Partition Key (PK)
  ctx.arguments.PK = `APP#${ctx.identity.appId}#TENANT#${ctx.identity.tenantId}`;

  // ✅ Extract Sort Key (`SK`) from headers
  const requestHeaders = ctx.request.headers || {};
  const providedSortKey = requestHeaders.get('x-sort-key');
  const useGSI = requestHeaders.get('x-use-gsi') === 'true';
  const nextToken = requestHeaders.get('x-next-token');
  const limit = requestHeaders.get('x-limit') || 25;
  const includeDeleted = requestHeaders.get('x-include-deleted') === 'true';
  const fetchRelated = requestHeaders.get('x-fetch-related') === 'true';
  const relatedEntities: string[] = ctx.args.relatedEntities || []; // 🔹 Dynamically get related entity types

  // ✅ Handle different operations dynamically
  if (operation === 'GetItem') {
    // ✅ Fetch the primary entity (e.g., Customer)
    ctx.stash.primaryQuery = {
      expression: 'PK = :pk AND begins_with(SK, :skPrefix)',
      expressionValues: {
        ':pk': ctx.arguments.PK,
        ':skPrefix': `DATA#${entityType}#${ctx.args.id}`,
      },
      limit: 1, // Get only 1 primary entity
    };

    if (fetchRelated && relatedEntities.length > 0) {
      ctx.stash.relatedQueries = relatedEntities.map((relatedEntity) => ({
        expression: 'PK = :pk AND begins_with(SK, :skPrefix)',
        expressionValues: {
          ':pk': ctx.arguments.PK,
          ':skPrefix': `DATA#${relatedEntity}#`, // 🔹 Fetch dynamically
        },
      }));
    }

    return ctx.stash.primaryQuery; // Execute primary query first
  } else if (operation === 'Query') {
    if (useGSI) {
      ctx.arguments.index = 'EntityTypeAccountIndex';
      ctx.arguments.query = {
        expression: 'EntityType = :entityType AND TenantId = :tenantId',
        expressionValues: {
          ':entityType': { S: entityType },
          ':tenantId': { S: ctx.identity.tenantId },
        },
      };
    } else {
      ctx.arguments.query = {
        expression: 'PK = :pk AND begins_with(SK, :skPrefix)',
        expressionValues: {
          ':pk': ctx.arguments.PK,
          ':skPrefix': providedSortKey || `DATA#${entityType}#`,
        },
      };
    }

    // ✅ Apply Filters (Support multiple conditions dynamically)
    if (ctx.args.filters && Array.isArray(ctx.args.filters)) {
      let filterExpressions: string[] = [];
      let expressionValues: Record<string, { S: string }> = {};

      // Default logical operator is AND
      const logicalOperator =
        ctx.args.logicalOperator &&
        ctx.args.logicalOperator.toUpperCase() === 'OR'
          ? ' OR '
          : ' AND ';

      ctx.args.filters.forEach((filter: QueryFilter, index: any) => {
        const { field, value, operator } = filter;
        if (field && value !== undefined) {
          const safeFieldName = field.replace(/\W/g, ''); // Ensure a safe attribute name
          const filterKey = `:filter${index}`; // Unique key for each filter
          filterExpressions.push(`${field} ${operator || '='} ${filterKey}`);
          expressionValues[filterKey] = { S: String(value) }; // Ensure value is a string
        }
      });

      if (filterExpressions.length > 0) {
        ctx.arguments.query.filter = filterExpressions.join(logicalOperator); // Dynamically join using AND/OR
        ctx.arguments.query.expressionValues = {
          ...ctx.arguments.query.expressionValues,
          ...expressionValues,
        };
      }
    }

    // ✅ Soft Delete Handling (Admin can include deleted records)
    if (!includeDeleted) {
      ctx.arguments.query.filter =
        (ctx.arguments.query.filter || '') + ' AND isDeleted = :false';
      ctx.arguments.query.expressionValues[':false'] = { BOOL: false };
    }

    ctx.arguments = {
      ...ctx.arguments,
      limit,
      ...(nextToken
        ? { ExclusiveStartKey: JSON.parse(util.base64Decode(nextToken)) }
        : {}),
    };
  } else if (operation === 'PutItem') {
    // ✅ Generate Sort Key and set `isDeleted = false` by default
    ctx.arguments.SK = providedSortKey || `DATA#${entityType}#${util.autoId()}`;
    ctx.arguments.attributeValues = {
      ...ctx.args.input,
    };
  } else if (operation === 'UpdateItem' && ctx.args.input.id) {
    ctx.arguments.SK =
      providedSortKey || `DATA#${entityType}#${ctx.args.input.id}`;
    ctx.arguments.update = {
      expression:
        'SET ' +
        Object.keys(ctx.args.input)
          .map((k) => `${k} = :${k}`)
          .join(', '),
      expressionValues: Object.fromEntries(
        Object.entries(ctx.args.input).map(([k, v]) => [`:${k}`, { S: v }])
      ),
    };
  } else if (operation === 'SoftDeleteItem') {
    // ✅ Soft Delete: Marks `isDeleted = true`
    ctx.arguments.SK =
      providedSortKey || `DATA#${entityType}#${ctx.args.input.id}`;
    ctx.arguments.update = {
      expression: 'SET isDeleted = :true',
      expressionValues: { ':true': { BOOL: true } },
    };
  } else if (operation === 'DeleteItem') {
    // ❌ Hard Delete - Only for SUPERADMIN
    ctx.arguments.SK =
      providedSortKey || `DATA#${entityType}#${ctx.args.input.id}`;
  } else {
    throw new Error(`Unsupported operation: ${operation}`);
  }

  return ctx.stash[operation].request(ctx);
}

export function response(ctx: AppSyncResolverContext) {
  return ctx.stash[ctx.stash.operation].response(ctx);
}
