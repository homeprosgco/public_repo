import { Flex, Stack, Text, Textarea } from "@mantine/core";
import { useOnboardingFormContext } from "./onboarding-form-context";

export default function OnboardingServiceProviderBioPage() {
  const form = useOnboardingFormContext();

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={20}>
            Create a bio for customers to read to when they visit your profile.
          </Text>
          <Stack w="100%" spacing={24}>
            <Textarea
              placeholder="Describe what your company and service is about"
              label="Company Bio"
              withAsterisk
              autosize
              minRows={12}
              name="companyBio"
              {...form.getInputProps("companyBio")}
            />
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
