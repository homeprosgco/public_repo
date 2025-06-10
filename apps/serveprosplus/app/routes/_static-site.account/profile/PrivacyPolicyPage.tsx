import { Flex, Card, Stack, Group, ActionIcon, Text, Box } from "@mantine/core";
import { useNavigate } from "@remix-run/react";
import { RxCaretLeft } from "react-icons/rx";
import FixedScreen from "~/client/_layouts/FixedScreen";

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <>
      <FixedScreen>
        <Box h="100%">
          <Card m={4}>
            <Stack spacing={28}>
              <Group>
                <ActionIcon
                  radius={12}
                  bg="neutral.0"
                  onClick={() => navigate(-1)}
                >
                  <RxCaretLeft size={24} />
                </ActionIcon>
                <Text fw={700} fz={20} color="neutral.7">
                  Privacy Policy
                </Text>
              </Group>
            </Stack>
          </Card>
          <Card sx={{ flex: "1 0 auto" }}>
            <Stack>
              <Text fw={500} c="neutral.7">
                Acceptance of the Privacy Policy
              </Text>
              <Stack>
                <Text fz={14} fw={300} c="neutral.7">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </Text>
                <Text fz={14} fw={300} c="neutral.7">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Box>
      </FixedScreen>
    </>
  );
}
