import {
  Box,
  Button,
  createStyles,
  Flex,
  Group,
  Image,
  Overlay,
  Stack,
  Text,
} from "@mantine/core";
import accountsplash from "~/_images/demo/account-splash.jpg";
import { HiHome } from "react-icons/hi2";
import { Link } from "@remix-run/react";
import SplashPage from "../_auth/SplashPage";

export default function AccountSplashPage() {
  return (
    <>
      <SplashPage />

      <Box sx={(theme) => ({ ...theme.fn.cover(), filter: "blur(1px)" })}>
        <Overlay color="#000" />
        <Image src={accountsplash} height="100vh" fit="cover" />
      </Box>
      <Box sx={(theme) => ({ ...theme.fn.cover() })}>
        <Flex direction="column" justify="end" h="100%" pb={64} px={16}>
          <Stack
            sx={(theme) => ({ color: theme.white, zIndex: 99 })}
            spacing={32}
          >
            <Stack spacing={32}>
              <Flex columnGap={8} align="center">
                <Box
                  sx={(theme) => ({
                    backgroundColor: theme.white,
                    borderRadius: 8,
                    padding: 4,
                    display: "flex",
                  })}
                >
                  <Box component={HiHome} c="secondary.8" size={24} />
                </Box>

                <Text
                  transform="uppercase"
                  fw={700}
                  fz={18}
                  sx={(theme) => ({ color: theme.white })}
                >
                  Serve Pros Plus
                </Text>
              </Flex>
              <Text fz={24} fw={700} maw="75%" lh={1.2}>
                All services on your fingertips.
              </Text>
            </Stack>

            <Group grow maw={360}>
              <Button component={Link} to="/account-signin" color="secondary.8">
                Sign In
              </Button>
              <Button variant="outline" component={Link} to="/account-creation">
                Create Account
              </Button>
            </Group>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
