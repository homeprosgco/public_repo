import { Flex, Stack, Text, Textarea, TextInput } from "@mantine/core";
import { useBookingFormContext } from "./booking-form-context";

export default function BookingProjectDescriptionInput() {
  const form = useBookingFormContext();

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={28}>
            Project Details
          </Text>
          <Text c="neutral.5" ta="left" fz={16}>
            Anything else the Pros should know?
          </Text>
        </Stack>
        <Stack>
          <TextInput
            placeholder="Give a short description"
            label="Project Short Description"
            description="ex. Bedroom floor install, Kitchen faucet replacement, Multiple small projects"
            withAsterisk
            {...form.getInputProps("projectTitle")}
          />
          <Textarea
            description="Additional details help pros provide the right prices and service"
            placeholder="Tell us a little more about your project"
            label="Project Description"
            withAsterisk
            {...form.getInputProps("projectDescription")}
            autosize
            minRows={12}
          />
        </Stack>
      </Flex>
    </>
  );
}
