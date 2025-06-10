import { GoldUserProfileFieldsErrorsType } from "./GoldUserProfileFieldsErrorsType";
import { GoldUserProfileFieldsType } from "./GoldUserProfileFieldsType";

export type GoldUserProfileActionData = {
  fields: GoldUserProfileFieldsType | undefined;
  errors?: GoldUserProfileFieldsErrorsType | undefined;
};