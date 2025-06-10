import { Carousel } from "@mantine/carousel";
import { Stack, Group, Anchor, Flex, Text, Paper, Image } from "@mantine/core";
import { Link } from "@remix-run/react";
import { RxDoubleArrowRight } from "react-icons/rx";
import demoRepairs from "~/_images/demo/booking";

export default function ServiceProviderPendingJobLeads() {
  return (
    <>
      <Stack>
        <Group position="apart">
          <Text fw={500} fz={18} c="neutral.7`">
            New Leads
          </Text>
          <Anchor
            component={Link}
            to="/account/service-provider/00vuw0v9rtjrej/job-leads"
          >
            <Flex c="secondary" columnGap={8} align="center" fw={500}>
              <Text fz={12}>View All</Text>
              <RxDoubleArrowRight />
            </Flex>
          </Anchor>
        </Group>
        <Carousel
          slideSize="50%"
          height="auto"
          slideGap="sm"
          loop
          align="start"
          slidesToScroll={2}
          styles={{
            controls: {
              display: "none"
            }
          }}
        >
          <Carousel.Slide>
            <Paper
              p="sm"
              shadow="sm"
              m={8}
              component={Link}
              to="/account/bookings/safjw09qw909da"
            >
              <Stack>
                <Image
                  radius="sm"
                  src={demoRepairs.appliancerepair}
                  alt="Appliance Repair"
                  height={80}
                />
                <Stack spacing={4}>
                  <Stack spacing={0}>
                    <Text fz={14} c="neutral.8" fw={500}>
                      Louisa Sullivan
                    </Text>
                    <Text fz={11} c="neutral.4">
                      Greenacres, FL
                    </Text>
                  </Stack>
                  <Stack spacing={0}>
                    <Text fz={12} c="secondary.8" fw={500}>
                      Appliance
                    </Text>
                    <Text fz={12} c="neutral.4" fw={400}>
                      Replacement
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Paper>
          </Carousel.Slide>
          <Carousel.Slide>
            <Paper
              p="sm"
              shadow="sm"
              m={8}
              component={Link}
              to="/account/bookings/safjw09qw909da"
            >
              <Stack>
                <Image
                  radius="sm"
                  src={demoRepairs.washingmachinerepair}
                  alt="Appliance Repair"
                  height={80}
                />
                <Stack spacing={4}>
                  <Stack spacing={0}>
                    <Text fz={14} c="neutral.8" fw={500}>
                      Janet Dublin
                    </Text>
                    <Text fz={11} c="neutral.4">
                      Palm Springs, FL
                    </Text>
                  </Stack>
                  <Stack spacing={0}>
                    <Text fz={12} c="secondary.8" fw={500}>
                      Appliance
                    </Text>
                    <Text fz={12} c="neutral.4" fw={400}>
                      Repair
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Paper>
          </Carousel.Slide>
        </Carousel>
      </Stack>
    </>
  );
}
