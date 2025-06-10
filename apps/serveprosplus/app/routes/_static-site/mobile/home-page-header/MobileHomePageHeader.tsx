import {
  Group,
  Box,
  Stack,
  Text,
  Flex,
  ActionIcon,
  UnstyledButton,
  ThemeIcon,
} from "@mantine/core";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MobileHomePageHeaderProps } from "./MobileHomePageHeaderProps";

export default function MobileHomePageHeader({
  location,
}: MobileHomePageHeaderProps) {
  return (
    <>
      <Group position="apart">
        <Group>
          <Box c="primary.4" pt={4}>
            <FaMapMarkerAlt />
          </Box>
          <Stack spacing={0}>
            <Text fz={10} lh={1.2} c="primary.3">
              Current Location
            </Text>
            <Text fz={12} fw={500} lh={1.2} c="primary.5">
              {location}
            </Text>
          </Stack>
        </Group>
        <Group align="center" spacing={8}>
          <Box c="primary.3" sx={{ display: "flex", alignItems: "center" }}>
            <IoMdNotificationsOutline  size={20} />
          </Box>
        </Group>
      </Group>
    </>
  );
}
