// libs/your-lib-path/interface/theme-repository.interface.ts

import { Observable } from 'rxjs';
import { Theme } from '../../datasource';

export interface IWebsiteThemeRepository {
  /**
   * Reactive accessor for the current theme state.
   */
  readonly theme: () => Theme | null;

  /**
   * Loads a theme from assets or API, depending on environment.
   * Reuses previously loaded theme if already available.
   *
   * @param themeFile The theme file to load, e.g. "dark-theme.json"
   */
  getTheme(themeFile?: string): Observable<Theme | null>;
}
