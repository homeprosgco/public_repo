import { z } from "zod";
import { BookingFieldsErrorsType } from "./BookingFieldsErrorsType";
import { BookingFieldsType } from "./BookingFieldsType";
import BookingSchema from "./BookingSchema";

const BookingValidate = (fields: BookingFieldsType) => {
  const errors: z.typeToFlattenedError<
    BookingFieldsErrorsType,
    string
  > | null = null;

  const result = BookingSchema.safeParse(fields);

  if (!result.success) {
    return {
      fields,
      errors: result.error.flatten(),
    };
  }

  return { fields, errors };
};

export default BookingValidate;