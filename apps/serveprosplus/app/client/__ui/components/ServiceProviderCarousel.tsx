import { Carousel } from "@mantine/carousel";
import { Box, Card, Flex, Image, Rating, Stack, Text } from "@mantine/core";
import StarRatingGroup from "./star-rating/StarRatingGroup";

type CarouselServiceProviderItemProps = {
  imageURL: string;
  imageAlt: string;
  categoryName: string;
  rating: string;
  companyName: string;
};

const CarouselServiceItem = ({
  imageURL,
  imageAlt,
  categoryName,
  rating,
  companyName,
}: CarouselServiceProviderItemProps) => {
  return (
    <>
      <Card p={8}>
        <Card.Section h={120}>
          <Box>
            <Image src={imageURL} alt={imageAlt} radius="md" height={117} />
          </Box>
        </Card.Section>
        <Stack mt={8} spacing={0}>
          <Text fw={500} c="neutral.5" fz={12}>
            {companyName}
          </Text>
          <Text fw={500} c="primary">
            {categoryName}
          </Text>
        </Stack>
        <StarRatingGroup />
      </Card>
    </>
  );
};

export type ServiceProviderCarouselProps = {
  items: CarouselServiceProviderItemProps[];
};

export default function ServiceProviderCarousel({
  items,
}: ServiceProviderCarouselProps) {
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
