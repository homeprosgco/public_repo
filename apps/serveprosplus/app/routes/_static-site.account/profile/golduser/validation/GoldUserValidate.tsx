import { z } from "zod";
import { GoldUserProfileFieldsErrorsType } from "./GoldUserProfileFieldsErrorsType";
import { GoldUserProfileFieldsType } from "./GoldUserProfileFieldsType";
import GoldUserProfileSchema from "./GoldUserProfileSchema";

const GoldUserProfileValidate = (fields: GoldUserProfileFieldsType) => {
  const errors: z.typeToFlattenedError<
    GoldUserProfileFieldsErrorsType,
    string
  > | null = null;

  const result = GoldUserProfileSchema.safeParse(fields);

  if (!result.success) {
    return {
      fields,
      errors: result.error.flatten(),
    };
  }

  return { fields, errors };
};

export default GoldUserProfileValidate;
