import { Stack, Group, Anchor, Flex, Text, Drawer } from "@mantine/core";
import { Link } from "@remix-run/react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { ScheduledAppointmentsProps } from "./ScheduledAppointmentsProps";
import serviceProviderAppointments from "./ServiceProviderAppointmentItem";

export default function ServiceProviderScheduledAppointments({
  showSeeAll = true,
}: ScheduledAppointmentsProps) {
  return (
    <>
      <Stack>
        <Group position="apart" pt={12}>
          <Text fw={500} fz={18} c="neutral.7`">
            Appointments
          </Text>
          {showSeeAll ? (
            <Anchor
              component={Link}
              to="/account/service-provider/00vuw0v9rtjrej/calendar-bookings"
            >
              <Flex c="secondary" columnGap={8} align="center" fw={500}>
                <Text fz={12}>View All</Text>
                <RxDoubleArrowRight />
              </Flex>
            </Anchor>
          ) : null}
        </Group>
        {Array.from({ length: 8 }).map(serviceProviderAppointments)}
      </Stack>
    </>
  );
}
