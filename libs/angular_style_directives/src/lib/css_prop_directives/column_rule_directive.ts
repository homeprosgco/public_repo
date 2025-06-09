import { Directive, ElementRef, inject, input, effect } from '@angular/core';
import { DirectiveUtils } from '../directive_utils';
import { MediaQueryService } from '@public-repo/angular-utils';

@Directive({
  selector: '[sgColumnRule]',
  standalone: true
})
export class ColumnRuleDirective {
  private el = inject(ElementRef);
  private utils = inject(DirectiveUtils);
  private media = inject(MediaQueryService);

  sgColumnRule = input<string | { [media: string]: string }>();

  constructor() {
    effect(() => {
      const raw = this.sgColumnRule() ?? '';
      const values = this.utils.parseResponsiveObject(raw ?? {});
      
      const base = values['base'];
      const entries = Object.entries(values)
      .filter(([k]) => k !== 'base')
      .map(([k, v]) => {
        const px = parseInt(k.match(/min-width:\s*(\d+)px/)?.[1] || '0', 10);
        return { query: k, value: v, minWidth: px };
      })
      .sort((a, b) => b.minWidth - a.minWidth);

      let applied = base;

      for (const entry of entries) {
        const cleaned = entry.query.replace('@media ', '');
        const signal = this.media.watch(cleaned);
        if (signal()) {
          applied = entry.value;
          break;
        }
      }

      this.el.nativeElement.style.columnRule = applied ?? '';
      
    });
  }

}
