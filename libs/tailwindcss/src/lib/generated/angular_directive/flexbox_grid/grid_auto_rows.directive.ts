import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridAutoRowsType } from '../../tailwind_map_type/flexbox_grid/grid_auto_rows_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridAutoRows]',
    standalone: true
})
export class GridAutoRowsDirective extends BaseTailwindDirective {
  gridAutoRows = input<GridAutoRowsType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_AUTO_ROWS: this.gridAutoRows(),
      });
    });
  }
}