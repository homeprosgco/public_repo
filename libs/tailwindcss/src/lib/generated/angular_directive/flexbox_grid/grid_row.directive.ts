import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridRowType } from '../../tailwind_map_type/flexbox_grid/grid_row_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridRow]',
    standalone: true
})
export class GridRowDirective extends BaseTailwindDirective {
  gridRow = input<GridRowType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_ROW: this.gridRow(),
      });
    });
  }
}