import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridRowStartType } from '../../tailwind_map_type/flexbox_grid/grid_row_start_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridRowStart]',
    standalone: true
})
export class GridRowStartDirective extends BaseTailwindDirective {
  gridRowStart = input<GridRowStartType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_ROW_START: this.gridRowStart(),
      });
    });
  }
}