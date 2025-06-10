import { z } from "zod";
import BookingSchema from "./BookingSchema";

export type BookingFieldsType = z.infer<typeof BookingSchema>