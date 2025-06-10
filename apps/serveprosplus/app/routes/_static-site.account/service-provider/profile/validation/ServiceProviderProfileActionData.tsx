import { ServiceProviderProfileFieldsErrorsType } from "./ServiceProviderProfileFieldsErrorsType";
import { ServiceProviderProfileFieldsType } from "./ServiceProviderProfileFieldsType";

export type ServiceProviderProfileActionData = {
  fields: ServiceProviderProfileFieldsType | undefined;
  errors?: ServiceProviderProfileFieldsErrorsType | undefined;
};