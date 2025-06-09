import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomTealColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomTealColor]',
    standalone: true
})
export class BorderBottomTealColorDirective extends BaseTailwindDirective {
  borderBottomTealColor = input<BorderBottomTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_TEAL_COLOR: this.borderBottomTealColor(),
      });
    });
  }
}