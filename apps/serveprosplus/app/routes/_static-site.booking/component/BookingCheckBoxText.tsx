import { createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  body: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
}));

type BookingCheckboxTextProps = {
  title: string;
  description: string;
};

export default function BookingCheckboxText({
  title,
  description,
}: BookingCheckboxTextProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.body}>
      <Text weight={500} size="sm" sx={{ lineHeight: 1 }}>
        {title}
      </Text>
      <Text color="dimmed" size="xs" sx={{ lineHeight: 1 }} mb={5}>
        {description}
      </Text>
    </div>
  );
}
