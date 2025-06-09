import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridAutoColumnsType } from '../../tailwind_map_type/flexbox_grid/grid_auto_columns_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridAutoColumns]',
    standalone: true
})
export class GridAutoColumnsDirective extends BaseTailwindDirective {
  gridAutoColumns = input<GridAutoColumnsType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_AUTO_COLUMNS: this.gridAutoColumns(),
      });
    });
  }
}