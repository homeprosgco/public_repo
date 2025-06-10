import { Flex, Stack, Text } from "@mantine/core";
import { SimpleGoogleMap } from "~/client/_shared";
import { useOnboardingFormContext } from "./onboarding-form-context";

export default function OnboardingLocationPage() {
  const form = useOnboardingFormContext();

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={20}>
            What address would you like to use for your account?
          </Text>
          <SimpleGoogleMap
            onPlaceChange={(place) => {
              console.log(place);
              form.setFieldValue("primaryAddress", place);
            }}
            subscribeToAddress={true}
            value={form.values.user.primaryAddress}
          />
        </Stack>
      </Flex>
    </>
  );
}
