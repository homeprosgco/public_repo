import * as ddb from '@aws-appsync/utils/dynamodb';
import { AppSyncResolverContext } from '../../context_interface';

export function request(ctx: AppSyncResolverContext) {
  // ✅ Extract Sort Key (`SK`) from headers
  const requestHeaders = ctx.request.headers || {};
  const providedSortKey = requestHeaders['x-sort-key'] || undefined;
  const useGSI = requestHeaders['x-use-gsi'] === 'true';
  const nextToken = requestHeaders['x-next-token'] || undefined;
  const limit = requestHeaders['x-limit'] || 25;
  const includeDeleted = requestHeaders['x-include-deleted'] === 'true';
  const fetchRelated = requestHeaders['x-fetch-related'] === 'true';
  const relatedEntities: string[] = ctx.args.relatedEntities || [];

  ctx.stash.requestHeaders = {
    providedSortKey,
    useGSI,
    nextToken,
    limit,
    includeDeleted,
    fetchRelated,
    relatedEntities,
  };

  return {};
}

export const response = (ctx: AppSyncResolverContext) => ctx.result;
