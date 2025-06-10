import * as z from "zod"
import { CompleteServiceProvider, relatedServiceProviderSchema, CompleteUser, relatedUserSchema } from "./index"

export const favoriteServiceProviderSchema = z.object({
  id: z.string(),
  serviceProviderId: z.string(),
  userId: z.string(),
})

export interface CompleteFavoriteServiceProvider extends z.infer<typeof favoriteServiceProviderSchema> {
  serviceProvider: CompleteServiceProvider
  user: CompleteUser
}

/**
 * relatedFavoriteServiceProviderSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedFavoriteServiceProviderSchema: z.ZodSchema<CompleteFavoriteServiceProvider> = z.lazy(() => favoriteServiceProviderSchema.extend({
  serviceProvider: relatedServiceProviderSchema,
  user: relatedUserSchema,
}))
