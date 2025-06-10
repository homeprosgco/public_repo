import { z } from "zod";
import BookingSchema from "./BookingSchema";

export type BookingFieldsErrorsType = z.infer<typeof BookingSchema>;