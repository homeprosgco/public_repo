import { Anchor, Box, Flex, Group, Stack, Text } from "@mantine/core";
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from "@remix-run/react";
import ServiceProviderCarousel, { ServiceProviderCarouselProps } from "./ServiceProviderCarousel";

export type ServiceProviderCarouselSectionProps = {
  sectionTitle: string;
  carouselItems: ServiceProviderCarouselProps;
};

export default function ServiceProviderCarouselSection({
  sectionTitle,
  carouselItems: { items },
}: ServiceProviderCarouselSectionProps) {
  return (
    <>
      <Box>
        <Stack>
          <Group position="apart">
            <Text fw={500} fz={18} c="neutral.7">
              {sectionTitle}
            </Text>
            <Anchor component={Link} to="/service-providers">
              <Flex c="secondary" columnGap={8} align="center" fw={500}>
                <Text fz={12}>View All</Text>
                <RxDoubleArrowRight />
              </Flex>
            </Anchor>
          </Group>
          <ServiceProviderCarousel items={items} />
        </Stack>
      </Box>
    </>
  );
}
