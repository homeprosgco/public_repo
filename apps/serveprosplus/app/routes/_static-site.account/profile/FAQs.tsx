import { ActionIcon, Text, Card, Flex, Group, Stack } from "@mantine/core";
import { useNavigate } from "@remix-run/react";
import { RxCaretLeft } from "react-icons/rx";
import { Accordion } from "@mantine/core";
import { AppSearchInput } from "~/client/__ui/inputs";
import FixedScreen from "~/client/_layouts/FixedScreen";

export default function FAQsPage() {
  const navigate = useNavigate();

  return (
    <>
      <FixedScreen>
        <Flex direction="column" h="100%">
          <Card m={4}>
            <Stack spacing={28}>
              <Group>
                <ActionIcon
                  radius={12}
                  bg="neutral.0"
                  onClick={() => navigate(-1)}
                >
                  <RxCaretLeft size={24} />
                </ActionIcon>
                <Text fw={700} fz={20} color="neutral.7">
                  Faq's
                </Text>
              </Group>
              <AppSearchInput />
            </Stack>
          </Card>
          <Card sx={{ flex: "1 0 auto"}} pb={24}>
            <Accordion
              defaultValue="customization"
              styles={(theme) => ({
                label: {
                  fontWeight: 500,
                  color: theme.colors.neutral[7]
                },
                content: {
                  color: theme.colors.neutral[5]
                },
                chevron: {
                  color: theme.colors.neutral[3]
                }
              })}
            >
              <Accordion.Item value="customization">
                <Accordion.Control>Are there any hidden charges?</Accordion.Control>
                <Accordion.Panel>
                  Colors, fonts, shadows and many other parts are customizable
                  to fit your design needs
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="flexibility">
                <Accordion.Control>Can I cancel a booking</Accordion.Control>
                <Accordion.Panel>
                  Configure components appearance and behavior with vast amount
                  of settings or overwrite any part of component styles
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="focus-ring">
                <Accordion.Control>How can I reach your help center?</Accordion.Control>
                <Accordion.Panel>
                  With new :focus-visible pseudo-class focus ring appears only
                  when user navigates with keyboard
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="booking-change">
                <Accordion.Control>How can I change my booking</Accordion.Control>
                <Accordion.Panel>
                  With new :focus-visible pseudo-class focus ring appears only
                  when user navigates with keyboard
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Card>
        </Flex>
      </FixedScreen>
    </>
  );
}
