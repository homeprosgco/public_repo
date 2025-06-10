import {
  ActionIcon,
  Anchor,
  Box,
  Card,
  Flex,
  Group,
  Stack,
  Text,
  Image,
  CardSection,
  Button,
  Grid,
  Modal,
  Textarea,
  TextInput,
  ScrollArea,
  AspectRatio,
} from "@mantine/core";
import { useNavigate } from "@remix-run/react";
import { BsTelephone, BsCalendarFill } from "react-icons/bs";
import { RxCaretLeft } from "react-icons/rx";
import bathroomremodel from "~/_images/home-services/bathroom_remodel.png";
import interiordesign from "~/_images/home-services/interiordesign.jpg";
import fauxpainting from "~/_images/home-services/kitchen-remodel.png";
import { IoInformationCircle } from "react-icons/io5";
import { MdDescription, MdLocationPin } from "react-icons/md";
import { Carousel } from "@mantine/carousel";
import { RiVipCrownLine } from "react-icons/ri";
import FixedScreen from "~/client/_layouts/FixedScreen";
import { SimpleGoogleMap } from "~/client/_shared";
import { useState } from "react";
import { useUpdateViewportHeight } from "~/_lib/hooks";
import useBookingOnlineQuoteForm from "./booking/online-quotes/hook/useBookingOnlineQuoteForm";
import OnlineQuoteFormModal from "./booking/online-quotes/modal-form/OnlineQuoteFormModal";
import { AccountType, Booking, User } from "@prisma/client";
import { removeUnderscore } from "~/routes/_static-site.company-account/service-provider-prospects/utils/ServiceCategoriesSelectOptions";
import { capitalize, formatDate } from "~/_lib/utils";
import format from "date-fns/format";
import { homeServicePlaceholder } from "~/_images/home-services/placeholders";

const images = [bathroomremodel, interiordesign, fauxpainting];

type BookingDetailsMobileProps = {
  appUser: User;
  booking: Booking;
};

export default function BookingDetailsMobile({
  appUser,
  booking,
}: BookingDetailsMobileProps) {
  const navigate = useNavigate();
  const viewportHeight = useUpdateViewportHeight();
  const [quoteFormOpened, setQuoteForm] = useState<boolean>(false);

  const { form, submitQuote, onlineQuoteForm } = useBookingOnlineQuoteForm();

  function setQuoteFormOpened() {
    // console.log(!quoteFormOpened);
    setQuoteForm(!quoteFormOpened);
  }

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Box>
        <Image src={url} />
      </Box>
    </Carousel.Slide>
  ));

  return (
    <>
      <OnlineQuoteFormModal
        quoteFormOpened={quoteFormOpened}
        setQuoteFormOpened={setQuoteFormOpened}
        submitQuote={submitQuote}
        form={form}
        onlineQuoteForm={onlineQuoteForm}
      />
      <FixedScreen>
        <Flex
          direction="column"
          sx={(theme) => ({
            backgroundColor: theme.fn.lighten(
              `${theme.colors.neutral[0]}`,
              0.6
            ),
            paddingBottom: 4,
            position: "relative",
          })}
        >
          <ScrollArea.Autosize maxHeight={viewportHeight} type="never">
            <Stack spacing={0} pb={16}>
              <Card mx={4} my={2}>
                <Group position="apart">
                  <ActionIcon onClick={() => navigate(-1)} c="neutral.8">
                    <RxCaretLeft size={24} />
                  </ActionIcon>
                  <Text fw={500} fz={20} c="neutral.7">
                    Booking Details
                  </Text>
                  <Flex justify="end" columnGap={16}>
                    <Anchor href={booking.contactTelephone}>
                      <Box component={BsTelephone} c="primary.2" size={24} />
                    </Anchor>
                  </Flex>
                </Group>
              </Card>
              <Card mx={4} my={2}>
                <CardSection>
                  {booking.customerUploadURLs.length > 0 ? (
                    <Carousel
                      withIndicators
                      loop
                      styles={(theme) => ({
                        viewport: {
                          height: 200,

                          [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
                            height: 300,
                          },
                        },
                      })}
                    >
                      {slides}
                    </Carousel>
                  ) : (
                    <AspectRatio ratio={1 / 1} sx={{ maxWidth: 320 }} mx="auto">
                      <Image
                        src={homeServicePlaceholder(booking.bookingCategory)}
                        radius={8}
                      />
                    </AspectRatio>
                  )}
                </CardSection>
                <Group mt={16} position="apart">
                  <Stack spacing={8}>
                    <Text fw={500} c="neutral.8">
                      {booking.customerName}
                    </Text>
                    <Stack spacing={0}>
                      <Text fz={14} c="neutral.5" lh={1.1}>
                        {booking.serviceAddress.split(",").slice(0, 1).join()}
                      </Text>
                      <Text fz={14} c="neutral.5" lh={1.1}>
                        {booking.serviceAddress.split(",").slice(1).join()}
                      </Text>
                    </Stack>
                  </Stack>
                  {appUser.accountType === AccountType.Service_Provider ? (
                    <Button
                      onClick={setQuoteFormOpened}
                      maw={360}
                      color="secondary.8"
                    >
                      Quote Customer
                    </Button>
                  ) : null}
                </Group>
              </Card>
              <Card>
                <Group align="center" noWrap>
                  <Box
                    px={8}
                    sx={(theme) => ({
                      border: `1px solid ${theme.colors.yellow[6]}`,
                      paddingTop: 8,
                      borderRadius: 8,
                    })}
                  >
                    <Box c="secondary.8" component={RiVipCrownLine} size={24} />
                  </Box>
                  <Text c="secondary.8" fw={500}>
                    Valued Customer
                  </Text>
                </Group>
              </Card>
              <Card mx={4} my={2}>
                <Stack spacing={2}>
                  <Text fw={400} c="neutral.5" fz={14}>
                    Project Type
                  </Text>
                  <Text fw={500} c="neutral.6" fz={16}>
                    {capitalize(booking.projectTitle)}
                  </Text>
                </Stack>
              </Card>
              <Card mx={4} my={2}>
                <Stack spacing={8}>
                  <Group align="flex-start" spacing={16}>
                    <Stack spacing={0}>
                      <Text fw={400} c="neutral.5" fz={14}>
                        Inquiry
                      </Text>
                      <Text fw={500} c="neutral.6" fz={16}>
                        {removeUnderscore(booking.bookingType)}s
                      </Text>
                      <Group>
                        <Text fw={400} c="neutral.5" fz={14}>
                          Created:
                        </Text>
                        <Text fz={14} c="neutral.8">
                          {format(new Date(booking.createdAt), "PPP")}
                        </Text>
                      </Group>
                    </Stack>
                  </Group>
                </Stack>
              </Card>
              <Card mx={4} my={2}>
                <Stack spacing={16}>
                  <Group align="center" spacing={16}>
                    <Box
                      c="neutral.5"
                      component={IoInformationCircle}
                      size={16}
                    ></Box>
                    <Text fw={500} c="neutral.6" fz={16}>
                      Additional Information
                    </Text>
                  </Group>
                  <Grid grow>
                    <Grid.Col span={6}>
                      <Stack spacing={0}>
                        <Text c="primary" fz={14} fw={500} lh={0.8}>
                          {removeUnderscore(booking.bookingCategory)}
                        </Text>
                        <Text c="neutral.5" fz={14}>
                          Project Category
                        </Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Stack spacing={0}>
                        <Text c="primary" fz={14} fw={500} lh={0.8}>
                          {removeUnderscore(booking.propertyType)}
                        </Text>
                        <Text c="neutral.5" fz={14}>
                          Property Type
                        </Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Stack spacing={0}>
                        <Text c="primary" fz={14} fw={500} lh={0.8}>
                          {removeUnderscore(booking.serviceType)}
                        </Text>
                        <Text c="neutral.5" fz={14}>
                          Project Type
                        </Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Stack spacing={0}>
                        <Text c="primary" fz={14} fw={500} lh={0.8}>
                          {removeUnderscore(booking.hiringTimeline)}
                        </Text>
                        <Text c="neutral.5" fz={14}>
                          Project Timeline
                        </Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col xs={12}>
                      <Stack spacing={0}>
                        <Text c="primary" fz={14} fw={500} lh={0.8}>
                          {removeUnderscore(booking.projectStatus)}
                        </Text>
                        <Text c="neutral.5" fz={14}>
                          Project Status
                        </Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span="content">
                      <Stack spacing={0}>
                        <Text c="primary" fz={14} fw={500} lh={0.8}>
                          {removeUnderscore(booking.isAuthorizedPerson)}
                        </Text>
                        <Text c="neutral.5" fz={14}>
                          Property Owner
                        </Text>
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Stack>
              </Card>
              <Card mx={4} my={2}>
                <Stack>
                  <Group align="center">
                    <Box
                      c="neutral.5"
                      component={MdDescription}
                      size={16}
                    ></Box>
                    <Text fw={500} c="neutral.6" fz={16}>
                      Job Description
                    </Text>
                  </Group>
                  <Text c="neutral.5">{booking.projectDescription}</Text>
                </Stack>
              </Card>
              <Card mx={4} my={2} pb={24}>
                <Stack>
                  <Group align="center">
                    <Box
                      c="neutral.5"
                      component={MdLocationPin}
                      size={20}
                    ></Box>
                    <Text fw={500} c="neutral.6" fz={16}>
                      Job Location
                    </Text>
                  </Group>
                  <SimpleGoogleMap
                    showInput={false}
                    onPlaceChange={(place) => {
                      console.log(place);
                    }}
                  />
                </Stack>
              </Card>
            </Stack>
          </ScrollArea.Autosize>
        </Flex>
      </FixedScreen>
    </>
  );
}
