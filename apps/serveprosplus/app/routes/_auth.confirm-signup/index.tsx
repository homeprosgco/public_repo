import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  Stack,
  Box,
  Flex,
} from "@mantine/core";
import { Link, useLoaderData } from "@remix-run/react";
import image from "../../../images/email-confirmation/email-confirmation.svg";
import { SiMinutemailer } from "react-icons/si";
import FixedScreen from "~/client/_layouts/FixedScreen";
import { LoaderArgs } from "@remix-run/node";
import { MdEmail } from "react-icons/md";

export const action = () => null;

export const loader = async ({request}: LoaderArgs) => {
  const url = new URL(request.url);
  const confirmationURL = url.searchParams.get("confirmation_url") as string;
  return { confirmationURL }
}

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function EmailConfirmationRoute() {
  const { classes } = useStyles();
  const { confirmationURL } = useLoaderData<typeof loader>();

  return (
    <FixedScreen>
      <Container className={classes.root}>
        <SimpleGrid
          spacing={64}
          cols={2}
          breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
        >
          <Container>
            <Flex w="100%">
              <Box component={MdEmail} c="primary" size={150} />
            </Flex>
          </Container>

          <Stack align="center">
            <Text fw={500} fz={24}>
              Verify your email
            </Text>
            <Text color="neutral.5" size={16}>
              Let's get your email verified.
            </Text>
            <Button
              component={Link}
              to={confirmationURL}
              size="md"
              mt="xl"
              color="primary"
              className={classes.control}
            >
              Confirm Email
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </FixedScreen>
  );
}
