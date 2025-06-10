import { MantineThemeOverride, TextProps } from '@mantine/core';
import globalStyles from './global-styles';
import colors from "./foundations/colors"

export const theme: MantineThemeOverride = {
  ...globalStyles,
  colors,
  fontFamily: '"Red Hat Text", sans-serif',
  // fontSizes: {
  //   xs: 10,
  //   sm: 12,
  //   md: 14,
  //   lg: 16,
  //   xl: 18
  // },
  primaryColor: 'primary',
  primaryShade: 6,
  headings: {
    fontWeight: 500,
    fontFamily: "Red Hat Text",
    sizes: {
      h1: { fontWeight: 700, fontSize: 57, },
      h2: { fontWeight: 600, fontSize: 32 },
      h3: { fontWeight: 700, fontSize: 28 },
      h4: { fontWeight: 500, fontSize: 21 },
      h5: { fontWeight: 500, fontSize: 14 },
      h6: { fontWeight: 600, fontSize: 12 }
    }
  },
  focusRingStyles: {
    inputStyles: (theme) => ({ outline: `1px solid ${theme.colors.secondary[8]}` })
  },
  components: {
    Button: {
      defaultProps: {
        size: 'sm',
        color: 'accent',
      },
      styles: (theme) => ({
        root: {
          borderRadius: theme.radius.md
        }
      })
    },
    TextInput: {
      styles: (theme) => ({
        root: {
          position: "relative"
        },
        input: {
          height: "auto",
          paddingTop: 9,
          paddingBottom: 9,
          backgroundColor: `${theme.fn.lighten(`${theme.colors.primary[1]}`, .8)}`,
          border: `1px solid ${theme.fn.lighten(`${theme.colors.neutral[5]}`, .7)}`,
          fontWeight: 400,
          fontSize: 16,

          "::placeholder": {
            fontSize: 16,
            fontWeight: 300
          }
        },
        error: {
          color: theme.colors.danger[3]
        }
      })
    },
    Textarea: {
      styles: (theme) => ({
        root: {
          position: "relative"
        },
        input: {
          height: "auto",
          paddingTop: 18,
          backgroundColor: `${theme.fn.lighten(`${theme.colors.primary[1]}`, .8)}`,
          border: `1px solid ${theme.fn.lighten(`${theme.colors.neutral[5]}`, .7)}`,
          fontWeight: 400,
          fontSize: 16,

          "::placeholder": {
            fontSize: 16,
            fontWeight: 300
          }
        }
      })
    },
    Navbar: {
      styles: {
        root: {
          width: '300px',
        }
      }
    }
  }
};