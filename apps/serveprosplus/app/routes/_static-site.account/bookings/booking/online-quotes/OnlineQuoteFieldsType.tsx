import { z } from "zod";
import OnlineQuoteSchema from "./OnlineQuoteSchema";

export type OnlineQuoteFieldsType = z.infer<typeof OnlineQuoteSchema>;