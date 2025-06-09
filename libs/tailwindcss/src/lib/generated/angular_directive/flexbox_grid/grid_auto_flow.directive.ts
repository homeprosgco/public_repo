import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GridAutoFlowType } from '../../tailwind_map_type/flexbox_grid/grid_auto_flow_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gridAutoFlow]',
    standalone: true
})
export class GridAutoFlowDirective extends BaseTailwindDirective {
  gridAutoFlow = input<GridAutoFlowType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRID_AUTO_FLOW: this.gridAutoFlow(),
      });
    });
  }
}