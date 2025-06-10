import {
  Box,
  Burger,
  Button,
  Center,
  Flex,
  Group,
  Header,
  MantineTheme,
  MediaQuery,
  Stack,
  Text,
} from "@mantine/core";
import { Link } from "@remix-run/react";
import { HiHome } from "react-icons/hi2";

type HeaderProps = {
  classes: Record<"link" | "hiddenMobile" | "hiddenDesktop", string>;
  theme: MantineTheme;
  drawerOpened: boolean;
  toggleDrawer: () => void;
};

export default function StaticSiteHeader({
  classes,
  theme,
  drawerOpened,
  toggleDrawer,
}: HeaderProps) {

  const title = drawerOpened ? 'Close navigation' : 'Open navigation';
  
  return (
    <Box id="header-wrapper" pb={60}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Group align="center">
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.hiddenDesktop}
              title={title}
            />
            <Flex columnGap={8} align="center">
              <Box>
                <Box component={HiHome} c="secondary.8" size={20} />
              </Box>

              <Text transform="uppercase" fw={700} fz={16} c="neutral.7">
                Serve Pros Plus
              </Text>
            </Flex>
          </Group>

          <Group spacing={32}>
            <Group
              sx={{ height: "100%" }}
              spacing={0}
              className={classes.hiddenMobile}
            >
              <Box component={Link} className={classes.link} to="/">
                <span>Start A Project</span>
              </Box>
            </Group>
            {/* <Group className={classes.hiddenMobile}>
              <Button component={Link} to="pros">
                Join Our Pro Network
              </Button>
              <Button component={Link} to="account-signin" variant="subtle">
                Sign in
              </Button>
            </Group> */}
          </Group>
        </Group>
      </Header>
    </Box>
  );
}
