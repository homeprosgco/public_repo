import { Box, createStyles, MantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MaybeUser } from "~/routes/_auth/useSupabaseContext";
import StaticSiteDrawer from "./StaticeSiteDrawer";
import { StaticSiteFooter } from "./StaticSiteFooter";
import StaticSiteHeader from "./StaticSiteHeader";

type StaticSiteAppShellProps = { children: React.ReactNode; user: MaybeUser };
interface UserProps {
  user: MaybeUser;
}

const useStyles = createStyles((theme: MantineTheme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
      paddingLeft: theme.spacing.sm,
      paddingRight: theme.spacing.sm,
    },

    [theme.fn.smallerThan("md")]: {
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  hiddenMobile: {
    "@media (max-width: 840px)": {
      display: "none",
    },
    // [theme.fn.smallerThan("md")]: {
    //   display: "none",
    // },
  },

  hiddenDesktop: {
    // [theme.fn.largerThan("md")]: {
    //   display: "none",
    // },
    "@media (min-width: 840px)": {
      display: "none",
    },
  },
}));

const footerLinks = {
  data: [
    {
      title: "Company",
      links: [
        {
          label: "About Us",
          link: "#",
        },
        {
          label: "Terms & Condition",
          link: "#",
        },
        {
          label: "Privacy Policy",
          link: "#",
        },
      ],
    },
    {
      title: "Follow",
      links: [
        {
          label: "Facebook",
          link: "#",
        },
        {
          label: "Instagram",
          link: "#",
        },
        {
          label: "LinkedIn",
          link: "#",
        },
      ],
    },
  ],
};

export default function StaticSiteAppShell({
  children,
  user,
}: StaticSiteAppShellProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();
  return (
    <>
      <Box sx={(theme) => ({ backgroundColor: theme.white })}>
        <StaticSiteHeader
          classes={classes}
          drawerOpened={drawerOpened}
          toggleDrawer={toggleDrawer}
          theme={theme}
        />
        <StaticSiteDrawer
          classes={classes}
          drawerOpened={drawerOpened}
          closeDrawer={closeDrawer}
          theme={theme}
        />
        {children}
        <StaticSiteFooter data={footerLinks.data} />
      </Box>
    </>
  );
}
