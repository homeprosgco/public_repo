import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridColumnEndType } from '../../tailwind_map_type/flexbox_grid/grid_column_end_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridColumnEnd]',
    standalone: true
})
export class GridColumnEndDirective extends BaseTailwindDirective {
  gridColumnEnd = input<GridColumnEndType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_COLUMN_END: this.gridColumnEnd(),
      });
    });
  }
}