import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightWidthType } from '../../tailwind_map_type/flexbox_grid/border_right_width_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightWidth]',
    standalone: true
})
export class BorderRightWidthDirective extends BaseTailwindDirective {
  borderRightWidth = input<BorderRightWidthType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_WIDTH: this.borderRightWidth(),
      });
    });
  }
}