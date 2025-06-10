import { bookingOnlineQuoteSchema } from "prisma/zod";


const OnlineQuoteSchema = bookingOnlineQuoteSchema
  .pick({
    highPriceRange: true,
    lowPriceRange: true,
    comment: true,
  })
  .required();

export default OnlineQuoteSchema;
