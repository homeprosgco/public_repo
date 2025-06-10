import { createFormContext } from "@mantine/form";
import { FeedbackFieldsType } from "./FeedbackFieldsType";

export const [
  FeedbackFormProvider,
  useFeedbackFormContext,
  useFeedbackForm,
] = createFormContext<FeedbackFieldsType>();