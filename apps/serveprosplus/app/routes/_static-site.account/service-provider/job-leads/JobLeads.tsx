import {
  Box,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxCaretLeft } from "react-icons/rx";
import jobLead from "./JobLeadItem";

export default function JobLeads() {
  return (
    <>
      <Container
        id="mobile-service-provider-homepage-wrapper"
        bg="primary.0"
        p={0}
      >
        <SimpleGrid cols={1} spacing={4} m={4} id="mobile-content-wrapper">
          <Card>
            <Group position="apart">
              <Group>
                <Box c="primary.4" pt={4}>
                  <RxCaretLeft size={24} />
                </Box>
                <Title order={4} fw={500} c="neutral.8">
                  Job Leads
                </Title>
              </Group>
              <Group align="center" spacing={8}>
                <Box
                  c="primary.3"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <IoMdNotificationsOutline size={24} />
                </Box>
              </Group>
            </Group>
          </Card>
          <Card>
            <Stack spacing={8}>{Array.from({ length: 9 }).map(jobLead)}</Stack>
          </Card>
        </SimpleGrid>
      </Container>
    </>
  );
}
