import {
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Stepper,
  Text,
  Image,
} from "@mantine/core";
import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { useFetcher, Link } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";
import successicon from "~/_images/demo/success-icon.png";
import { TbArrowRight, TbArrowLeft } from "react-icons/tb";
import { FullScreen } from "~/client/_layouts";
import {
  useOnboardingForm,
  OnboardingFormProvider,
} from "../onboarding/onboarding-form-context";
import OnboardingAccountTypePage from "../onboarding/OnboardingAccountTypePage";
import OnboardingHomePage from "../onboarding/OnboardingHomePage";
import OnboardingLocationPage from "../onboarding/OnboardingLocationPage";
import OnboardingServiceProviderBioPage from "../onboarding/OnboardingServiceProviderBioPage";
import OnboardingServiceProviderPage from "../onboarding/OnboardingServiceProviderPage";
import { AccountType } from "@prisma/client";
import { userData } from "~/_lib/integrations/faker/userData";
import { goldUserData } from "~/_lib/integrations/faker";
import { onboardUser } from "../onboarding/use-case/onboard-user";
import { getUser } from "../_auth/supabase.server";
import { prisma } from "~/_server/prisma/prisma.server";
import { findUser } from "../_static-site.account/profile/use-case/find-user.server";

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const authUser = await getUser({ request, response });

  console.log(authUser);

  // if (authUser) {
  //   const { user } = await findUser(authUser.id);
  //   console.log(user);
  //   if (user) {
  //     return redirect("/");
  //   }
  // }

  return response;
};

export const action = async ({ request }: ActionArgs) => {
  const response = new Response();
  const formData = await request.formData();
  const userOnboarding = JSON.parse(formData.get("userOnboarding") as string);
  console.log(userOnboarding);

  const authUser = await getUser({ request, response });

  if (authUser) {
    try {
      const onboardingUser = await onboardUser(
        authUser,
        userOnboarding,
        prisma
      );
      console.log("new user: ", onboardingUser);
      return { onboardingUser };
    } catch (error) {}
  }

  return response;
};

export default function OnboardingHomepageRoute() {
  const [active, setActive] = useState(2);
  const [accountType, setAccountType] = useState<AccountType>(AccountType.Homeowner);
  const stepper = useRef<HTMLDivElement>(null);
  const [maxActive, setMaxActive] = useState(2);

  const form = useOnboardingForm({
    initialValues: {
      companyBio: "",
      companyName: "",
      primaryTelephone: "",
      serviceCategories: [],
      serviceDetails: [],
      user: {
        fullname: "",
        accountType: AccountType.Homeowner,
        primaryAddress: "",
      },
      website: {
        websiteURL: "",
      },
    },
  });

  const onboardingForm = useFetcher();

  useEffect(() => {
    console.log(form.values);
    console.log(active);
    if (active === 5) {
      console.log(form.validate());
      console.log(form.values);
      // onboardingForm.submit(
      //   { userOnboarding: JSON.stringify(form.values) },
      //   { action: "/onboarding?index", method: "post", replace: true }
      // );
    }
    // form.setValues({ user: { ...userData() } });
    const goldUser = userData();
    form.setValues({ user: { ...goldUser } });
    setAccountType(goldUser.accountType);
  }, [active]);

  const nextStep = () =>
    setActive((current) => {
      console.log(current);
      console.log(accountType)
      if (current === 2 && accountType === AccountType.Homeowner) {
        return 5;
      } else {
        return current + 1;
      }
    });

  const prevStep = () =>
    setActive((current) => {
      current > 0 ? current - 1 : current;
      if (current === 5 && accountType === AccountType.Homeowner) {
        return 2;
      } else {
        if (current === 5 && accountType !== AccountType.Service_Provider) {
          return 3;
        } else {
          if (current > 0) {
            return current - 1;
          } else {
            return current;
          }
        }
      }
    });

  return (
    <>
      <FullScreen>
        <Text p={16} fw={500} fz={18} color="neutral.7">
          Welcome
        </Text>
        <Flex
          h="90%"
          align="center"
          justify="center"
          px={16}
          maw={500}
          mx="auto"
        >
          <OnboardingFormProvider form={form}>
            <Stack pos="relative" w="100%">
              <Flex
                sx={{ flex: "1 0 auto" }}
                direction="column"
                justify="center"
                rowGap={48}
              >
                <Stepper
                  active={active}
                  onStepClick={setActive}
                  breakpoint="xs"
                  styles={{
                    steps: {
                      display: "none",
                    },
                  }}
                  ref={stepper}
                >
                  <Stepper.Step
                    label="First step"
                    description="Personal Details"
                  >
                    <OnboardingHomePage />
                  </Stepper.Step>
                  <Stepper.Step label="Second step" description="Account Type">
                    <OnboardingAccountTypePage />
                  </Stepper.Step>
                  <Stepper.Step
                    label="Third step"
                    description="Account address"
                  >
                    <OnboardingLocationPage />
                  </Stepper.Step>
                  <Stepper.Step
                    label="Forth step"
                    description="Company information"
                  >
                    <OnboardingServiceProviderPage
                      isServiceProvider={accountType === AccountType.Service_Provider}
                    />
                  </Stepper.Step>
                  <Stepper.Step label="Fifth step" description="Company bio">
                    <OnboardingServiceProviderBioPage />
                  </Stepper.Step>
                  <Stepper.Completed>
                    <Flex
                      direction="column"
                      align="center"
                      sx={{ flex: "1 0 auto" }}
                      w="100%"
                      mah={400}
                      rowGap={64}
                    >
                      <Box>
                        <Image width={112} src={successicon} />
                      </Box>

                      <Stack align="center" maw={250} spacing={32}>
                        <Stack spacing={16} align="center">
                          <Text
                            c="neutral.8"
                            lh={1.1}
                            ta="center"
                            maw={200}
                            fw={700}
                            fz={18}
                          >
                            Your Account is setup.
                          </Text>
                          <Text ta="center" c="neutral.6">
                            We look forward to helping you find local home
                            service providers in the Palm Beach County area.
                          </Text>
                        </Stack>
                      </Stack>
                    </Flex>
                  </Stepper.Completed>
                </Stepper>

                <Group position={active > 0 && active < 5 ? "apart" : "right"}>
                  {active > 0 && active < 5 ? (
                    <Button
                      leftIcon={<TbArrowLeft />}
                      variant="default"
                      onClick={prevStep}
                      size="md"
                    >
                      Back
                    </Button>
                  ) : null}

                  {active < 5 ? (
                    <Button
                      size="md"
                      bg="secondary.8"
                      sx={(theme) => ({
                        "&:hover": {
                          backgroundColor: theme.fn.darken(
                            `${theme.colors.secondary[8]}`,
                            0.6
                          ),
                        },
                      })}
                      onClick={nextStep}
                      rightIcon={<TbArrowRight />}
                    >
                      Next step
                    </Button>
                  ) : (
                    <Button
                      component={Link}
                      to="/"
                      size="md"
                      bg="secondary.8"
                      sx={(theme) => ({
                        "&:hover": {
                          backgroundColor: theme.fn.darken(
                            `${theme.colors.secondary[8]}`,
                            0.6
                          ),
                        },
                      })}
                    >
                      FINISH
                    </Button>
                  )}
                </Group>
              </Flex>
            </Stack>
          </OnboardingFormProvider>
        </Flex>
      </FullScreen>
    </>
  );
}
