import { createFormContext } from "@mantine/form";
import { OnlineQuoteFieldsType } from "./OnlineQuoteFieldsType";

export const [
  OnlineQuoteFormProvider,
  useOnlineQuoteFormContext,
  useOnlineQuoteForm,
] = createFormContext<OnlineQuoteFieldsType>();
