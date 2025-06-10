import { MantineTheme, MantineThemeOverride } from '@mantine/core';

const globalStyles: MantineThemeOverride = {
  globalStyles: (theme: MantineTheme) => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },

    body: {
      ...theme.fn.fontStyles(),
      backgroundColor: theme.colors.secondary[8],
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.neutral[5],
      lineHeight: theme.lineHeight,

      [theme.fn.largerThan('sm')]: {
        backgroundColor: theme.fn.lighten('#ebedee', .8)
      }
    }
  })
};

export default globalStyles;