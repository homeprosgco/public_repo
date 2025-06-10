import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Divider,
  Box,
  Stack,
  List,
  Flex,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import { MdEmail, MdLocationPin, MdOutlineBusiness, MdPhone } from "react-icons/md";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 48,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    width: "100%",

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    width: "100%",
    // [theme.fn.smallerThan('sm')]: {
    //   display: 'none',
    // },
  },

  wrapper: {
    width: "100%",
    textAlign: "center",
  },

  link: {
    display: "block",
    color: theme.colors.primary[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colors.primary[6],
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function StaticSiteFooter({ data }: FooterLinksProps) {
  const { classes } = useStyles();
  const iconColor = "#c36903";

  const groups = data.map((group, index) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
        {data.length - 1 !== index ? (
          <Box my={32}>
            <Divider my="sm" color="#dedede" />
          </Box>
        ) : null}
      </div>
    );
  });

  return (
    <footer id="desktop-footer" className={classes.footer}>
      <Container className={classes.inner}>
        <Stack
          bg="primary"
          w="100%"
          align="center"
          p={24}
          sx={{ borderRadius: 8 }}
          mb={64}
        >
          <div className={classes.logo}>
          </div>
          <Text className={classes.title} sx={{ color: "white" }}>
            Address
          </Text>
          <List listStyleType="none">
            <List.Item>
              <Flex columnGap={16} align="center" pb={24}>
                <MdOutlineBusiness size={24} color={iconColor} />
                <Text c="#ffffff">Home Repair  & Improvement Marketing Agency</Text>
              </Flex>
            </List.Item>
            <List.Item>
              <Flex columnGap={16} align="center" pb={24}>
                <MdLocationPin size={24} color={iconColor} />
                <Stack spacing={0}>
                <Text c="#ffffff">7750 Okeechobee Boulevard</Text>
                <Text c="#ffffff">West Palm Beach, FL 33411</Text>
                </Stack>
              </Flex>
            </List.Item>
            <List.Item>
              <Flex columnGap={16} align="center" pb={24}>
                <MdPhone size={24} color={iconColor} />
                <Text c="#ffffff">1 (888) 820-7767</Text>
              </Flex>
            </List.Item>
            <List.Item>
              <Flex columnGap={16} align="center" pb={24}>
                <MdEmail size={24} color={iconColor} />
                <Text c="#ffffff">customersupport@serveprosplus.com</Text>
              </Flex>
            </List.Item>
          </List>
        </Stack>

        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 Serve Pros Plus All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
