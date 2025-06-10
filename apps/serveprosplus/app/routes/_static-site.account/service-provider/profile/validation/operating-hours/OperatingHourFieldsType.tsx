import { z } from "zod";
import { OperatingHoursSchema } from "./OperatingHourSchema";

export type OperatingHourFieldsType = z.infer<typeof OperatingHoursSchema>;