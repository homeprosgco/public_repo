import * as ddb from '@aws-appsync/utils/dynamodb'
import { AppSyncResolverContext } from '../../context_interface';

export function request(ctx: AppSyncResolverContext) {
    // ✅ Extract operation type dynamically (case-insensitive)
  const match = ctx.info.fieldName.match(
    /^(get|query|put|update|delete)([A-Z]\w+)$/i
  );
  if (!match) {
    return util.error(
      `Invalid fieldName format: ${ctx.info.fieldName}`,
      'BadRequest'
    );
  }

  const operation = match[1].toLowerCase(); // Extract operation type
  const entityType = match[2]; // Extract entity name

  // ✅ Store operation details in stash
  ctx.stash.operation = operation;
  ctx.stash.entityType = entityType;

  return {};
}

export const response = (ctx: AppSyncResolverContext) => ctx.result;