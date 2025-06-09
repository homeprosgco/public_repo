// libs/your-lib-path/interface/load-website-theme.interface.ts

import { Observable } from 'rxjs';
import { Theme } from '../model';

export interface ILoadWebsiteThemeService {
  /**
   * Fetches a theme JSON file from the configured cloud URL
   * @param path - Relative path to the theme file
   */
  fetchTheme$(path: string): Observable<Theme | null>;
}
