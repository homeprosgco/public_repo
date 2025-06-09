import * as ddb from '@aws-appsync/utils/dynamodb';
import { AppSyncResolverContext } from '../../context_interface';

export function request(ctx: AppSyncResolverContext) {
  const PK = ctx.stash.PK;
  const SK =
    ctx.stash.requestHeaders.providedSortKey ||
    `DATA#${ctx.stash.entityType}#${ctx.args.input.id}`;
  return ddb.remove({ key: { PK, SK } });
}

export const response = (ctx: AppSyncResolverContext) => ctx.result;
