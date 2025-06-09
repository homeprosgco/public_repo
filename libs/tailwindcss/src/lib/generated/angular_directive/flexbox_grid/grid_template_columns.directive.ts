import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridTemplateColumnsType } from '../../tailwind_map_type/flexbox_grid/grid_template_columns_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridTemplateColumns]',
    standalone: true
})
export class GridTemplateColumnsDirective extends BaseTailwindDirective {
  gridTemplateColumns = input<GridTemplateColumnsType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_TEMPLATE_COLUMNS: this.gridTemplateColumns(),
      });
    });
  }
}