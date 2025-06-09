import { util } from '@aws-appsync/utils';
import { AppSyncIdentityLambda, AppSyncResolverContext} from '../../context_interface';

export function request(ctx: AppSyncResolverContext) {
  // ✅ Extract identity details
  const identity = (ctx.identity as unknown as AppSyncIdentityLambda).resolverContext;
  const appId = identity.appId;
  const tenantId = identity.tenantId;
  const groups = identity.groups

  if (!appId || !tenantId || !groups.includes("SuperAdmin")) {
    return util.error(
      'Unauthorized: Missing appId or tenantId in identity claims',
      'Unauthorized'
    );
  }

  // ✅ Authorization checks
  const isAdmin = groups.includes('Admin');
  const isManager = groups.includes('Manager');
  const isSuperAdmin = groups.includes('SuperAdmin');

  // ✅ Stash authentication details
  ctx.stash.auth = {
    appId,
    tenantId,
    isSuperAdmin,
    isAdmin,
    isManager,
  };

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

  // ✅ Store arguments dynamically
  ctx.stash.args =
    operation === 'get' || operation === 'delete'
      ? { id: ctx.arguments.id }
      : ctx.arguments.input;

  return {}; // ✅ Always return an empty object in request resolvers
}

export function response(ctx: AppSyncResolverContext) {
  if (!ctx.result) {
    return util.error('No data found for the requested operation.', 'NotFound');
  }
  return ctx.result;
}
