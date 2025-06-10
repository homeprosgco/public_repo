import { z } from "zod";
import { UserProfileFieldsErrorsType } from "./UserProfileFieldsErrorType";
import UserProfileSchema from "./UserProfileSchema";
import { UserProfileFieldsType } from "./UserProflieFieldsType";

const UserProfileValidate = (fields: UserProfileFieldsType) => {
  const errors: z.typeToFlattenedError<
    UserProfileFieldsErrorsType,
    string
  > | null = null;

  const result = UserProfileSchema.safeParse(fields);

  if (!result.success) {
    return {
      fields,
      errors: result.error.flatten(),
    };
  }

  return { fields, errors };
};

export default UserProfileValidate;
