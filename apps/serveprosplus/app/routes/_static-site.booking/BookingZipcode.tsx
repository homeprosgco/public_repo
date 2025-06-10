import { Flex, Stack, TextInput, Text } from "@mantine/core";
import { useBookingFormContext } from "./booking-form-context";

export default function BookingZipcodeInput() {
  const form = useBookingFormContext();

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={28}>
            Let's get started
          </Text>
          <Text c="neutral.5" ta="left" fz={16}>
            What is the location of your project?
          </Text>
        </Stack>
        <Stack>
          <TextInput
            name="zipcode"
            description="We use your Postal Code to find Pros close to your home"
            placeholder="Zipcode"
            label="Service Location Zipcode"
            withAsterisk
            {...form.getInputProps("zipcode")}
            autoFocus
            aria-label="Service Location Zipcode"
          />
        </Stack>
      </Flex>
    </>
  );
}
