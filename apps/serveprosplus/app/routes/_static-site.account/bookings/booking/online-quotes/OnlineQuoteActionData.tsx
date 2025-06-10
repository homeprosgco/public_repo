import { OnlineQuoteFieldsErrorsType } from "./OnlineQuoteFieldsErrorType";
import { OnlineQuoteFieldsType } from "./OnlineQuoteFieldsType";

export type OnlineQuoteActionData = {
  fields: OnlineQuoteFieldsType | undefined;
  errors?: OnlineQuoteFieldsErrorsType | undefined;
};
