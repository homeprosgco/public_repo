import { Box, Container, Stack, Title, Text, Image } from "@mantine/core";
import kitchenRemodelPng from "~/_images/home-services/kitchen-remodel.png";
import bathroomRemodelPng from "~/_images/home-services/bathroom_remodel.png";
import flooringPng from "~/_images/home-services/flooring.png";
import treeService from "~/_images/home-services/tree-service.jpg";
import { Carousel } from "@mantine/carousel";

export default function HomeImprovementProjects() {
  const title = "Home Improvement Projects";
  const text = "Get free quotes from top local home improvement professionals";
  const slideData = [
    {
      title: "Kitchen Remodel",
      url: kitchenRemodelPng,
      alt: "Kitchen",
    },
    {
      title: "Flooring",
      url: flooringPng,
      alt: "Flooring",
    },
    {
      title: "Bathroom Remodel",
      url: bathroomRemodelPng,
      alt: "Bathroom",
    },
    {
      title: "Tree Service",
      url: treeService,
      alt: "Tree Service",
    },
  ];

  return (
    <>
      <Box component="section">
        <Container>
          <Stack spacing={24}>
            <Stack spacing={8}>
              <Title order={2} size="h5" c="primary">
                Home Improvement Projects
              </Title>
              <Text c="neutral.5" fz={14} lh={1.2}>
                Get free quotes from top local home improvement professionals
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
