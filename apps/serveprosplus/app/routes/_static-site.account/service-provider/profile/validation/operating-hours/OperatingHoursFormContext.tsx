import { createFormContext } from "@mantine/form";
import { DayOfWeek } from "@prisma/client";
import { OperatingHourFieldsType } from "./OperatingHourFieldsType";

export const [
  OperatingHoursFormProvider,
  useOperatingHoursFormContext,
  useOperatingHoursForm
] = createFormContext<OperatingHourFieldsType>();