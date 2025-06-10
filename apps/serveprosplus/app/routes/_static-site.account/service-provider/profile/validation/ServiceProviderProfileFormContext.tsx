import { createFormContext } from "@mantine/form";
import { ServiceProviderProfileFieldsType } from "./ServiceProviderProfileFieldsType";

export const [
  ServiceProviderProfileFormProvider,
  useServiceProviderProfileFormContext,
  useServiceProviderProfileForm,
] = createFormContext<ServiceProviderProfileFieldsType>();