import { z } from "zod";
import { PreferredBookingDateSchema } from "./PreferredBookingDateSchema";

export type PreferredBookingDatesFieldsType = z.infer<typeof PreferredBookingDateSchema>;