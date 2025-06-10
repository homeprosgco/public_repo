import { z } from "zod";
import errorFields from "~/_lib/utils/error-fields";
import { OnlineQuoteFieldsType } from "./OnlineQuoteFieldsType";
import OnlineQuoteSchema from "./OnlineQuoteSchema";
import { PriceRangeSchema } from "./PriceRangeSchema";

const ValidateOnlineQuoteFields = (fields: OnlineQuoteFieldsType) => {
  const errors: z.typeToFlattenedError<
    {
      lowPriceRange: number;
      highPriceRange: number;
    },
    string
  > | null = null;

  const checkNum = {
    lowPriceRange: +fields.lowPriceRange,
    highPriceRange: +fields.highPriceRange,
  };

  const isNumber = PriceRangeSchema.safeParse(checkNum);

  if (!isNumber.success) {
    return {
      fields,
      errors: errorFields(isNumber.error.flatten()),
    };
  }

  const result = OnlineQuoteSchema.safeParse(fields);

  if (!result.success) {
    return {
      fields,
      errors: errorFields(result.error.flatten()),
    };
  }

  return { fields, errors };
};

export default ValidateOnlineQuoteFields;
