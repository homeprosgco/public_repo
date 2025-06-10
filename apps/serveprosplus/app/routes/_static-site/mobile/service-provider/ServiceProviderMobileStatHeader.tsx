import {
  Stack,
  Group,
  Indicator,
  Avatar,
  Title,
  Box,
  Flex,
  Text,
} from "@mantine/core";
import { GoVerified } from "react-icons/go";
import StarRatingGroup from "~/client/__ui/components/star-rating/StarRatingGroup";

export default function ServiceProviderMobileStatHeader() {
  return (
    <>
      <Stack spacing={24}>
        <Group align="start" position="apart" pos="relative">
          <Group align="start">
            <Indicator
              label="3"
              color="gray"
              position="bottom-start"
              size={12}
              withBorder
              styles={(theme) => ({
                common: {
                  bottom: 10,
                  left: 5,
                  height: 20,
                  border: `1px solid ${theme.colors.secondary[8]}`,
                  backgroundColor: theme.white,
                  color: theme.colors.secondary[8],
                },
              })}
            >
              <Avatar
                variant="outline"
                radius="xl"
                size="lg"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              />
            </Indicator>
            <Stack spacing={0}>
              <Title order={4} c="neutral.8" lh={1}>
                Joshua Kamar
              </Title>
              <Text fz={14} fw={400} c="neutral.5">
                Stevenson's & Sons Roof Repair
              </Text>
              <Box>
                <Group spacing={8} position="apart">
                  <Group spacing={4} align="center">
                    <Text c="yellow" fw={500} fz={12} lh=".2px">
                      4.6
                    </Text>
                    <Group spacing={1}>
                      <StarRatingGroup size={12} />
                    </Group>
                  </Group>
                  <Text c="neutral.5" fz={12}>
                    81 reviews
                  </Text>
                </Group>
              </Box>
            </Stack>
          </Group>
          <Stack spacing={0} align="center" pos="absolute" right={0}>
            <Box pos="relative" mt={8}>
              <Box
                bg="yellow"
                w={16}
                h={10}
                left={2}
                top={5}
                pos="absolute"
              ></Box>
              <Box
                pos="relative"
                c="secondary.8"
                component={GoVerified}
                size={20}
                z={5}
              />
            </Box>
          </Stack>
        </Group>
        <Stack>
          <Group mt={4}>
            <Text fz={12} fw={500} c="primary.3">
              Membership Since
            </Text>
            <Text fz={12} c="primary.3">
              Dec. 2022
            </Text>
          </Group>
          <Flex justify="space-between">
            <Stack spacing={0}>
              <Title fw={500} c="neutral.8" order={6} ta="center">
                42
              </Title>
              <Text fz={12} c="primary">
                Total Leads
              </Text>
            </Stack>
            <Box
              sx={(theme) => ({
                borderRight: `1px solid ${theme.colors.neutral[0]}`,
              })}
            />
            <Stack spacing={0}>
              <Title fw={500} c="neutral.8" order={6} ta="center">
                15
              </Title>
              <Text fz={12} c="primary">
                Appointments Booked
              </Text>
            </Stack>
            <Box
              sx={(theme) => ({
                borderRight: `1px solid ${theme.colors.neutral[0]}`,
              })}
            />
            <Stack spacing={0}>
              <Title fw={500} c="neutral.8" order={6} ta="center">
                21
              </Title>
              <Text fz={12} c="primary">
                Jobs Quoted
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
}
