import * as z from "zod"
import { CompleteBooking, relatedBookingSchema } from "./index"

export const bookingImageFolderIdSchema = z.object({
  id: z.string(),
  bookingId: z.string(),
})

export interface CompleteBookingImageFolderId extends z.infer<typeof bookingImageFolderIdSchema> {
  booking: CompleteBooking
}

/**
 * relatedBookingImageFolderIdSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBookingImageFolderIdSchema: z.ZodSchema<CompleteBookingImageFolderId> = z.lazy(() => bookingImageFolderIdSchema.extend({
  booking: relatedBookingSchema,
}))
