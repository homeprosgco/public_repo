import { Flex, Stack, Text } from "@mantine/core";
import { AppDropzone } from "~/client/__ui/components/dropzone/AppDropzone";
import { useBookingFormContext } from "./booking-form-context";
import { BookingDropzoneProps } from "./BookingMultiStepForm";

export default function BookingProjectUploads({dropzoneProps, files, onFilesDrop}: BookingDropzoneProps) {
  const form = useBookingFormContext();

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={28}>
            Project Photos
          </Text>
          <Text c="neutral.5" ta="center" fz={16}>
            Photos help pros understand the description of your project
          </Text>
        </Stack>
        <Stack>
          <AppDropzone dropzoneProps={dropzoneProps} files={files} onFilesDrop={onFilesDrop} />
        </Stack>
      </Flex>
    </>
  );
}
