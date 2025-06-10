import { Button, Flex, Grid, Stack, TextInput } from "@mantine/core";

export default function GeneralInfo() {
  return (
    <Stack>
      <Grid>
        <Grid.Col xs={12} lg={6}>
          <TextInput label="Full name" placeholder="Full name" />
        </Grid.Col>
        <Grid.Col xs={12} lg={6}>
          <TextInput label="Email" placeholder="Email" />
        </Grid.Col>
      </Grid>

      <TextInput label="Address" placeholder="Address" />
      <Grid>
        <Grid.Col xs={12} lg={6}>
          <TextInput label="City" placeholder="City" />
        </Grid.Col>
        <Grid.Col xs={12} lg={6}>
          <Grid>
            <Grid.Col xs={12} lg={6}>
              <TextInput label="State" placeholder="State" />
            </Grid.Col>
            <Grid.Col xs={12} lg={6}>
              <TextInput label="Zipcode" placeholder="Zipcode" />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>

      <Flex direction="row-reverse">
        <Button mt={24} color="primary" maw={328}>
          Save Changes
        </Button>
      </Flex>
    </Stack>
  );
}
