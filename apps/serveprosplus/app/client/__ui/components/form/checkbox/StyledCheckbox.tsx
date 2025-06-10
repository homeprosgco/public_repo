import { createStyles, UnstyledButton, Text, Checkbox } from "@mantine/core";

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    transition: "background-color 150ms ease, border-color 150ms ease",
    border: `1px solid ${
      checked
        ? theme.fn.variant({ variant: "outline", color: theme.primaryColor })
            .border
        : theme.colors.neutral[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: checked
      ? theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .background
      : theme.white,
  },

  body: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
}));

interface StyledCheckboxProps {
  checked: boolean;
  onChange: (title: string) => void;
  title: string;
  description: string;
  defaultChecked?: boolean;
}

export function StyledCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  className,
  ...others
}: StyledCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof StyledCheckboxProps>) {
  const { classes, cx } = useStyles({ checked: checked });

  return (
    <UnstyledButton
      {...others}
      onClick={() => onChange(title)}
      className={cx(classes.button, className)}
    >
      <Checkbox
        checked={checked}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: "pointer" } }}
      />

      <div className={classes.body}>
        <Text color="dimmed" size="xs" sx={{ lineHeight: 1 }} mb={5}>
          {description}
        </Text>
        <Text weight={500} size="sm" sx={{ lineHeight: 1 }}>
          {title}
        </Text>
      </div>
    </UnstyledButton>
  );
}
