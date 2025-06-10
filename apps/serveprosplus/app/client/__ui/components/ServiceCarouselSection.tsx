import { Anchor, Box, Flex, Group, Stack, Text } from "@mantine/core";
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from "@remix-run/react";
import ServiceCarousel, { ServiceCarouselProps } from "./ServiceCarousel";

export type ServiceCarouselSectionProps = {
  sectionTitle: string;
  carouselItems: ServiceCarouselProps;
};

export default function ServiceCarouselSection({
  sectionTitle,
  carouselItems: { items },
}: ServiceCarouselSectionProps) {
  return (
    <>
      <Box>
        <Stack>
          <Group position="apart">
            <Text fw={500} fz={18} c="neutral.7`">
              {sectionTitle}
            </Text>
            <Anchor component={Link} to="/service-categories">
              <Flex c="secondary" columnGap={8} align="center" fw={500}>
                <Text fz={12}>View All</Text>
                <RxDoubleArrowRight />
              </Flex>
            </Anchor>
          </Group>
          <ServiceCarousel items={items} />
        </Stack>
      </Box>
    </>
  );
}
