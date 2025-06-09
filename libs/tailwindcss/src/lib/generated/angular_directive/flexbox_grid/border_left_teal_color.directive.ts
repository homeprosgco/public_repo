import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftTealColorType } from '../../tailwind_map_type/flexbox_grid/border_left_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftTealColor]',
    standalone: true
})
export class BorderLeftTealColorDirective extends BaseTailwindDirective {
  borderLeftTealColor = input<BorderLeftTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_TEAL_COLOR: this.borderLeftTealColor(),
      });
    });
  }
}