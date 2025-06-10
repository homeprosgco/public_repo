import { createFormContext } from "@mantine/form";
import { UserProfileFieldsType } from "./UserProflieFieldsType";

export const [
  UserProfileFormProvider,
  useUserProfileFormContext,
  useUserProfileForm,
] = createFormContext<UserProfileFieldsType>();
