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
import { BsClockHistory } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";

function ServiceProviderAppointmentItem() {
  const theme = useMantineTheme();
  const { neutral, primary, accent, secondary } = theme.colors;
  const color = [neutral, primary, accent, secondary];
  const colorIndex = Math.floor(Math.random() * color.length);
  const xxSmallScreen = useMediaQuery("(min-width: 360px)");

  return (
    <>
      <Group
        spacing={16}
        sx={{
          border: `1px solid ${color[0][0]}`,
          borderRadius: 8,
          padding: 16,
        }}
      >
        <Stack spacing={0} align="center" bg={color[colorIndex][0]} p={12} sx={{ borderRadius: 8}}>
          <Text fz={12} c={color[colorIndex][6]} fw={500}>
            MON
          </Text>
          <Text c={color[colorIndex][5]} fz={12} fw={500}>
            05
          </Text>
        </Stack>
        {xxSmallScreen ? (
          <Box w={1} h="50px" sx={{ backgroundColor: color[colorIndex][5] }} />
        ) : null}

        <Box sx={{ flexGrow: 1 }}>
          <Box>
            <Flex justify="space-between" direction={{ 200: "column", 360: "row"}}>
              <Group spacing={4} align="baseline">
                <Box c="neutral.5" fz={12} component={AiOutlineUser} />
                <Text c="neutral.8" fw={500} fz={14}>
                  Donna Noble
                </Text>
              </Group>
              <Group spacing={xxSmallScreen ? 8 : 2} align="center">
                <Box
                  c={color[colorIndex][3]}
                  fz={8}
                  component={BsClockHistory}
                />
                <Text c={color[colorIndex][3]} fw={500} fz={11}>
                  10:30 - 11:00 AM
                </Text>
              </Group>
            </Flex>
          </Box>
          <Stack spacing={4}>
            <Group spacing={4} align="baseline">
              <Box c="neutral.5" fz={12} component={TfiLocationPin} />
              <Text c="primary.3" fz={12} fw={400}>
                5833 Westpoint rd. apt# 2801
              </Text>
            </Group>
            <Text c="neutral.5" fz={11}>
              Laminate Flooring installation Estimate
            </Text>
          </Stack>
        </Box>
      </Group>
    </>
  );
}

export default function serviceProviderAppointments(
  appointment: any,
  index: number
) {
  return <ServiceProviderAppointmentItem key={index} />;
}
