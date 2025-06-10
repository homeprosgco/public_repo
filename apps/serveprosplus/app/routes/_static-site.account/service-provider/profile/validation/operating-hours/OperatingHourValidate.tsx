import { z } from "zod";
import { OperatingHourFieldsErrorsType } from "./OperatingHourFieldsErrorsType";
import { OperatingHourFieldsType } from "./OperatingHourFieldsType";
import { OperatingHoursSchema } from "./OperatingHourSchema";

const OperatingHoursValidate = (fields: OperatingHourFieldsType) => {
  const errors:
    | z.typeToFlattenedError<OperatingHourFieldsErrorsType, string>[]
    | null = null;

  const result = OperatingHoursSchema.safeParse(fields);

  if (!result.success) return { fields, errors: result.error.flatten() };

  return { fields, errors };
};

export default OperatingHoursValidate;
