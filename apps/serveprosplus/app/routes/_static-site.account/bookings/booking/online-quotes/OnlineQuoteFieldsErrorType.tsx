import { z } from "zod";
import { inferSafeParseErrors } from "~/_lib/utils/infer-safe-parse-errors";
import OnlineQuoteSchema from "./OnlineQuoteSchema";

export type OnlineQuoteFieldsErrorsType = inferSafeParseErrors<
  typeof OnlineQuoteSchema
>;
