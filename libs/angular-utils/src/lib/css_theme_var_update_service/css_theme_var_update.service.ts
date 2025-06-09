import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CssThemeVarUpdateService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  /**
   * Applies theme tokens as CSS variables to the [data-theme] attribute.
   * Accepts the parsed JS object form of the TypeScript theme object.
   */
  applyTheme(theme: { [key: string]: string }) {
    const themeRoot = this.document.querySelector('[data-theme]') as HTMLElement;

    if (!themeRoot) {
      console.warn('[ThemeService] No [data-theme] root element found.');
      return;
    }

    for (const token in theme) {
      const cssVar = `--${token}`;
      const value = theme[token];

      if (value && value !== 'null') {
        themeRoot.style.setProperty(cssVar, value);
      }
    }
  }
}
