import {
  Box,
  Center,
  Container,
  Title,
  Group,
  List,
  Stack,
  SimpleGrid,
} from "@mantine/core";

export default function ServiceCities() {
  const title = "Find Pros Near You";
  const serviceCities = [
    "Palm Beach",
    "West Palm Beach",
    "Boca Raton",
    "Delray Beach",
    "Palm Beach Gardens",
    "Boynton Beach",
    "Jupiter",
    "Lake Worth",
    "Wellington",
    "Royal Palm Beach",
    "Palm Springs",
    "Riviera Beach",
    "Greenacres",
    "Juno Beach",
    "Tequesta",
  ];

  return (
    <>
      <Box component="section">
        <Container>
          <Stack spacing={32}>
            <Center>
              <Title order={2} size="h3" fw={600} c="primary">
                Find Pros Near You
              </Title>
            </Center>
            <SimpleGrid cols={1} spacing={2}>
              <List listStyleType="none">
                {serviceCities.slice(0, 3).map((city, i) => {
                  return <List.Item key={i}>{city}</List.Item>;
                })}
              </List>
              <List listStyleType="none">
                {serviceCities.slice(4, 7).map((city, i) => {
                  return <List.Item key={i}>{city}</List.Item>;
                })}
              </List>
              <List listStyleType="none">
                {serviceCities.slice(8, 11).map((city, i) => {
                  return <List.Item key={i}>{city}</List.Item>;
                })}
              </List>
              <List listStyleType="none">
                {serviceCities.slice(12, 15).map((city, i) => {
                  return <List.Item key={i}>{city}</List.Item>;
                })}
              </List>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
