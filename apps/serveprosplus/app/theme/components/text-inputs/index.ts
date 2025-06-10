import { createStyles } from '@mantine/core';

export const useTextInputStyles = createStyles((theme) => ({
  root: {
    position: "relative"
  },
  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.md,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    zIndex: 1,
    color: theme.colors.neutral[5],
    top: "-10px",
    fontWeight: 400
  },
  input: {
    height: "auto",
    paddingTop: 18,
    backgroundColor: theme.fn.lighten(`${theme.colors.neutral[0]}`, .9),
    border: `1px solid ${theme.fn.lighten(`${theme.colors.neutral[0]}`, .2)}`,
    fontWeight: 400,
    fontSize: 16,

    "::placeholder": {
      fontSize: 16,
      fontWeight: 300
    }
  }
}));