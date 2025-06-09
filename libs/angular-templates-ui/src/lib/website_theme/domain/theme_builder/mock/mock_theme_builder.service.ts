// mocks/mock-theme-builder.service.ts
import { Injectable, signal } from '@angular/core';
import { ThemeColors } from '../../interface';

@Injectable()
export class MockThemeBuilderService {
  private _theme = signal<Partial<ThemeColors>>({
    primary: '#00bcd4',
    secondary: '#ff4081',
  });

  setThemeColors(colors: Partial<ThemeColors>) {
    this._theme.set(colors);
  }

  theme = this._theme;
}
