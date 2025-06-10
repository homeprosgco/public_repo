import { Carousel } from "@mantine/carousel";
import { Box, Card, Flex, Image, Stack, Text } from "@mantine/core";

type CarouselServiceItemProps = {
  imageURL: string;
  imageAlt: string;
  categoryName: string;
  startPrice: string;
  companyName: string;
};

const CarouselServiceItem = ({
  imageURL,
  imageAlt,
  categoryName,
  startPrice,
  companyName,
}: CarouselServiceItemProps) => {
  return (
    <>
      <Card p={8}>
        <Card.Section h={120}>
          <Box>
            <Image src={imageURL} alt={imageAlt} radius="md" height={117} />
          </Box>
        </Card.Section>
        <Stack mt={8} spacing={0}>
          <Text fw={500} c="primary">
            {categoryName}
          </Text>
          <Text fw={500} c="neutral.5" fz={12}>
            {companyName}
          </Text>
          <Flex align="center" columnGap={4}>
            <Text c="neutral.5" fz={12}>
              Start at
            </Text>
            <Text fw={500} c="secondary" fz={12}>
              {startPrice}
            </Text>
          </Flex>
        </Stack>
      </Card>
    </>
  );
};

export type ServiceCarouselProps = {
  items: CarouselServiceItemProps[];
};

export default function ServiceCarousel({ items }: ServiceCarouselProps) {
  return (
    <>
      <Carousel
        withIndicators
        height={196}
        slideSize="60%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={1}
        styles={{
          controls: {
            display: "none",
          },
          viewport: {
            width: "100%",
          },
          root: {
            width: "100%",
          },
        }}
      >
        {items.map((item) => {
          return (
            <Carousel.Slide key={item.companyName}>
              <CarouselServiceItem {...item} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
}
