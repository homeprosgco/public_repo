import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ColumnGapType } from '../../tailwind_map_type/layout/column_gap_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[columnGap]',
    standalone: true
})
export class ColumnGapDirective extends BaseTailwindDirective {
  columnGap = input<ColumnGapType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        COLUMN_GAP: this.columnGap(),
      });
    });
  }
}