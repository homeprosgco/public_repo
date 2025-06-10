import { Carousel } from "@mantine/carousel";
import {
  Avatar,
  Box,
  Container,
  createStyles,
  Group,
  Rating,
  Stack,
  Image,
  Title,
  Text,
} from "@mantine/core";
import testimonialAvatar from "~/_images/homepage/testimonial-avatar.png";
import quotes from "~/_images/homepage/quotes.png";

const useStyles = createStyles((theme, _params, getRef) => ({
  carousel: {
    "&:hover": {
      [`& .${getRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: 8,
    height: 4,
    transition: "width 250ms ease",
    backgroundColor: theme.colors.primary[3],
    display: "block",

    "&[data-active]": {
      width: 16,
      backgroundColor: theme.colors.primary[6],
    },
  },
}));

export default function Testimonials() {
  const { classes } = useStyles();

  return (
    <Box component="section" bg="white" py={48}>
      <Container>
        <Stack spacing={96}>
          <Box maw={680} mx="auto" ta="center">
            <Title order={2} size="h3" fw={600} c="primary">
              What are local residents saying about Serve Pros Plus
            </Title>
          </Box>
          <Carousel
            withIndicators
            slideSize="100%"
            slideGap="md"
            height={248}
            align="start"
            slidesToScroll={1}
            loop
            breakpoints={[
              { minWidth: "sm", slideSize: "50%" },
              { minWidth: "lg", slideSize: "33.333333%", slideGap: "xl" },
            ]}
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            <Carousel.Slide>
              <Box>
                <Stack spacing={32}>
                  <Group position="apart">
                    <Group>
                      <Avatar src={testimonialAvatar} />
                      <Stack spacing={0}>
                        <Text>Brandon Tylor</Text>
                        <Text>Palm Beach Shores</Text>
                      </Stack>
                    </Group>
                    <Box w={48}>
                      <Image src={quotes} alt="quotes" />
                    </Box>
                  </Group>
                  <Stack spacing={4}>
                    <Stack spacing={8}>
                      <Text>Great Service</Text>
                      <Text>
                        In every software-as-a-service solution, user billing
                        and payments are key aspects in the sale of services
                        rendered. Let’s learn about Stripe the metal mates.
                      </Text>
                    </Stack>
                    <Group spacing={0}>
                      <Rating defaultValue={2} />
                    </Group>
                  </Stack>
                </Stack>
              </Box>
            </Carousel.Slide>
          </Carousel>
        </Stack>
      </Container>
    </Box>
  );
}
