import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridColumnStartType } from '../../tailwind_map_type/flexbox_grid/grid_column_start_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridColumnStart]',
    standalone: true
})
export class GridColumnStartDirective extends BaseTailwindDirective {
  gridColumnStart = input<GridColumnStartType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_COLUMN_START: this.gridColumnStart(),
      });
    });
  }
}