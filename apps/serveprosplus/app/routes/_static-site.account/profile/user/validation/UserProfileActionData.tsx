import { UserProfileFieldsErrorsType } from "./UserProfileFieldsErrorType";
import { UserProfileFieldsType } from "./UserProflieFieldsType";

export type UserProfileActionData = {
  fields: UserProfileFieldsType | undefined;
  errors?: UserProfileFieldsErrorsType | undefined;
};