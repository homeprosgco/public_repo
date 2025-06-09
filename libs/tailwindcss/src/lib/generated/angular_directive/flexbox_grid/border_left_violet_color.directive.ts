import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftVioletColorType } from '../../tailwind_map_type/flexbox_grid/border_left_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftVioletColor]',
    standalone: true
})
export class BorderLeftVioletColorDirective extends BaseTailwindDirective {
  borderLeftVioletColor = input<BorderLeftVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_VIOLET_COLOR: this.borderLeftVioletColor(),
      });
    });
  }
}