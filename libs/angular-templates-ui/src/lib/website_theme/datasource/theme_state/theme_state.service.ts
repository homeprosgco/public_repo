// libs/your-lib-path/state/theme-state.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Theme } from '../model';

@Injectable({ providedIn: 'root' })
export class ThemeState {
  private _theme = signal<Theme | null>(null);
  private _themeName = signal<string | null>(null);

  // 👇 Expose public readonly signals
  readonly theme = computed(() => {
    return {
      name: this._themeName(),
      data: this._theme(),
    };
  });

  setTheme(name: string, theme: Theme) {
    this._theme.set(theme);
    this._themeName.set(name);
  }

  updateTheme(theme: Theme) {
    this._theme.set(theme);
  }

  reset() {
    this._theme.set(null);
    this._themeName.set(null);
  }
}
