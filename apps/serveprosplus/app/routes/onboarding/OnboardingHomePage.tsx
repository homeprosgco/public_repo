import {
  Flex,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

import { useOnboardingFormContext } from "./onboarding-form-context";

export default function OnboardingHomePage() {

  const form = useOnboardingFormContext();
  
  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={28}>
            Let's get started
          </Text>
          <Text c="neutral.5" ta="center" fz={16}>
            You're all ready to start a new Serve Pros Plus account to help find
            local home professsionals in the the Palm Beach County area.
          </Text>
        </Stack>
        <Stack>
          <TextInput placeholder="Your name" label="Full name" withAsterisk {...form.getInputProps('user.fullname')} />
        </Stack>
      </Flex>
    </>
  );
}
