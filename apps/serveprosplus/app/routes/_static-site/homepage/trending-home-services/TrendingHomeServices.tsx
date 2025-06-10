import { Box, Container, Stack, Image, Title, Text } from "@mantine/core";
import lawnFertilizing from "~/_images/home-services/lawn-fertilizing.jpg";
import treeService from "~/_images/home-services/tree-service.jpg";
import fenceInstallation from "~/_images/home-services/fence-installation.jpg";
import flooringPng from "~/_images/home-services/flooring.png";
import { Carousel } from "@mantine/carousel";

export default function TrendingHomeServices() {
  const slideData = [
    {
      title: "Landscaping",
      url: lawnFertilizing,
      alt: "Landscaping",
    },
    {
      title: "Tree Services",
      url: treeService,
      alt: "Plumbing Work",
    },
    {
      title: "Fencing",
      url: fenceInstallation,
      alt: "Handyman",
    },
    {
      title: "Flooring",
      url: flooringPng,
      alt: "Flooring",
    },
  ];

  return (
    <>
      <Box component="section">
        <Container>
          <Stack>
            <Stack spacing={0}>
              <Title order={2} size="h5" c="primary">
                Trending Home Services
              </Title>
              <Text c="neutral.5" fz={14} lh={1.2}>
                Instantly book highly rated home pros in South Florida
              </Text>
            </Stack>

            <Carousel
              withIndicators
              slideSize="70%"
              slideGap="md"
              height="auto"
              loop
              align="start"
              slidesToScroll={2}
              breakpoints={[{ minWidth: "sm", slideSize: "25%" }]}
            >
              {slideData.map(({ url, alt, title }, i) => {
                return (
                  <Carousel.Slide key={i}>
                    <Stack spacing="xs">
                      <Image radius="md" src={url} alt={alt} />
                      <Text fz={14} c="neutral.5">
                        {title}
                      </Text>
                    </Stack>
                  </Carousel.Slide>
                );
              })}
            </Carousel>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
