import { ThemeColors } from '../../../website_theme/domain/interface';

export function updateFlatThemeColors(
  updates: Partial<ThemeColors>,
  current: ThemeColors
): ThemeColors {
  return {
    ...current,
    ...Object.keys(updates).reduce((acc, key) => {
      if (key in current) {
        acc[key as keyof ThemeColors] = updates[key as keyof ThemeColors]!;
      }
      return acc;
    }, {} as Partial<ThemeColors>),
  };
}
