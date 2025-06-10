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
import { Link } from "@remix-run/react";
import image from "../../../images/email-confirmation/email-confirmation.svg";
import { SiMinutemailer } from "react-icons/si";
import FixedScreen from "~/client/_layouts/FixedScreen";

export const action = () => null;

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
              <Box component={SiMinutemailer} c="primary" size={150} />
            </Flex>
          </Container>

          <Stack align="center">
            <Text fw={500} fz={24}>
              Verify your account
            </Text>
            <Text color="neutral.5" size={16}>
              An email confirmation was sent to your email address to verify
              your new account. After account verificaiton you will be
              redirected back to our website signed in with your new account.
            </Text>
            <Text color="neutral.8" size="lg">
              Thank you for joining us.
            </Text>
            <Button
              component={Link}
              to="/"
              size="md"
              mt="xl"
              color="primary"
              className={classes.control}
            >
              Go to our Homepage
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </FixedScreen>
  );
}
