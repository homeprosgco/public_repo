import { Flex, Stack, TextInput, Text } from "@mantine/core";
import { useBookingFormContext } from "./booking-form-context";

export default function BookingServiceLocation() {
  const form = useBookingFormContext();

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={28}>
            Let's get started
          </Text>
          <Text c="neutral.5" ta="center" fz={16}>
            In what location can we help provide you with a certified home
            service provider?
          </Text>
        </Stack>
        <Stack>
          <TextInput
            placeholder="Zipcode"
            label="Service Location Zipcode"
            withAsterisk
            {...form.getInputProps("zipcode")}
          />
        </Stack>
      </Flex>
    </>
  );
}
