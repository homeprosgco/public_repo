import { Theme } from "../../../website_theme/datasource";
import { flattenColors } from "./flatten_colors.util";
import { flattenTypography } from "./flatten_typography.util";

export function applyCSSVariables(theme: Theme) {
  const flatColors = flattenColors(theme.colors);
  Object.entries(flatColors).forEach(([key, value]) => {
    if (value) {
      document.documentElement.style.setProperty(key, value);
    }
  });

  Object.entries(flattenTypography(theme.typography)).forEach(([key, value]) => {
    if (value) {
      document.documentElement.style.setProperty(`--p-typography-${key}`, value);
    }
  });
}