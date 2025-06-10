import { z } from "zod";
import { ServiceProviderProfileFieldsErrorsType } from "./ServiceProviderProfileFieldsErrorsType";
import { ServiceProviderProfileFieldsType } from "./ServiceProviderProfileFieldsType";
import ServiceProviderProfileSchema from "./ServiceProviderProfileSchema";

const ServiceProviderProfileValidate = (fields: ServiceProviderProfileFieldsType) => {
  const errors: z.typeToFlattenedError<
    ServiceProviderProfileFieldsErrorsType,
    string
  > | null = null;

  const result = ServiceProviderProfileSchema.safeParse(fields);

  if (!result.success) {
    return {
      fields,
      errors: result.error.flatten(),
    };
  }

  return { fields, errors };
};

export default ServiceProviderProfileValidate;
