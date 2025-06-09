import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Theme } from '../model';
import { ILoadWebsiteThemeService } from '../interface';
import {
  LoadLocalWebsiteThemeService,
  LoadRemoteWebsiteThemeService,
} from '../data';
import { CONFIG_SERVICE_TOKEN, IConfigService } from '../../../core/config';
import { ThemeState } from '../theme_state/theme_state.service';

@Injectable({ providedIn: 'root' })
export class ThemeRepository {

  private themeState = inject(ThemeState);
  private config: IConfigService = inject(CONFIG_SERVICE_TOKEN);
  private remoteTheme: ILoadWebsiteThemeService = inject(
    LoadRemoteWebsiteThemeService
  );
  private localTheme: ILoadWebsiteThemeService = inject(
    LoadLocalWebsiteThemeService
  );

  getTheme(
    themeFile: string = 'default_website_theme.json'
  ): Observable<Theme | null> {
    const themeName = themeFile.replace('.json', '');

    if (this.themeState.theme().name === themeName && this.themeState.theme().data) {
      return of(this.themeState.theme().data);
    }

    const source$ = this.config.isProd
      ? this.remoteTheme.fetchTheme$(themeFile).pipe(
          catchError((error) => {
            console.warn(
              `❌ Failed to fetch cloud theme "${themeFile}"`,
              error
            );
            return of(null);
          })
        )
      : this.localTheme.fetchTheme$(themeFile).pipe(
          catchError((err) => {
            console.warn('❌ Failed to load local dev theme', err);
            return of(null);
          })
        );

    return source$.pipe(
      tap((theme) => {
        if (theme) {
          this.themeState.setTheme(themeName, theme);
        } else {
          console.warn(`⚠️ Theme "${themeFile}" was not found.`);
        }
      })
    );
  }
}
