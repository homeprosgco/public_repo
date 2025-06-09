import * as ddb from '@aws-appsync/utils/dynamodb';
import { AppSyncResolverContext } from '../../context_interface';

export function request(ctx: AppSyncResolverContext) {
  const { tenantId } = ctx.stash.auth;
  const { id, ...values } = ctx.args.input;
  const entityType = ctx.stash.entityType;

  const PK = ctx.stash.PK;
  const SK = ctx.stash.SK;

  // Determine which fields should be set and which should be removed
  const setValues: Record<string, any> = {
    ...values,
    EntityType: entityType, // Required for GSI
    TenantId: tenantId, // Required for GSI
  };

  const removeFields: string[] = [];
  for (const [key, value] of Object.entries(values)) {
    if (value === undefined || value === null) {
      removeFields.push(key);
    }
  }

  return ddb.update({
    key: { PK, SK },
    update: {
      set: { ...setValues, isDeleted: false }, // Dynamically set fields
      remove: removeFields.length > 0 ? removeFields : undefined, // Remove fields if necessary
    },
    condition: {
      PK: { attributeExists: true },
      SK: { attributeExists: true },
    },
  });
}

export const response = (ctx: AppSyncResolverContext) => ctx.result;
