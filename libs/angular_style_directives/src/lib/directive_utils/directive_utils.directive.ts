import { inject, Injectable } from '@angular/core';
import { MediaQueryService } from '@public-repo/angular-utils';

@Injectable({ providedIn: 'root' })
export class DirectiveUtils {
  private mediaQuery = inject(MediaQueryService);

  private getResponsiveValue(obj: { [key: string]: string }): string {
    const matches: [string, number][] = [];
    
  
    for (const key of Object.keys(obj)) {
      if (key.startsWith('@media')) {
        const query = key.replace('@media ', '');
  
        if (this.mediaQuery.watch(query)()) {
          // Try to extract min-width or max-width as number
          const match = query.match(/min-width:\s*(\d+)px/);
          const px = match ? parseInt(match[1], 10) : 0;
          matches.push([key, px]);
        }
      }
    }
  
    if (matches.length > 0) {
      // Sort descending by specificity (min-width)
      matches.sort((a, b) => b[1] - a[1]);
      return obj[matches[0][0]];
    }
  
    return obj['base'] ?? '';
  }
  

  parseResponsiveObject(
    raw: string | { [key: string]: string } | undefined
  ): { [key: string]: string } {
    if (typeof raw === 'string') {
      // Early exit for plain strings
      if (!raw.includes('{')) {
        return { base: raw };
      }
  
      try {
        const fixed = raw
          .replace(/([{,]\s*)([^"'{@][^:]*?)(\s*):/g, '$1"$2":') // quote keys
          .replace(/:\s*'([^']+)'/g, ': "$1"')                   // single to double in values
          .replace(/'/g, '"');                                   // fallback
  
        return JSON.parse(fixed);
      } catch (e) {
        console.warn('Invalid responsive JSON string:', raw);
        return {};
      }
    }
  
    return raw ?? {};
  }

}
