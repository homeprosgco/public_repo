import { UseFormReturnType } from "@mantine/form";
import { FetcherWithComponents } from "@remix-run/react";
import { OnlineQuoteActionData } from "../OnlineQuoteActionData";
import { OnlineQuoteFieldsType } from "../OnlineQuoteFieldsType";

export type OnlineQuoteModalProps = {
  quoteFormOpened: boolean;
  setQuoteFormOpened: () => void;
  submitQuote: () => void;
  form: UseFormReturnType<OnlineQuoteFieldsType>;
  onlineQuoteForm: any
};
