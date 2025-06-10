import {
  Button,
  Flex,
  Grid,
  Stack,
  TextInput,
  Text,
  ActionIcon,
  Box,
  Card,
  Group,
  ScrollArea,
} from "@mantine/core";
import { Link, useNavigate } from "@remix-run/react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import FixedScreen from "~/client/_layouts/FixedScreen";

export default function ChangePassword() {
  const navigate = useNavigate();

  return (
    <>
      <FixedScreen>
        <Flex direction="column">
          <Card m={4}>
            <Group spacing={4}>
              <ActionIcon onClick={() => navigate(-1)} c="danger.3">
                <RxCaretLeft size={24} />
              </ActionIcon>
              <Button variant="subtle" c="danger.3" fw={400} px={0} onClick={() => navigate(-1)} sx={{
                '&:hover': {
                  backgroundColor: "transparent"
                }
              }}>
                Cancel
              </Button>
            </Group>
          </Card>
          <Card m={4}>
            <Stack>
              <Stack>
                <Text c="neutral.7" fw={700} fz={18}>
                  Change Password
                </Text>
                <Text fw={400} c="neutral.5" ta="left" fz={16}>
                  Can't remember password?
                </Text>
              </Stack>
              <Stack>
                <Grid>
                  <Grid.Col xs={12} lg={4}>
                    <TextInput
                      label="Old Password"
                      placeholder="Enter current password"
                    />
                  </Grid.Col>
                  <Grid.Col xs={12} lg={4}>
                    <TextInput
                      label="New Password"
                      placeholder="Enter new password"
                    />
                  </Grid.Col>
                  <Grid.Col xs={12} lg={4}>
                    <TextInput
                      label="Confirm Password"
                      placeholder="Confirm password"
                    />
                  </Grid.Col>
                </Grid>

                <Flex direction="row" justify="center">
                  <Button mt={24} color="primary" w={328} maw={328}>
                    Update Password
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Card>
        </Flex>
      </FixedScreen>
    </>
  );
}
