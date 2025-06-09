import * as ddb from '@aws-appsync/utils/dynamodb';
import { AppSyncResolverContext } from '../../context_interface';

export function request(ctx: AppSyncResolverContext) {
  // ✅ Extract identity details
  const { appId, tenantId } = ctx.stash.auth;

  // ✅ Construct Partition Key (PK)
  ctx.stash.PK = `APP#${appId}#TENANT#${tenantId}`;
  ctx.stash.SKPrefix = `DATA#${ctx.stash.entityType}#`; 
  ctx.stash.SK =
    ctx.stash.requestHeaders.providedSortKey ||
    `${ctx.stash.SKPrefix}${ctx.args.input.id}`;

  return {};
}

export const response = (ctx: AppSyncResolverContext) => ctx.result;
