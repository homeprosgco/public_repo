import { createStyles, Card, Group, Text, Anchor, Box } from "@mantine/core";
import { Link } from "@remix-run/react";
import { IconChevronRight } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  item: {
    "& + &": {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },
  },

  switch: {
    "& *": {
      cursor: "pointer",
    },
  },

  title: {
    lineHeight: 1,
  },
}));

interface ProfileSettingsProps {
  data: {
    title: string;
    link: string;
  }[];
}

export default function ProfileSettings({ data }: ProfileSettingsProps) {
  const { classes } = useStyles();

  const items = data.map((item) => (
    <Box className={classes.item}>
      <Anchor component={Link} to={item.link}>
        <Group position="apart" noWrap spacing="xl">
          <div>
            <Text>{item.title}</Text>
          </div>
          <IconChevronRight size={14} stroke={1.5} />
        </Group>
      </Anchor>
    </Box>
  ));

  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      {items}
    </Card>
  );
}
