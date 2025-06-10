import { OperatingHourFieldsErrorsType } from "./OperatingHourFieldsErrorsType";
import { OperatingHourFieldsType } from "./OperatingHourFieldsType";

export type OperationHourActionData = {
  fields: OperatingHourFieldsType | undefined;
  errors: OperatingHourFieldsErrorsType | undefined;
}