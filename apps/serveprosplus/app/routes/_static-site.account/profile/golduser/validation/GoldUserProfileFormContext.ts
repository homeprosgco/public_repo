import { createFormContext } from "@mantine/form";
import { GoldUserProfileFieldsType } from "./GoldUserProfileFieldsType";

export const [
  GoldUserProfileFormProvider,
  useGoldUserProfileFormContext,
  useGoldUserProfileForm,
] = createFormContext<GoldUserProfileFieldsType>();
