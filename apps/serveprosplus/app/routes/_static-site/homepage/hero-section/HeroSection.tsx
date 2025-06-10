import {
  BackgroundImage,
  Box,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Title,
  Text
} from "@mantine/core";
import { OrangeTextFeature } from "~/client/__ui/features";
import { DemoSelect } from "~/client/__ui/inputs";
import customerImg from "~/_images/homepage/happy-customer-slider.jpg";

export default function HeroSection() {
  return (
    <>
      <Box component="section">
        <Container size="xl">
          <Box pos="relative">
            <SimpleGrid
              cols={1}
              spacing="xl"
              breakpoints={[{ minWidth: "sm", cols: 2 }]}
            >
              <Box maw={{ xs: 500 }} sx={{ zIndex: 99 }}>
                <Stack spacing="xs" miw={300}>
                  <Group>
                    <Title fw={400} order={1} size="h6" c="accent">Only in Palm Beach County</Title>
                    <OrangeTextFeature />
                  </Group>

                  <Stack spacing={32}>
                    <Stack spacing="xl">
                      <Title order={1} size="h2" c="primary">Find trusted pros for your home improvement projects.</Title>
                      <Text c="neutral.5">Donec ullamcorper nulla non metus auctor fringilla cras justo odio, dapibus ac facilisis in, egestas eget quam</Text>
                    </Stack>

                    <DemoSelect />
                  </Stack>
                </Stack>
              </Box>

              <Box
                pos="relative"
                w={{ sm: 1200, lg: 1715 }}
                left={{ sm: -768, lg: -900 }}
              >
                <BackgroundImage src={customerImg}>
                  <Box h={{ sm: 700, lg: 850 }}></Box>
                </BackgroundImage>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
