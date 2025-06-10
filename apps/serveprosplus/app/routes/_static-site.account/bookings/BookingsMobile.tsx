import {
  Box,
  Card,
  Text,
  Group,
  Stack,
  Badge,
  Flex,
  Center,
  Avatar,
  Button,
  ActionIcon,
  Image,
  Divider,
} from "@mantine/core";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "@remix-run/react";
import CustomTabs from "./CustomTabs";
import { RxCaretLeft } from "react-icons/rx";
import { formatDate } from "~/_lib/utils";
import { UserBookings } from "./user-bookings/use-cases/user-bookings";
import { removeUnderscore } from "~/routes/_static-site.company-account/service-provider-prospects/utils/ServiceCategoriesSelectOptions";
import { homeServicePlaceholder } from "~/_images/home-services/placeholders";

type BookingsPageProps = {
  userBookings: UserBookings;
};

const statusColor = (status: string) => {
  let color = "primary";

  switch (status) {
    case "submitted":
      color = "secondary";
      break;
    case "cancelled":
      color = "red.6";
      break;
    case "ongoing":
      color = "accent.4";
      break;
    default:
      break;
  }
  return color;
};

export default function AppointmentsMobile({
  userBookings,
}: BookingsPageProps) {
  const navigate = useNavigate();
  return (
    <>
      <Box id="appointments-page-wrapper">
        <Stack spacing={2}>
          <Card m={4}>
            <Group>
              <ActionIcon
                radius={12}
                bg="neutral.0"
                onClick={() => navigate(-1)}
              >
                <RxCaretLeft size={24} />
              </ActionIcon>
              <Text fw={500} fz={18} color="neutral.7">
                Bookings
              </Text>
            </Group>
          </Card>
          <Card p={0} pb={8}>
            <CustomTabs />
          </Card>
          {userBookings.bookings.map((completeBooking) => {
            const { booking } = completeBooking;
            console.log(booking.createdAt);
            return (
              <Card
                onClick={() => navigate(booking.id)}
                key={booking.id}
                withBorder
                p={0}
                radius={16}
                sx={(theme) => ({
                  border: `1px solid ${theme.fn.lighten(
                    theme.colors.neutral[0],
                    0.4
                  )}`,
                  cursor: "pointer",
                })}
              >
                <Stack spacing={16} p={16}>
                  <Box>
                    <Flex align="flex-start" columnGap={16} pos="relative">
                      <Box pos="absolute" right={0} top="-4px">
                        {/* <Text c="neutral.3" fw={300} fz={14}>
                          {booking.status}
                        </Text> */}
                        <Badge c={statusColor(booking.status)} radius={4}>
                          {booking.status}
                        </Badge>
                      </Box>
                      <Image
                        radius={8}
                        width={60}
                        height={60}
                        src={
                          booking.customerUploadURLs.length > 0
                            ? booking.customerUploadURLs[0]
                            : homeServicePlaceholder(booking.bookingCategory)
                        }
                        alt="Contertop Image"
                      />
                      <Stack spacing={2}>
                        <Group>
                          <Text fw={400} fz={12} c="primary.3">
                            Booking Id
                          </Text>
                          <Text c="secondary" fw={400} fz={12}>
                            #{booking.id.slice(-6)}
                          </Text>
                        </Group>

                        <Text c="neutral.7" fw={500} fz={14}>
                          {removeUnderscore(booking.bookingCategory)}
                        </Text>
                        <Text c="primary.3" fw={400} fz={12}>
                          {booking.serviceAddress}
                        </Text>
                      </Stack>
                    </Flex>
                    {/* <Divider color="neutral.0" /> */}
                  </Box>
                </Stack>
              </Card>
            );
          })}
        </Stack>
      </Box>
    </>
  );
}
