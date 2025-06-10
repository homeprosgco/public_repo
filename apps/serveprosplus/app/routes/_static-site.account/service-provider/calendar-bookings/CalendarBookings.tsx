import { Card, Container, Paper, ScrollArea, SimpleGrid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import ServiceProviderScheduledAppointments from "../appointments/ServiceProviderScheduledAppointments";
import BookingsCalendar from "./BookingCalendar";

export default function CalendarBookings() {
  const { height } = useViewportSize();

  return (
    <>
      <Container
        id="mobile-service-provider-homepage-wrapper"
        bg="primary.0"
        p={0}
      >
        <SimpleGrid cols={1} spacing={0} id="mobile-content-wrapper">
          <Paper shadow="xl">
            <BookingsCalendar />
          </Paper>

          <Card component={ScrollArea} h={height - 354} type="never" pt={0}>
            <ServiceProviderScheduledAppointments showSeeAll={false} />
          </Card>
        </SimpleGrid>
      </Container>
    </>
  );
}
