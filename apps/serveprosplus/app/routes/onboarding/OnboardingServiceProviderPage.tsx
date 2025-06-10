import { Flex, Select, Stack, Text, TextInput } from "@mantine/core";
import { serviceCategories } from "../_static-site.company-account/service-provider-prospects/utils";
import { serviceCategorySelectOptions } from "../_static-site.company-account/service-provider-prospects/utils/ServiceCategoriesSelectOptions";
import { useOnboardingFormContext } from "./onboarding-form-context";

type OnboardingServiceProviderPageProps = {
  isServiceProvider: boolean;
};

export default function OnboardingServiceProviderPage({
  isServiceProvider = false,
}: OnboardingServiceProviderPageProps) {

  const form = useOnboardingFormContext();
  
  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={20}>
            Tell us abount your company
          </Text>
          <Stack w="100%" spacing={24}>
            <TextInput
              placeholder="Organization Name"
              label="Company Name"
              withAsterisk
              {...form.getInputProps("companyName")}
            />
            <TextInput
              placeholder="xxx-xxx-xxxx"
              label="Primary Phone Number"
              withAsterisk
              {...form.getInputProps("primaryTelephone")}
            />
            {isServiceProvider ? (
              <Select
                label="Choose your service category"
                placeholder="Service Category"
                data={serviceCategories}
                {...form.getInputProps("serviceCategories")}
              />
            ) : null}

            <TextInput placeholder="companywebsite.com" label="Website" {...form.getInputProps("website.websiteURL")} />
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
