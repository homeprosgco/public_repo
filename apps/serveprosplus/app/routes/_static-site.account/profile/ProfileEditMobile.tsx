import {
  ActionIcon,
  Avatar,
  Box,
  Card,
  Center,
  Container,
  Flex,
  Indicator,
  Progress,
  Stack,
  Title,
  Text,
  Space,
  ScrollArea,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useNavigate } from "@remix-run/react";
import { MdPhotoCamera } from "react-icons/md";
import { RxCaretLeft } from "react-icons/rx";
import FixedScreen from "~/client/_layouts/FixedScreen";
import profileAvatar from "~/_images/demo/avatar-1.jpg";
import { useUpdateViewportHeight } from "~/_lib/hooks";
import GeneralInfo from "./GeneralInfo";

export default function ProfileEditMobile() {
  const navigate = useNavigate();
  const viewportHeight = useUpdateViewportHeight();
  const { height, width } = useViewportSize();

  return (
    <>
      <FixedScreen>
        <ScrollArea style={{ width: width - 16, height }} type="never">
          <Container p={4} pb={24}>
            <Stack spacing={4}>
              <Flex mih={56} align="center">
                <ActionIcon radius={12} onClick={() => navigate(-1)}>
                  <RxCaretLeft size={24} />
                </ActionIcon>
              </Flex>

              <Title order={4} c="neutral.8">
                Edit Profile
              </Title>
            </Stack>
            <Space h={24} />
            <Stack>
              <Stack>
                <Card p="lg" radius="md">
                  <Stack>
                    <Center>
                      <Indicator
                        inline
                        position="bottom-end"
                        offset={16}
                        label={
                          <Center>
                            <MdPhotoCamera size={16} />
                          </Center>
                        }
                        size={16}
                        styles={(theme) => ({
                          common: {
                            backgroundColor: theme.white,
                            color: theme.colors.primary[6],
                            boxShadow: theme.shadows.sm,
                            padding: 8,
                            width: 24,
                            height: 24,
                          },
                        })}
                      >
                        <Box
                          p={2}
                          sx={(theme) => ({
                            border: `1px solid ${theme.colors.primary[2]}`,
                            borderRadius: 999,
                          })}
                        >
                          <Avatar
                            src={profileAvatar}
                            alt="it's me"
                            radius={160}
                            size={100}
                          />
                        </Box>
                      </Indicator>
                    </Center>
                    <Center>
                      <Stack spacing={0}>
                        <Text fw={500} fz={16} ta="center" color="primary">
                          Anna Adame
                        </Text>
                        <Text fw={300} fz={13} ta="center" color="primary">
                          Lead Designer / Developer
                        </Text>
                      </Stack>
                    </Center>
                  </Stack>
                </Card>
                <Card>
                  <GeneralInfo />
                </Card>
              </Stack>
            </Stack>
          </Container>
        </ScrollArea>
      </FixedScreen>
    </>
  );
}
