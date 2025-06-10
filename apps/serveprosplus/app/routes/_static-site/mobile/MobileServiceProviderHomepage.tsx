import {
  Avatar,
  Box,
  Card,
  Container,
  Flex,
  Group,
  Indicator,
  SimpleGrid,
  Stack,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { GoVerified } from "react-icons/go";
import { RxDoubleArrowRight } from "react-icons/rx";
import StarRatingGroup from "~/client/__ui/components/star-rating/StarRatingGroup";
import MobileHomePageHeader from "./home-page-header/MobileHomePageHeader";
import ServiceProviderMobileStatHeader from "./service-provider/ServiceProviderMobileStatHeader";
import ServiceProviderOnlineQuoteRequests from "./service-provider/ServiceProviderOnlineQuoteRequests";
import ServiceProviderPendingJobLeads from "./service-provider/ServiceProviderPendingJobLeads";
import ServiceProviderScheduledAppointments from "../../_static-site.account/service-provider/appointments/ServiceProviderScheduledAppointments";

export default function MobileServiceProviderHomePage() {
  return (
    <>
      <Container
        id="mobile-service-provider-homepage-wrapper"
        bg="primary.0"
        p={0}
      >
        <SimpleGrid cols={1} spacing={4} m={4} id="mobile-content-wrapper">
          <Card>
            <Stack spacing={48}>
              <Stack>
                <MobileHomePageHeader location="Royal Palm Beach, FL" />
              </Stack>
            </Stack>
          </Card>
          <Card py={36}>
            <ServiceProviderMobileStatHeader />
          </Card>
          <Card>
            <ServiceProviderPendingJobLeads />
          </Card>
          <Card>
            <ServiceProviderOnlineQuoteRequests />
          </Card>
          <Card>
            <ServiceProviderScheduledAppointments />
          </Card>
        </SimpleGrid>
      </Container>
    </>
  );
}
