import * as ddb from '@aws-appsync/utils/dynamodb'
import { AppSyncResolverContext } from '../../context_interface';

export function request(ctx: AppSyncResolverContext) {
  return {};
}

export const response = (ctx: AppSyncResolverContext) => ctx.result;