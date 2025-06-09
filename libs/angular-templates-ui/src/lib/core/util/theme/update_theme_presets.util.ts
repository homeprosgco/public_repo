import { Theme } from '../../../website_theme/datasource';
import { applyCSSVariables } from './apply_css_variables.util';
import { loadWebsiteThemeFonts } from './load_website_theme_fonts';
import { reshapeThemeColors } from './reshape_theme_colors';

export function updateThemePreset(themeName: string, theme: Theme) {
  const normalizedTheme = {
    ...theme,
    colors: reshapeThemeColors((theme as any).colors),
  };
  loadWebsiteThemeFonts(themeName, theme.typography.font_urls);
  applyCSSVariables(normalizedTheme);

  console.log(`✅ Theme "${themeName}" has been applied.`);
}
