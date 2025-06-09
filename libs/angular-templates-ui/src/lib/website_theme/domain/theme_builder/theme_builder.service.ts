// theme-builder.service.ts
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { ThemeColors } from '../interface';
import { Theme, ThemeState } from '../../datasource';
import { reshapeThemeColors, updateThemePreset } from '../../../core/util';

@Injectable({ providedIn: 'root' })
export class ThemeBuilderService {
  private channel = new BroadcastChannel('theme-channel');
  private _themeColors = signal<Partial<ThemeColors>>({});
  private _themeState = inject(ThemeState);
  readonly themeState = computed(() => this._themeState.theme());

  constructor() {
    this.channel.onmessage = (event) => {
      const updatedTheme: Theme = event.data;
      console.log('[🔄] Received theme update from another tab:', updatedTheme);
      this._themeState.updateTheme(updatedTheme);
    };
    effect(() => {
      const { data, name } = this.themeState();
      if (!name || !data) return;

      this.applyTheme(name, data);
    });
  }

  setThemeColors(colors: Partial<ThemeColors>) {
    const currentTheme = this.themeState().data;
    const currentColors = currentTheme?.colors;

    const normalizedTheme = {
      ...currentTheme,
      colors: reshapeThemeColors(colors),
    } as Theme;

    this._themeColors.set(colors);
    this.channel.postMessage(normalizedTheme);
  }

  applyTheme(themeName: string, theme: Theme) {
    updateThemePreset(themeName, theme); // update Tailwind + tokens
  }

  getThemeColors(): Partial<ThemeColors> {
    return this._themeColors();
  }

  get themeColorsSignal() {
    return this._themeColors;
  }

  getThemeSnapshot() {
    return this.themeState().data;
  }
}
