import { Box, Button, Center, Flex, Stack, Text, Image } from "@mantine/core";
import { Link } from "@remix-run/react";
import FixedScreen from "~/client/_layouts/FixedScreen";
import successicon from "~/images/demo/success-icon.png";

export default function JobLeadConfirmationPage() {
  return (
    <>
      <FixedScreen>
        <Flex
          direction="column"
          justify="center"
          align="center"
          id="job-lead-confirmation-page-wrapper"
          h="100%"
        >
          <Flex
            direction="column"
            align="center"
            sx={{ flex: "1 0 auto" }}
            w="100%"
            mah={400}
            rowGap={64}
          >
            <Box >
              <Image width={112} src={successicon} />
            </Box>

            <Stack align="center" maw={250} spacing={32}>
              <Stack spacing={4} align="center">
                <Text
                  c="neutral.8"
                  lh={1.1}
                  ta="center"
                  maw={160}
                  fw={700}
                  fz={18}
                >
                  Your Service has been accepted
                </Text>
                <Text ta="center" c="neutral.6">
                  The Serve Pros Plus team will call you to confirm your booking
                  request.
                </Text>
              </Stack>

              <Button variant="outline" miw={240} component={Link} to="/" color="secondary.8">
                Back to Home
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </FixedScreen>
    </>
  );
}
