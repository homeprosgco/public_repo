import {
  ActionIcon,
  Box,
  Card,
  Flex,
  Group,
  ScrollArea,
  Stack,
  Text,
  Image,
  Button,
  Divider,
  Anchor,
  UnstyledButton,
  Rating,
} from "@mantine/core";
import { useNavigate } from "@remix-run/react";
import { RxCaretLeft } from "react-icons/rx";
import { MdOutlineRateReview } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

import cabinetservices from "~/_images/app/service-categories-page/cabinet-services.jpg";
import carpentryservices from "~/_images/app/service-categories-page/carpentry-services.jpg";
import concreteservices from "~/_images/app/service-categories-page/concrete-services.jpg";
import damagerestorationservices from "~/_images/app/service-categories-page/damage-restoration-services.jpg";
import garagedoorservices from "~/_images/app/service-categories-page/garage-door-services.webp";
import irrigationservices from "~/_images/app/service-categories-page/irrigation-services.jpg";
import locksmithservices from "~/_images/app/service-categories-page/locksmith-services.jpg";
import patiocoveringservices from "~/_images/app/service-categories-page/patio-covering-services.jpg";
import stuccoservices from "~/_images/app/service-categories-page/stucco-services.png";
import treeservices from "~/_images/app/service-categories-page/tree-services.webp";
import StarRatingGroup from "~/client/__ui/components/star-rating/StarRatingGroup";
import FixedScreen from "~/client/_layouts/FixedScreen";
import { useUpdateViewportHeight } from "~/_lib/hooks";
import CategoryFilter from "~/client/_shared/component/CategoryFilter";
import { Providers } from "../_static-site.service-providers._index";
import { homeServicePlaceholder } from "~/_images/home-services/placeholders";
import { removeUnderscore } from "../_static-site.company-account/service-provider-prospects/utils/ServiceCategoriesSelectOptions";

type ServiceProvidersPageProps = {
  filterCategory: (category: string) => void;
  isProvidersLoaded: boolean;
  activeCategory: string;
  serviceProviders: Providers;
};

export default function ServiceProvidersPage({
  filterCategory,
  isProvidersLoaded = false,
  activeCategory,
  serviceProviders,
}: ServiceProvidersPageProps) {
  const navigate = useNavigate();
  const viewportHeight = useUpdateViewportHeight();

  const serviceCategories = [
    {
      companyName: "The Plumbing Company",
      categoryName: "Cabinets",
      imageAlt: "Cabinet Services",
      imageURL: cabinetservices,
      tags: ["Free Estimates", "Warranty", "Plumbing"],
      phone: "(561) 743 9383",
      reviewComment: "",
      rating: "5.0",
    },
    {
      companyName: "The Plumbing Company",
      categoryName: "Carpentry",
      imageAlt: "Carpentry Services",
      imageURL: carpentryservices,
      phone: "(561) 743 9383",
      reviewComment: "",
      rating: "5.0",
      tags: ["Free Estimates", "Warranty", "Plumbing"],
    },
    {
      companyName: "The Plumbing Company",
      categoryName: "Concrete Services",
      imageAlt: "Concrete Services",
      imageURL: concreteservices,
      phone: "(561) 743 9383",
      reviewComment: "",
      rating: "5.0",
      tags: ["Free Estimates", "Warranty", "Plumbing"],
    },
    {
      companyName: "The Plumbing Company",
      categoryName: "Damage & Restoration",
      imageAlt: "Damage & Restoration Services",
      imageURL: damagerestorationservices,
      phone: "(561) 743 9383",
      reviewComment: "",
      rating: "5.0",
      tags: ["Free Estimates", "Warranty", "Plumbing"],
    },
    {
      companyName: "The Plumbing Company",
      categoryName: "Garage Door Repair",
      imageAlt: "Garage Repair Services",
      imageURL: garagedoorservices,
      phone: "(561) 743 9383",
      reviewComment: "",
      rating: "5.0",
      tags: ["Free Estimates", "Warranty", "Plumbing"],
    },
    {
      companyName: "The Plumbing Company",
      categoryName: "Irrigation Services",
      imageAlt: "Irrigation Repair & Installation Services",
      imageURL: irrigationservices,
      phone: "(561) 743 9383",
      reviewComment: "",
      rating: "5.0",
      tags: ["Free Estimates", "Warranty", "Plumbing"],
    },
    {
      companyName: "The Plumbing Company",
      categoryName: "Locksmith Services",
      imageAlt: "Locksmith & Lock Changing services",
      imageURL: locksmithservices,
      phone: "(561) 743 9383",
      reviewComment: "",
      rating: "5.0",
      tags: ["Free Estimates", "Warranty", "Plumbing"],
    },
    {
      companyName: "The Plumbing Company",
      categoryName: "Patio Coverings",
      imageAlt: "Patio Coverings Services",
      imageURL: patiocoveringservices,
      phone: "(561) 743 9383",
      reviewComment: "",
      rating: "5.0",
      tags: ["Free Estimates", "Warranty", "Plumbing"],
    },
    {
      companyName: "The Plumbing Company",
      categoryName: "Stucco Repair",
      imageAlt: "Stucco Repair & New Applications",
      imageURL: stuccoservices,
      phone: "(561) 743 9383",
      reviewComment: "",
      rating: "5.0",
      tags: ["Free Estimates", "Warranty", "Plumbing"],
    },
    {
      companyName: "The Plumbing Company",
      categoryName: "Tree Services",
      imageAlt: "Tree Services",
      imageURL: treeservices,
      phone: "(561) 743 9383",
      reviewComment: "",
      rating: "5.0",
      tags: ["Free Estimates", "Warranty", "Plumbing"],
    },
  ];

  return (
    <>
      <FixedScreen>
        <Flex
          direction="column"
          sx={(theme) => ({
            backgroundColor: theme.fn.lighten(
              `${theme.colors.neutral[0]}`,
              0.6
            ),
          })}
        >
          <ScrollArea.Autosize maxHeight={viewportHeight} type="never">
            <Card>
              <Group>
                <ActionIcon
                  radius={12}
                  bg="neutral.0"
                  onClick={() => navigate(-1)}
                >
                  <RxCaretLeft size={24} />
                </ActionIcon>
                <Text fw={700} fz={20} color="neutral.7">
                  Service Providers
                </Text>
              </Group>
            </Card>
            <Stack spacing={4}>
              <Card m={4} px={4} bg="transparent">
                <CategoryFilter
                  filterCategory={filterCategory}
                  activeCategory={activeCategory}
                  categories={serviceCategories.map(
                    (category) => category.categoryName
                  )}
                />
              </Card>
              {serviceProviders.map((provider, i) => {
                return (
                  <Card
                    withBorder
                    p={16}
                    radius={8}
                    sx={(theme) => ({
                      border: `1px solid ${theme.fn.lighten(
                        theme.colors.neutral[0],
                        0.4
                      )}`,
                    })}
                    key={i}
                  >
                    <Stack spacing={8}>
                      <Flex wrap="nowrap" columnGap={16} align="center">
                        <UnstyledButton
                          onClick={() => navigate(provider.id)}
                          sx={{ cursor: "pointer" }}
                        >
                          <Box>
                            {provider.user.avatarURL &&
                            provider.user.avatarURL.src.length > 0 ? (
                              <Image
                                src={provider.user.avatarURL.src}
                                alt={provider.companyName}
                                height={60}
                                width={60}
                                radius={8}
                              />
                            ) : (
                              <Image
                                src={homeServicePlaceholder(
                                  provider.serviceCategories[0]
                                )}
                                alt={provider.companyName}
                                height={60}
                                width={60}
                                radius={8}
                              />
                            )}
                          </Box>
                        </UnstyledButton>

                        <Stack spacing={4} sx={{ flex: "1 0 auto" }}>
                          <UnstyledButton
                            onClick={() => navigate(provider.id)}
                            sx={{ cursor: "pointer" }}
                          >
                            <Stack spacing={0} sx={{ flex: "1 0 auto" }}>
                              <Text c="neutral.8" fz={18} fw={500} lh={1.2}>
                                {provider.companyName}
                              </Text>
                              <Group spacing={8}>
                                {provider.serviceCategories
                                  .slice(0, 3)
                                  .map((category) => {
                                    return (
                                      <Text
                                        c="neutral.3"
                                        fw={500}
                                        fz={12}
                                        key={category}
                                      >
                                        {removeUnderscore(category)}
                                      </Text>
                                    );
                                  })}
                              </Group>
                            </Stack>
                          </UnstyledButton>

                          <Group position="apart">
                            <Group spacing={4} align="center">
                              <Box
                                component={BsTelephone}
                                size={12}
                                c="secondary"
                              />
                              <Text c="secondary" fw={500} fz={12}>
                                {provider.primaryTelephone}
                              </Text>
                            </Group>
                            <Anchor
                              variant="link"
                              href={`/booking?providerCompanyName=${provider.companyName}&category=${provider.serviceCategories[0]}`}
                              c="secondary"
                              fw={500}
                              fz={14}
                            >
                              Request a Quote
                            </Anchor>
                          </Group>
                        </Stack>
                      </Flex>

                      {provider.serviceProviderReviews.length > 0 ? (
                        <>
                          <Divider
                            sx={(theme) => ({
                              border: `1px solid ${theme.fn.lighten(
                                theme.colors.neutral[0],
                                0.8
                              )}`,
                            })}
                            mb={16}
                          />
                          <Group align="flex-start" spacing={8} noWrap>
                            <Box pt={2}>
                              <Box
                                c="yellow"
                                component={MdOutlineRateReview}
                              ></Box>
                            </Box>
                            <Stack spacing={8} maw={600}>
                              <Text
                                fz={14}
                                lineClamp={2}
                                lh={1.2}
                                c="neutral.5"
                              >
                                {
                                  provider.serviceProviderReviews[0].review
                                    .comment
                                }
                              </Text>
                              <Flex direction="row-reverse" pr={8}>
                                <Rating
                                  value={
                                    provider.serviceProviderReviews[0].review
                                      .rating
                                  }
                                  readOnly
                                  size="xs"
                                />
                              </Flex>
                            </Stack>
                          </Group>
                        </>
                      ) : null}
                    </Stack>
                  </Card>
                );
              })}
            </Stack>
          </ScrollArea.Autosize>
        </Flex>
      </FixedScreen>
    </>
  );
}
