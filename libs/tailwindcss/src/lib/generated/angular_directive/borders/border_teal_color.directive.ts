import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTealColorType } from '../../tailwind_map_type/borders/border_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTealColor]',
    standalone: true
})
export class BorderTealColorDirective extends BaseTailwindDirective {
  borderTealColor = input<BorderTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TEAL_COLOR: this.borderTealColor(),
      });
    });
  }
}