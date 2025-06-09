import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridRowEndType } from '../../tailwind_map_type/flexbox_grid/grid_row_end_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridRowEnd]',
    standalone: true
})
export class GridRowEndDirective extends BaseTailwindDirective {
  gridRowEnd = input<GridRowEndType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_ROW_END: this.gridRowEnd(),
      });
    });
  }
}