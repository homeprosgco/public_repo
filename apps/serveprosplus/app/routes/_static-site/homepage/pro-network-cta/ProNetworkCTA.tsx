import { Box, Button, Text, Container, Stack, Title } from "@mantine/core";

export default function ProNetworkCTA() {
  const title = "Are You a Home Improvement or Service Pro?";
  const text =
    "Find out how Serve Pros Plus can help you reach more customers for your business.";

  return (
    <Box component="section" bg="primary.0" py={64}>
      <Container>
        <Box maw={460} mx="auto" ta="center">
          <Stack spacing={24}>
            <Stack spacing={8}>
              <Title order={2} size="h3" fw={600} c="primary">
                Are You a Home Improvement or Service Pro?
              </Title>
              <Box ta="left">
                <Text c="neutral.5">
                  Find out how Serve Pros Plus can help you reach more customers
                  for your business.
                </Text>
              </Box>
            </Stack>
            <Button color="accent">Join Our Pro Community</Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
