import { Divider, Image } from "@mantine/core";
import {
  Box,
  Flex,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { AiOutlineUser } from "react-icons/ai";
import { BsClockHistory, BsTelephone, BsTelephoneFill } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import homeServices from "~/_images/home-services";

function JobLeadItem() {
  const theme = useMantineTheme();
  const { neutral, primary, accent, secondary, success, danger } = theme.colors;
  const color = [neutral, primary, accent, secondary, success, danger];
  const colorIndex = Math.floor(Math.random() * color.length);
  const xxSmallScreen = useMediaQuery("(min-width: 360px)");
  const postStatus = ["jus now", "yesterday", "3 days ago", "Friday"];
  const leadStatus = [
    "Accepting offers",
    "Closed for offers",
    "Online Quote",
    "In-Home Estimate",
  ];

  return (
    <>
      <Stack
        sx={{
          border: `1px solid ${color[0][0]}`,
          borderRadius: 8,
          padding: 16,
        }}
      >
        <Group spacing={12} align="flex-start">
          <Image
            src={homeServices.flooring}
            alt="Flooring Lead"
            width={60}
            height={60}
            styles={{
              image: {
                borderRadius: 8,
              },
            }}
          />

          <Box sx={{ flexGrow: 1 }}>
            <Box mb={2}>
              <Flex direction="column">
                <Group spacing={4} align="baseline">
                  <Box c="neutral.5" fz={12} component={AiOutlineUser} />
                  <Text c="neutral.8" fw={500} fz={14}>
                    Donna Noble
                  </Text>
                </Group>
                <Text fz={12} c="primary.3" fw={500}>
                  Laminate Flooring Installation
                </Text>
              </Flex>
            </Box>
            <Stack spacing={4}>
              <Text c="primary.3" fz={12} fw={400}>
                5833 Westpoint rd. apt# 2801
              </Text>
            </Stack>
          </Box>
        </Group>
        <Group align="center">
          <Group spacing={4} align="b">
            <Text c="neutral.5" fz={12}>
              Posted:
            </Text>
            <Text c="neutral.3" fz={12}>
              {postStatus[Math.floor(Math.random() * postStatus.length)]}
            </Text>
            <Text fz={10} c="neutral.5">
              from Boynton Beach
            </Text>
          </Group>
        </Group>
        {/* <Divider color="neutral.0"  /> */}
        <Group position="apart">
          <Text c={color[colorIndex][5]} fz={13} fw={500}>
            {leadStatus[Math.floor(Math.random() * leadStatus.length)]}
          </Text>
          <Group
            spacing={8}
            py={4}
            px={16}
            sx={(theme) => ({
              backgroundColor: theme.colors.secondary[0],
              borderRadius: 8,
            })}
          >
            <Box component={BsTelephone} c="secondary.8" size={14} />
            <Text fz={12} fw={500} c="secondary.8">
              Call Now
            </Text>
          </Group>
        </Group>
      </Stack>
    </>
  );
}

export default function jobLead(jobLead: any, index: number) {
  return <JobLeadItem key={index} />;
}
