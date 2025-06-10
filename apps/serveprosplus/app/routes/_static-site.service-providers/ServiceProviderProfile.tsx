import {
  Flex,
  Card,
  Group,
  ActionIcon,
  Stack,
  Box,
  Image,
  Text,
  Badge,
  SimpleGrid,
  Grid,
  Button,
  Anchor,
  Progress,
  Divider,
  Modal,
  Textarea,
  Radio,
  ScrollArea,
} from "@mantine/core";
import { useNavigate } from "@remix-run/react";
import { RxCaretLeft } from "react-icons/rx";

import serviceproviderdemologo from "~/_images/demo/logo/serviceproviderdemologo.png";
import { GoVerified } from "react-icons/go";
import { HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import serviceimg from "~/_images/home-services/kitchen-remodel.png";
import { useEffect, useRef, useState } from "react";
import { BsHeart, BsHeartFill, BsTelephone } from "react-icons/bs";
import EmptyStarRatingGroup from "~/client/__ui/components/star-rating/EmptyStarRatingGroup";
import StarRating from "~/client/__ui/components/star-rating/StarRating";
import StarRatingGroup from "~/client/__ui/components/star-rating/StarRatingGroup";
import FixedScreen from "~/client/_layouts/FixedScreen";
import { ServiceProviderType } from "../_static-site.service-providers.$serviceProviderId";
import { AccountType, Review, ServiceDetails } from "@prisma/client";
import EmptyStarRating from "~/client/__ui/components/star-rating/EmptyStarRating";
import { removeUnderscore } from "../_static-site.company-account/service-provider-prospects/utils/ServiceCategoriesSelectOptions";

type ServiceProviderProfilePageProps = {
  provider: ServiceProviderType;
};

export default function ServiceProviderProfilePage({
  provider,
}: ServiceProviderProfilePageProps) {
  const navigate = useNavigate();
  const imgRef = useRef<HTMLImageElement>(null);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [quoteOpened, setQuoteOpened] = useState<boolean>(false);
  const [reviewOpened, setReviewOpened] = useState<boolean>(false);
  const [viewportHeight, setViewportHeight] = useState<number>(600);

  const providerReviews =
    provider && provider.serviceProviderReviews
      ? provider.serviceProviderReviews
      : [];
  const operatingHours =
    provider && provider.operatingHours ? provider.operatingHours : [];

  function reviewPercentage(reviewsCount: number, ratingNumber: number) {
    if (reviewsCount > 0) {
      return reviewsCount / ratingNumber;
    }
    return 0;
  }

  useEffect(() => {
    function updateViewportHeight() {
      const { innerHeight: height } = window;
      setViewportHeight(height);
    }

    window.addEventListener("resize", updateViewportHeight);
    updateViewportHeight();
    return () => window.removeEventListener("resize", updateViewportHeight);
  }, [viewportHeight]);

  useEffect(() => {
    if (imgRef.current) imgRef.current.style.height = "100%";
  }, []);

  return (
    <>
      <Modal
        opened={quoteOpened}
        onClose={() => setQuoteOpened(false)}
        title={provider?.companyName}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        overlayColor="secondary.0"
        overlayOpacity={0.55}
        overlayBlur={3}
        styles={(theme) => ({
          header: {
            fontSize: 21,
            fontWeight: 700,
            color: theme.colors.neutral[7],
            lineHeight: 1.2,
          },
        })}
      >
        <Stack spacing={32}>
          <Flex
            direction={{ base: "column", xs: "row" }}
            rowGap={{ base: 4 }}
            columnGap={{ base: 0, xs: 16 }}
            align={{ base: "flex-start", xs: "center" }}
          >
            <EmptyStarRatingGroup size={24} />
            <Text c="neutral.4" fz={14}>
              Select your rating
            </Text>
          </Flex>
          <Radio.Group
            name="favoriteFramework"
            label="How likely is it that you would recommend this business?"
            description="This is anonymous"
            withAsterisk
          >
            <Flex direction="column" rowGap="xs">
              <Radio value="very likely" label="Very Likely" c="neutral" />
              <Radio value="likely" label="Likely" />
              <Radio value="not likely" label="Not Likly" />
              <Radio value="never" label="Never" />
            </Flex>
          </Radio.Group>
          <Textarea
            autosize
            minRows={15}
            placeholder="I recently rented a new condo. The closets were a disaster. The current hanging bars fell right out of the wall with minimal force. Hired JD to fix the problem. He reinforced all of the existing bars without having to buy a new closet system and without having to do any major renovation to the wall. The shelves and bars are now SOLID."
            label=""
          />
          <Button
            maw={360}
            color="secondary.8"
            onClick={() => setQuoteOpened(true)}
          >
            Post Review
          </Button>
        </Stack>
      </Modal>
      <Modal
        opened={reviewOpened}
        onClose={() => setReviewOpened(false)}
        title={provider?.companyName}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        overlayColor="secondary.0"
        overlayOpacity={0.55}
        overlayBlur={3}
        styles={(theme) => ({
          header: {
            fontSize: 21,
            fontWeight: 700,
            color: theme.colors.neutral[7],
            lineHeight: 1.2,
          },
        })}
      >
        <Stack spacing={32}>
          <Flex
            direction={{ base: "column", xs: "row" }}
            rowGap={{ base: 4 }}
            columnGap={{ base: 0, xs: 16 }}
            align={{ base: "flex-start", xs: "center" }}
          >
            <EmptyStarRatingGroup size={24} />
            <Text c="neutral.4" fz={14}>
              Select your rating
            </Text>
          </Flex>
          <Radio.Group
            name="favoriteFramework"
            label="How likely is it that you would recommend this business?"
            description="This is anonymous"
            withAsterisk
          >
            <Flex direction="column" rowGap="xs">
              <Radio value="very likely" label="Very Likely" c="neutral" />
              <Radio value="likely" label="Likely" />
              <Radio value="not likely" label="Not Likly" />
              <Radio value="never" label="Never" />
            </Flex>
          </Radio.Group>
          <Textarea
            autosize
            minRows={15}
            placeholder="I recently rented a new condo. The closets were a disaster. The current hanging bars fell right out of the wall with minimal force. Hired JD to fix the problem. He reinforced all of the existing bars without having to buy a new closet system and without having to do any major renovation to the wall. The shelves and bars are now SOLID."
            label=""
          />
          <Button
            maw={360}
            color="secondary.8"
            onClick={() => setQuoteOpened(true)}
          >
            Post Review
          </Button>
        </Stack>
      </Modal>
      <FixedScreen>
        <Flex
          direction="column"
          sx={(theme) => ({
            backgroundColor: theme.fn.lighten(
              `${theme.colors.neutral[0]}`,
              0.6
            ),
            paddingBottom: 4,
          })}
        >
          <ScrollArea.Autosize maxHeight={viewportHeight} type="never">
            <Card mx={4} my={2}>
              <Group position="apart">
                <ActionIcon
                  radius={12}
                  bg="neutral.0"
                  onClick={() => navigate(-1)}
                >
                  <RxCaretLeft size={24} />
                </ActionIcon>
                <Flex justify="end" columnGap={16}>
                  <Anchor href={provider?.primaryTelephone}>
                    <Box component={BsTelephone} c="primary.2" size={24} />
                  </Anchor>
                  <Box
                    component={favorite ? BsHeartFill : BsHeart}
                    c={favorite ? "secondary.8" : "primary.2"}
                    size={24}
                    onClick={() => setFavorite(!favorite)}
                  />
                </Flex>
              </Group>
            </Card>
            <Card mx={4} my={2}>
              <Stack>
                <Flex>
                  <Flex sx={{ flex: "1 1 auto" }} align="center">
                    <Box w={100}>
                      <Image
                        src={
                          provider && provider.logoURL
                            ? provider.logoURL
                            : serviceproviderdemologo
                        }
                        alt={provider?.companyName}
                      />
                    </Box>

                    <Stack spacing={2}>
                      <Text lh={1.2} c="neutral.8" fz={18} fw={700}>
                        {provider?.companyName}
                      </Text>
                      {provider &&
                      provider.serviceProviderReviews.length > 0 ? (
                        <Group spacing={8}>
                          <Text c="secondary.5" fw={500}>
                            Very good
                          </Text>
                          <Group spacing={1}>
                            <Text c="yellow" fw={500}>
                              4.6
                            </Text>
                            <Group spacing={1}>
                              <StarRatingGroup />
                            </Group>
                          </Group>
                          <Text c="neutral.5">81 reviews</Text>
                        </Group>
                      ) : (
                        <Text>This provider has no reviews</Text>
                      )}
                    </Stack>
                  </Flex>
                </Flex>
                <Group spacing={4}>
                  {provider &&
                    provider.serviceDetails
                      .filter((detail) =>
                        [
                          ServiceDetails.Contractor.toString(),
                          ServiceDetails.Free_Estimates.toString(),
                          ServiceDetails.Warranty.toString(),
                        ].includes(detail.toString())
                      )
                      .map((specialDetail) => (
                        <Badge
                          radius={4}
                          c="secondary.8"
                          bg="secondary.0"
                          key={specialDetail}
                        >
                          {specialDetail}
                        </Badge>
                      ))}
                </Group>
              </Stack>
            </Card>
            <Card mx={4} my={2}>
              <Flex columnGap="sm" align="center">
                <Stack spacing={0} align="center">
                  <Box pos="relative">
                    <Box
                      bg="yellow"
                      w={30}
                      h={20}
                      left={5}
                      top={10}
                      pos="absolute"
                    ></Box>
                    <Box
                      pos="relative"
                      c="secondary.8"
                      component={GoVerified}
                      size={40}
                      z={5}
                    />
                  </Box>
                </Stack>
                <Stack spacing={0}>
                  <Text fw={700} fz={16} c="secondary.8" lh={1.1}>
                    Verified License
                  </Text>
                  <Text c="neutral.5">Serve Pros Plus approved business</Text>
                </Stack>
              </Flex>
            </Card>
            <Card mx={4} my={2}>
              <Stack>
                <Stack>
                  <Text fw={500} c="neutral.8" fz={18}>
                    About The Company
                  </Text>
                  <Text c="neutral.5">{provider?.companyBio}</Text>
                </Stack>
              </Stack>
            </Card>
            <Card mx={4} my={2}>
              <Stack>
                <Text fw={500} c="neutral.8" fz={18}>
                  {provider?.companyName} Recent Projects
                </Text>
                {provider && provider?.profileProjectURLs ? (
                  <Grid gutter={4}>
                    <Grid.Col span={8}>
                      <SimpleGrid cols={2} spacing={4}>
                        <Image src={serviceimg} height={80} />
                        <Image src={serviceimg} height={80} />
                        <Image src={serviceimg} height={80} />
                        <Image src={serviceimg} height={80} />
                      </SimpleGrid>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Flex
                        direction="column"
                        h="100%"
                        sx={{ flex: "1 0 auto", position: "relative" }}
                      >
                        <Image
                          imageRef={imgRef}
                          src={serviceimg}
                          sx={(theme) => ({ ...theme.fn.cover() })}
                          styles={{
                            figure: {
                              height: "100%",
                            },
                            imageWrapper: {
                              height: "100%",
                              position: "relative",
                            },
                          }}
                        />
                      </Flex>
                    </Grid.Col>
                  </Grid>
                ) : (
                  <Text c="neutral.5">
                    This provider has not uploaded any work photos
                  </Text>
                )}
              </Stack>
            </Card>
            <Card mx={4} my={2}>
              <Stack>
                <Text fw={500} c="neutral.8" fz={18}>
                  Company Details
                </Text>
                <Stack spacing={8}>
                  <Text fw={500} c="primary.6" fz={16}>
                    Contact
                  </Text>
                  <SimpleGrid
                    cols={1}
                    spacing={8}
                    breakpoints={[{ minWidth: "xs", cols: 2 }]}
                  >
                    <Stack spacing={4} mb={16}>
                      <Group>
                        <Box
                          component={HiOutlinePhone}
                          fw={300}
                          c="primary"
                        ></Box>
                        <Text c="primary" fw={500} fz={14}>
                          {provider?.primaryTelephone}
                        </Text>
                      </Group>
                      <Group>
                        <Box
                          component={HiOutlineLocationMarker}
                          fw={300}
                          c="neutral.5"
                        ></Box>
                        <Stack spacing={0}>
                          <Text c="neutral.5" fw={300} lh={1.2}>
                            {provider?.user.primaryAddress
                              .split(",")
                              .slice(0, 1)}
                          </Text>
                          <Text c="neutral.5" fw={300}>
                            {provider?.user.primaryAddress.split(",").slice(1)}
                          </Text>
                        </Stack>
                      </Group>
                      {provider && provider.user.website?.websiteURL ? (
                        <Anchor variant="text">
                          <Text c="primary.6" fw={500}>
                            {provider.user.website.websiteURL}
                          </Text>
                        </Anchor>
                      ) : null}
                    </Stack>
                    {provider &&
                    provider.user.accountType !==
                      AccountType.Service_Provider ? (
                      <Flex direction="column-reverse" pb={24}>
                        <Button
                          maw={360}
                          color="secondary.8"
                          onClick={() => setQuoteOpened(true)}
                        >
                          Get a Qoute
                        </Button>
                      </Flex>
                    ) : null}
                  </SimpleGrid>
                </Stack>
              </Stack>
            </Card>
            {operatingHours.length > 0 ? (
              <Card mx={4} my={2}>
                <Stack>
                  <Text fw={500} c="neutral.8" fz={18}>
                    Operating Hours
                  </Text>
                  {}
                  <Flex direction="column">
                    <Group>
                      <Text miw={60} fw={500} c="neutral.4">
                        Mon:
                      </Text>
                      <Text c="neutral.8">8:00 AM - 7:00 PM</Text>
                    </Group>
                    <Group>
                      <Text miw={60} fw={500} c="neutral.4">
                        Tues:
                      </Text>
                      <Text c="neutral.8">8:00 AM - 7:00 PM</Text>
                    </Group>
                    <Group>
                      <Text miw={60} fw={500} c="neutral.4">
                        Weds:
                      </Text>
                      <Text c="neutral.8">8:00 AM - 7:00 PM</Text>
                    </Group>
                    <Group>
                      <Text miw={60} fw={500} c="neutral.4">
                        Thurs:
                      </Text>
                      <Text c="neutral.8">8:00 AM - 7:00 PM</Text>
                    </Group>
                    <Group>
                      <Text miw={60} fw={500} c="neutral.4">
                        Fri:
                      </Text>
                      <Text c="neutral.8">8:00 AM - 7:00 PM</Text>
                    </Group>
                    <Group>
                      <Text miw={60} fw={500} c="neutral.4">
                        Sat:
                      </Text>
                      <Text c="neutral.8">8:00 AM - 6:00 PM</Text>
                    </Group>
                    <Group>
                      <Text miw={60} fw={500} c="neutral.4">
                        Sun:
                      </Text>
                      <Text c="neutral.8">10:00 AM - 4:00 PM</Text>
                    </Group>
                  </Flex>
                </Stack>
              </Card>
            ) : null}

            <Card mx={4} my={2}>
              <Stack>
                <Text fw={500} c="neutral.8" fz={18}>
                  Areas of Expertise
                </Text>
                <Flex direction="row" wrap="wrap" columnGap={8} align="center">
                  {provider?.serviceCategories.map((category, i, arr) => {
                    return (
                      <Group key={category} spacing={8}>
                        <Text c="primary.5">{removeUnderscore(category)}</Text>
                        {i !== arr.length - 1 ? (
                          <Box
                            bg="neutral.8"
                            w={3}
                            h={3}
                            sx={{ borderRadius: 8 }}
                          />
                        ) : null}
                      </Group>
                    );
                  })}
                </Flex>
              </Stack>
            </Card>
            <Card mx={4} my={2}>
              <Stack>
                <Text fw={500} c="neutral.8" fz={18}>
                  Service Details
                </Text>
                <Flex
                  direction="row"
                  wrap="wrap"
                  columnGap={8}
                  rowGap={8}
                  align="center"
                >
                  {provider &&
                    provider.serviceDetails.map((specialDetail) => (
                      <Badge key={specialDetail}>
                        {removeUnderscore(specialDetail)}
                      </Badge>
                    ))}
                </Flex>
              </Stack>
            </Card>
            <Card mx={4} my={2}>
              <Stack>
                <Text fw={500} c="neutral.8" fz={18}>
                  Ratings
                </Text>
                <SimpleGrid
                  cols={1}
                  breakpoints={[{ minWidth: "xs", cols: 2, spacing: "lg" }]}
                >
                  {provider && provider.serviceProviderReviews.length > 0 ? (
                    <Group>
                      <Stack spacing={0}>
                        <Group>
                          <Text lh={1.2} c="secondary" fw={500}>
                            Very Good
                          </Text>
                          <Group spacing={4}>
                            <Text c="primary.5" fw={500}>
                              {provider.serviceProviderReviews.length}
                            </Text>
                            <Text c="neutral.5">reviews</Text>
                          </Group>
                        </Group>

                        <Group>
                          <Text lh={1.2} fw={500} c="yellow">
                            4.6
                          </Text>
                          <Group spacing={1}>
                            <StarRatingGroup />
                          </Group>
                        </Group>
                      </Stack>
                    </Group>
                  ) : (
                    <Text>Provider not rated</Text>
                  )}

                  <Stack spacing={4}>
                    {Array.from([5, 4, 3, 2, 1]).map((ratingNumber) => {
                      const reviews = providerReviews
                        ? providerReviews.filter(
                            (pReview) => pReview.review.rating === ratingNumber
                          )
                        : [];

                      return (
                        <Flex align="center" columnGap={16} key={ratingNumber}>
                          <Group spacing={2}>
                            <Text c="neutral.8" fz={12}>
                              {ratingNumber}
                            </Text>
                            <Box
                              component={
                                reviews.length > 0
                                  ? StarRating
                                  : EmptyStarRating
                              }
                              size={12}
                            />
                          </Group>
                          <Box sx={{ flex: "1 0 auto" }} maw={300}>
                            <Progress
                              size="sm"
                              color="secondary"
                              value={reviewPercentage(
                                reviews.length,
                                ratingNumber
                              )}
                            />
                          </Box>
                        </Flex>
                      );
                    })}
                  </Stack>
                </SimpleGrid>
              </Stack>
            </Card>
            <Card mx={4} my={2}>
              <Stack>
                <Group position="apart">
                  <Text fw={500} c="neutral.8" fz={18}>
                    Customer Reviews
                  </Text>
                  <Button
                    px={0}
                    fw={500}
                    onClick={() => setReviewOpened(true)}
                    color="secondary"
                    variant="subtle"
                    sx={(theme) => ({
                      "&:hover": {
                        color: theme.fn.darken(
                          `${theme.colors.secondary[6]}`,
                          0.4
                        ),
                      },
                    })}
                  >
                    Write a review
                  </Button>
                </Group>
                {providerReviews.length > 0 ? (
                  <Flex direction="column" rowGap={24}>
                    <Stack spacing={16}>
                      <Group position="apart" align="center">
                        <Stack spacing={0}>
                          <Stack spacing={0}>
                            <Group spacing={8} align="center">
                              <Text fw={500} c="neutral.8" lh={1}>
                                Navi S.
                              </Text>
                              <Text c="neutral.5">-</Text>
                              <Text fz={12} c="neutral.5">
                                Lake Worth, FL
                              </Text>
                            </Group>
                            <Group spacing={2}>
                              <Text c="neutral.8" fz={12}>
                                4.5
                              </Text>
                              <Box h="4">
                                <StarRatingGroup />
                              </Box>
                            </Group>
                          </Stack>
                        </Stack>
                        <Text fz={14} c="neutral.5">
                          June 23, 2021
                        </Text>
                      </Group>
                      <Stack spacing={4}>
                        <Text fw={500} c="secondary.8">
                          Large Barn Door Installation
                        </Text>
                        <Text c="primary.5" maw={700}>
                          Highly recommend! JD’s Company was fantastic! They
                          assembled a reclining lift chair for my customer. They
                          were very knowledgeable and made sure it was safe.
                          Very easy to schedule with and even completed the job
                          a day early.
                        </Text>
                      </Stack>
                      <Divider c="neutral.0" my={16} />
                    </Stack>
                    <Stack spacing={16}>
                      <Group position="apart" align="center">
                        <Stack spacing={0}>
                          <Stack spacing={0}>
                            <Group spacing={8} align="center">
                              <Text fw={500} c="neutral.8" lh={1}>
                                Navi S.
                              </Text>
                              <Text c="neutral.5">-</Text>
                              <Text fz={12} c="neutral.5">
                                Lake Worth, FL
                              </Text>
                            </Group>
                            <Group spacing={2}>
                              <Text c="neutral.8" fz={12}>
                                4.5
                              </Text>
                              <Box h="4">
                                <StarRatingGroup />
                              </Box>
                            </Group>
                          </Stack>
                        </Stack>
                        <Text fz={14} c="neutral.5">
                          June 23, 2021
                        </Text>
                      </Group>
                      <Stack spacing={4}>
                        <Text fw={500} c="secondary.8">
                          Large Barn Door Installation
                        </Text>
                        <Text c="primary.5" maw={700}>
                          Highly recommend! JD’s Company was fantastic! They
                          assembled a reclining lift chair for my customer. They
                          were very knowledgeable and made sure it was safe.
                          Very easy to schedule with and even completed the job
                          a day early.
                        </Text>
                      </Stack>
                      <Divider c="neutral.0" my={16} />
                    </Stack>
                  </Flex>
                ) : null}
              </Stack>
            </Card>
          </ScrollArea.Autosize>
        </Flex>
      </FixedScreen>
    </>
  );
}
