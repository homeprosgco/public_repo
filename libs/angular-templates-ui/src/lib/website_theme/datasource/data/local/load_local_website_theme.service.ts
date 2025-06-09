import { Injectable, inject } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Theme } from '../../model';
import { ILoadWebsiteThemeService } from '../../interface';
import {
  ASSETS_SERVICE_TOKEN,
  IAssetsService,
} from '@public-repo/angular-utils';

@Injectable({ providedIn: 'root' })
export class LoadLocalWebsiteThemeService implements ILoadWebsiteThemeService {
  private assets: IAssetsService = inject(ASSETS_SERVICE_TOKEN);

  fetchTheme$(
    themeFile: string = 'default_website_theme.json'
  ): Observable<Theme | null> {
    return this.assets.get<Theme>(`assets/themes/${themeFile}`).pipe(
      catchError((err) => {
        console.warn('❌ Failed to load local dev theme', err);
        return of(null);
      })
    );
  }
}
