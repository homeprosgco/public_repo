import {
  Card,
  Container,
  Flex,
  Group,
  Title,
  Text,
  Stack,
  Switch,
} from "@mantine/core";
import FixedScreen from "~/client/_layouts/FixedScreen";
import { SendNotification } from "~/utils/client/pwa-utils.client";

export default function Settings() {
  async function sendNotification() {
    await SendNotification("testing", { body: "test", silent: false });
  }

  return (
    <>
      <FixedScreen>
        <Container p={8}>
          <Flex direction="column" rowGap={24}>
            <Flex sx={{ flex: "none" }}>
              <Title order={3} c="neutral.8">
                Settings
              </Title>
            </Flex>
            <Stack spacing={16}>
              <Text tt="uppercase" c="neutral.7" fw={500} fz={12}>
                Notifications
              </Text>
              <Flex direction="column" rowGap={8}>
                <Card>
                  <Stack>
                    <Text fw={500} c="primary">
                      Activity
                    </Text>
                    <Group position="apart">
                      <Text c="primary">Email alerts</Text>
                      <Switch size="sm" onLabel="ON" offLabel="OFF" />
                    </Group>
                    <Group position="apart">
                      <Text c="primary">Push notifications</Text>
                      <Switch size="sm" onLabel="ON" offLabel="OFF" onChange={sendNotification} />
                    </Group>
                  </Stack>
                </Card>
                <Card>
                  <Stack>
                    <Text fw={500} c="primary">
                      Application
                    </Text>
                    <Group position="apart">
                      <Text c="primary">News and announcements</Text>
                      <Switch size="sm" onLabel="ON" offLabel="OFF" />
                    </Group>
                    <Group position="apart">
                      <Text c="primary">System Updates</Text>
                      <Switch size="sm" onLabel="ON" offLabel="OFF" />
                    </Group>
                  </Stack>
                </Card>
              </Flex>
            </Stack>
          </Flex>
        </Container>
      </FixedScreen>
    </>
  );
}
