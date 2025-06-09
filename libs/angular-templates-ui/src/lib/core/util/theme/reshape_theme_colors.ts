import { Theme } from "../../../website_theme/datasource";

export function reshapeThemeColors(flat: { [key: string]: string }): Theme['colors'] {
  return {
    primary: {
      color: flat['primary'],
      onColor: flat['onPrimary'],
      container: flat['primaryContainer'],
      onContainer: flat['onPrimaryContainer'],
    },
    secondary: {
      color: flat['secondary'],
      onColor: flat['onSecondary'],
      container: flat['secondaryContainer'],
      onContainer: flat['onSecondaryContainer'],
    },
    tertiary: {
      color: flat['tertiary'],
      onColor: flat['onTertiary'],
      container: flat['tertiaryContainer'],
      onContainer: flat['onTertiaryContainer'],
    },
    error: {
      color: flat['error'],
      onColor: flat['onError'],
      container: flat['errorContainer'],
      onContainer: flat['onErrorContainer'],
    },

    surface: {
      color: flat['surface'],
      onColor: flat['onSurface'],
      dim: flat['surfaceDim'],
      bright: flat['surfaceBright'],
      variant: flat['onSurfaceVariant'],
      containerLowest: flat['surfaceContainerLowest'],
      containerLow: flat['surfaceContainerLow'],
      container: flat['surfaceContainer'],
      containerHigh: flat['surfaceContainerHigh'],
      containerHighest: flat['surfaceContainerHighest'],
      onVariant: flat['onSurfaceVariant'],
    },

    outline: {
      color: flat['outline'],
      variant: flat['outlineVariant'],
    },

    inverse: {
      surface: flat['inverseSurface'],
      onSurface: flat['inverseOnSurface'],
      primary: flat['inversePrimary'],
    },

    scrim: flat['scrim'],
    shadow: flat['shadow'],

    heading: {
      color: flat['onSurface'],
    },
    text: {
      color: flat['onSurface'],
    },
    button: {
      background: { color: flat['primary'] },
      text: { color: flat['onPrimary'] },
    },
    link: {
      default: { color: flat['primary'] },
      hover: { color: flat['onPrimary'] },
    },
  };
}
