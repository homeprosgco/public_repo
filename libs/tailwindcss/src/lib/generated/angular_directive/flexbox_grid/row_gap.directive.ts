import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RowGapType } from '../../tailwind_map_type/flexbox_grid/row_gap_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[rowGap]',
    standalone: true
})
export class RowGapDirective extends BaseTailwindDirective {
  rowGap = input<RowGapType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ROW_GAP: this.rowGap(),
      });
    });
  }
}