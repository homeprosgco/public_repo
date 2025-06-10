import { Prisma } from "@prisma/client";
import { bookingOnlineQuoteSchema } from "prisma/zod";
import { z } from "zod";
import { onlineQuoteData } from "~/_lib/integrations/faker/onlineQuoteData";
import { inferSafeParseErrors } from "~/_lib/utils";
import { prisma } from "~/_server/prisma/prisma.server";

const OnlineQuoteFields = bookingOnlineQuoteSchema.pick({
  highPriceRange: true,
  lowPriceRange: true,
  comment: true,
});

const PriceRangeSchema = z.object({
  lowPriceRange: z.number().int().positive(),
  highPriceRange: z.number().int().positive(),
});

export type OnlineQuoteFields = z.infer<typeof OnlineQuoteFields>
export type OnlineQuoteFieldsErrors = inferSafeParseErrors<typeof OnlineQuoteFields>;
type OnlineQuoteActionData = {
  fields: OnlineQuoteFields;
  errors?: OnlineQuoteFieldsErrors;
}
type OnlineQuoteFieldsType = ReturnType<typeof onlineQuoteData>

function onlineQuoteValidator(bookingId: string, serviceProviderId: string, fields: OnlineQuoteFieldsType) {
  return Prisma.validator<Prisma.BookingOnlineQuoteCreateArgs>()({
    data: {
      ...fields,
      bookingId,
      serviceProviderId
    }
  })
}

export const createOnlineQuote = async (bookingId: string, serviceProviderId: string, fields: OnlineQuoteFields) => {
  const checkNum = {
    lowPriceRange: +fields.lowPriceRange,
    highPriceRange: +fields.highPriceRange,
  };
  const checkNumbers = PriceRangeSchema.safeParse(checkNum);
  const result = OnlineQuoteFields.safeParse(fields);

  if (!checkNumbers.success) {
    return { fields, errors: checkNumbers.error.flatten() }
  } else if (!result.success) {
    return { fields, errors: result.error.flatten() }
  } else {
    const validOnlineQuote = onlineQuoteValidator(bookingId, serviceProviderId, fields);
    const onlineQuote = await prisma.bookingOnlineQuote.create(validOnlineQuote);
    return { onlineQuote }
  }
}