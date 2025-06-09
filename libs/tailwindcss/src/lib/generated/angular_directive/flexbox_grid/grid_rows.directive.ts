import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridRowsType } from '../../tailwind_map_type/flexbox_grid/grid_rows_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridRows]',
    standalone: true
})
export class GridRowsDirective extends BaseTailwindDirective {
  gridRows = input<GridRowsType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_ROWS: this.gridRows(),
      });
    });
  }
}