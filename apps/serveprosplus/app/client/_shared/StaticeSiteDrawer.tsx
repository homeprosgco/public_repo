import {
  Anchor,
  Button,
  Divider,
  Drawer,
  Group,
  MantineTheme,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { Link } from "@remix-run/react";

type StaticSiteDrawerProps = {
  classes: Record<"link" | "hiddenMobile" | "hiddenDesktop", string>;
  theme: MantineTheme;
  drawerOpened: boolean;
  closeDrawer: () => void;
};

export default function StaticSiteDrawer({
  classes,
  theme,
  drawerOpened,
  closeDrawer,
}: StaticSiteDrawerProps) {
  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size={256}
      padding="md"
      title="Navigation"
      className={classes.hiddenDesktop}
      zIndex={1000000}
      id="desktop-drawer"
    >
      <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />

        <a href="#" className={classes.link}>
          Home
        </a>
        <a href="#" className={classes.link}>
          Home
        </a>
        <a href="#" className={classes.link}>
          Learn
        </a>
        <a href="#" className={classes.link}>
          Academy
        </a>

        <Link
          to="/serveprosplusoffice/admin/marketing/service-provider-prospects"
          className={classes.link}
        >
          Dashbaord
        </Link>

        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />

        <Stack px="xl">
          <Button>Join Our Pro Network</Button>
          <Anchor component={Link} to="/account-signin">
            <Button variant="subtle">Sign in</Button>
          </Anchor>
        </Stack>
      </ScrollArea>
    </Drawer>
  );
}
