import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridColumnType } from '../../tailwind_map_type/flexbox_grid/grid_column_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridColumn]',
    standalone: true
})
export class GridColumnDirective extends BaseTailwindDirective {
  gridColumn = input<GridColumnType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_COLUMN: this.gridColumn(),
      });
    });
  }
}