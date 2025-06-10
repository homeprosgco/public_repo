import {
  Box,
  Card,
  Flex,
  Group,
  MediaQuery,
  Text,
  Image,
  Stack,
  ScrollArea,
  Anchor,
} from "@mantine/core";
import { Link, useNavigate } from "@remix-run/react";
import { RxCaretLeft } from "react-icons/rx";
import { ActionIcon } from "@mantine/core";
import { RxCaretRight } from "react-icons/rx";

import windowcleaning from "~/_images/app/homepage/service-images/window-cleaning.jpeg";
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
import FixedScreen from "~/client/_layouts/FixedScreen";
import { useUpdateViewportHeight } from "~/_lib/hooks";

type ServiceCategoriesPageProps = {
  categoryName: string;
  categorySubTitle: string;
  imageURL: string;
  imageAlt: string;
};

export default function ServiceCategoriesMobile() {
  const navigate = useNavigate();
  const viewportHeight = useUpdateViewportHeight();

  const serviceCategories: ServiceCategoriesPageProps[] = [
    {
      categoryName: "Cabinets",
      categorySubTitle: "Cabinet services",
      imageAlt: "Cabinet Services",
      imageURL: cabinetservices,
    },
    {
      categoryName: "Carpentry",
      categorySubTitle: "Local Carpenters Available Now",
      imageAlt: "Carpentry Services",
      imageURL: carpentryservices,
    },
    {
      categoryName: "Concrete Services",
      categorySubTitle: "Find Concrete services near you",
      imageAlt: "Concrete Services",
      imageURL: concreteservices,
    },
    {
      categoryName: "Damage & Restoration",
      categorySubTitle: "Emergency services available",
      imageAlt: "Damage & Restoration Services",
      imageURL: damagerestorationservices,
    },
    {
      categoryName: "Garage Door Repair",
      categorySubTitle: "Garage repair & Installation",
      imageAlt: "Garage Repair Services",
      imageURL: garagedoorservices,
    },
    {
      categoryName: "Irrigation Services",
      categorySubTitle: "Sprinklers & New Installation",
      imageAlt: "Irrigation Repair & Installation Services",
      imageURL: irrigationservices,
    },
    {
      categoryName: "Locksmith Services",
      categorySubTitle: "Locksmith emergency services",
      imageAlt: "Locksmith & Lock Changing services",
      imageURL: locksmithservices,
    },
    {
      categoryName: "Patio Coverings",
      categorySubTitle: "New installs & repairs",
      imageAlt: "Patio Coverings Services",
      imageURL: patiocoveringservices,
    },
    {
      categoryName: "Stucco Repair",
      categorySubTitle: "Small jobs & Large projects",
      imageAlt: "Stucco Repair & New Applications",
      imageURL: stuccoservices,
    },
    {
      categoryName: "Tree Services",
      categorySubTitle: "Tree trimming and cutting",
      imageAlt: "Tree Services",
      imageURL: treeservices,
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
            <Card m={4}>
              <Group>
                <ActionIcon
                  radius={12}
                  bg="neutral.0"
                  onClick={() => navigate(-1)}
                >
                  <RxCaretLeft size={24} />
                </ActionIcon>
                <Text fw={700} fz={20} color="neutral.7">
                  Service Categories
                </Text>
              </Group>
            </Card>
            <Card component={ScrollArea}>
              {serviceCategories.map((service) => {
                return (
                  <Flex
                    key={service.categoryName}
                    wrap="nowrap"
                    mb={16}
                    columnGap={16}
                    align="center"
                  >
                    <Box>
                      <Image
                        src={service.imageURL}
                        alt={service.imageAlt}
                        height={60}
                        width={60}
                        radius={8}
                      />
                    </Box>

                    <Stack spacing={0} sx={{ flex: "1 0 auto" }}>
                      <Text c="neutral.7" fz={18} fw={500} lh={1.2}>
                        {service.categoryName}
                      </Text>
                      <Text c="neutral.3" fz={12}>
                        {service.categorySubTitle}
                      </Text>
                      <Anchor
                        variant="link"
                        href={`/booking?category=${service.categoryName}`}
                        c="secondary.8"
                        fw={500}
                        fz={14}
                      >
                        Book a Local Pro
                      </Anchor>
                    </Stack>
                    <Flex direction="row-reverse">
                      <ActionIcon
                        component={Link}
                        to={`/service-providers?category=${service.categoryName}`}
                        radius={12}
                        bg="neutral.0"
                        sx={(theme) => ({ color: theme.white })}
                      >
                        <RxCaretRight size={24} />
                      </ActionIcon>
                    </Flex>
                  </Flex>
                );
              })}
            </Card>
          </ScrollArea.Autosize>
        </Flex>
      </FixedScreen>
    </>
  );
}
