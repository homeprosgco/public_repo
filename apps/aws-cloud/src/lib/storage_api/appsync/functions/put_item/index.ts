import * as ddb from '@aws-appsync/utils/dynamodb';
import { AppSyncResolverContext } from '../../context_interface';

export function request(ctx: AppSyncResolverContext) {
  const PK = ctx.stash.PK;
  const SK = ctx.stash.SK;
  const EntityType = ctx.stash.entityType;
  const tenantId = ctx.stash.auth.tenantId;

  return ddb.put({
    key: { PK, SK },
    item: { PK, SK, ...ctx.args.input, EntityType, tenantId },
  });
}

export const response = (ctx: AppSyncResolverContext) => ctx.result;
