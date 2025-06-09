export interface Typography {
  // variants: TypographyVariantsConfig;
  heading_font: string;
  body_font: string;
  base_font_size: string;
  display: TypographySize;
  headline: TypographySize;
  title: TypographySize;
  body: TypographySize;
  label: TypographySize;
  font: {
    primary: string;
    secondary: string;
    accent: string;
  };
  font_urls: string[];
}

export interface TypographySize {
  large: { size: string; weight: string; lineHeight: string };
  medium: { size: string; weight: string; lineHeight: string };
  small: { size: string; weight: string; lineHeight: string };
}

export interface ThemeColorGroup {
  color: string;
  onColor?: string;
  container?: string;
  onContainer?: string;
}

export interface Theme {
  colors: {
    primary: ThemeColorGroup;
    secondary: ThemeColorGroup;
    tertiary: ThemeColorGroup;
    error: ThemeColorGroup;

    surface: {
      color: string;
      onColor: string;
      dim?: string;
      bright?: string;
      variant?: string;
      containerLowest?: string;
      containerLow?: string;
      container?: string;
      containerHigh?: string;
      containerHighest?: string;
      onVariant?: string;
    };

    outline: {
      color: string;
      variant?: string;
    };

    inverse: {
      surface: string;
      onSurface: string;
      primary: string;
    };

    scrim: string;
    shadow: string;

    heading: { color: string };
    text: { color: string };
    button: {
      background: { color: string };
      text: { color: string };
    };
    link: {
      default: { color: string };
      hover: { color: string };
    };
  };

  typography: Typography;
}