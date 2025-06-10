import { BookingFieldsErrorsType } from "./BookingFieldsErrorsType";
import { BookingFieldsType } from "./BookingFieldsType";

export type BookingActionData = {
  fields: BookingFieldsType | undefined;
  errors?: BookingFieldsErrorsType | undefined;
};