import { AppSyncResolverContext } from "../../context_interface";

export function request() {
  return {};
}

export const response = (ctx: AppSyncResolverContext) => ctx.result;