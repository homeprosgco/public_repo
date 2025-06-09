import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightTealColorType } from '../../tailwind_map_type/flexbox_grid/border_right_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightTealColor]',
    standalone: true
})
export class BorderRightTealColorDirective extends BaseTailwindDirective {
  borderRightTealColor = input<BorderRightTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_TEAL_COLOR: this.borderRightTealColor(),
      });
    });
  }
}