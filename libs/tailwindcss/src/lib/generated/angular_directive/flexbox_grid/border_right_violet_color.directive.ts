import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightVioletColorType } from '../../tailwind_map_type/flexbox_grid/border_right_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightVioletColor]',
    standalone: true
})
export class BorderRightVioletColorDirective extends BaseTailwindDirective {
  borderRightVioletColor = input<BorderRightVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_VIOLET_COLOR: this.borderRightVioletColor(),
      });
    });
  }
}