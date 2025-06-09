import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridTemplateRowsType } from '../../tailwind_map_type/flexbox_grid/grid_template_rows_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridTemplateRows]',
    standalone: true
})
export class GridTemplateRowsDirective extends BaseTailwindDirective {
  gridTemplateRows = input<GridTemplateRowsType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_TEMPLATE_ROWS: this.gridTemplateRows(),
      });
    });
  }
}