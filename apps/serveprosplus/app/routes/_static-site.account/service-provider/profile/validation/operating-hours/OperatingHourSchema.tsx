import { operatingHourSchema } from "prisma/zod";

export const OperatingHoursSchema = operatingHourSchema.pick({
  dayOfWeek: true,
  openingHour: true,
  closingHour: true,
  isClosed: true
}).array();