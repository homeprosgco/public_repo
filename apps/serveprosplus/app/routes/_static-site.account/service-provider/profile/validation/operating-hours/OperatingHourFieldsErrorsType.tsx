import { inferSafeParseErrors } from "~/_lib/utils/infer-safe-parse-errors";
import { OperatingHoursSchema } from "./OperatingHourSchema";

export type OperatingHourFieldsErrorsType = inferSafeParseErrors<typeof OperatingHoursSchema>