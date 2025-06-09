import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridColsType } from '../../tailwind_map_type/flexbox_grid/grid_cols_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridCols]',
    standalone: true
})
export class GridColsDirective extends BaseTailwindDirective {
  gridCols = input<GridColsType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_COLS: this.gridCols(),
      });
    });
  }
}