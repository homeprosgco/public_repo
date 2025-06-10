import { Stack, TextInput, Text, Group, Checkbox } from "@mantine/core";
import { DayOfWeek } from "@prisma/client";
import { useOperatingHoursForm } from "./OperatingHoursFormContext";

export default function OperatingHoursForm() {
  const form = useOperatingHoursForm({
    initialValues: [
      {
        dayOfWeek: DayOfWeek.Sun,
        openingHour: "",
        closingHour: "",
        isClosed: false,
      },
      {
        dayOfWeek: DayOfWeek.Mon,
        openingHour: "",
        closingHour: "",
        isClosed: false,
      },
      {
        dayOfWeek: DayOfWeek.Tues,
        openingHour: "",
        closingHour: "",
        isClosed: false,
      },
      {
        dayOfWeek: DayOfWeek.Weds,
        openingHour: "",
        closingHour: "",
        isClosed: false,
      },
      {
        dayOfWeek: DayOfWeek.Thurs,
        openingHour: "",
        closingHour: "",
        isClosed: false,
      },
      {
        dayOfWeek: DayOfWeek.Fri,
        openingHour: "",
        closingHour: "",
        isClosed: false,
      },
      {
        dayOfWeek: DayOfWeek.Sat,
        openingHour: "",
        closingHour: "",
        isClosed: false,
      },
    ],
  });

  return (
    <>
      <Stack>
        {form.values.map((operatingHour) => {
          return (
            <>
              <Stack>
                <Text>{operatingHour.dayOfWeek}</Text>
                <Group>
                  <TextInput
                    label="Opening Time"
                    placeholder="8:00 AM"
                    {...form.getInputProps(operatingHour.openingHour)}
                  />
                  <TextInput
                    label="Closing Time"
                    placeholder="6:00 PM"
                    {...form.getInputProps(operatingHour.closingHour)}
                  />
                </Group>
                <Checkbox
                  label="closed"
                  mt="sm"
                  {...form.getInputProps("isClosed", { type: "checkbox" })}
                />
              </Stack>
            </>
          );
        })}
      </Stack>
    </>
  );
}
