import { Typography } from "../../../website_theme/datasource";

export function flattenTypography(
  typography: Typography
): Record<string, string> {
  const flat: Record<string, string> = {};

  const recurse = (obj: any, prefix = '') => {
    for (const key in obj) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}-${key}` : key;

      if (typeof value === 'string') {
        flat[newKey] = value;
      } else if (typeof value === 'object') {
        recurse(value, newKey);
      }
    }
  };

  recurse(typography, '');
  return flat;
}
