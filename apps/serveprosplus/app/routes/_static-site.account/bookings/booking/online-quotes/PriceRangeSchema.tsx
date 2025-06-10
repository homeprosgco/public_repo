import { z } from "zod";

export const PriceRangeSchema = z.object({
  lowPriceRange: z.number().int().positive(),
  highPriceRange: z.number().int().positive(),
});
