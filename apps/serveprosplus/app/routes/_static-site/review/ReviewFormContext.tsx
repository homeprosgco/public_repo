import { createFormContext } from "@mantine/form";
import { ReviewFieldsType } from "./ReviewFieldsType";

export const [
  ReviewFormProvider,
  useReviewFormContext,
  useReviewForm,
] = createFormContext<ReviewFieldsType>();