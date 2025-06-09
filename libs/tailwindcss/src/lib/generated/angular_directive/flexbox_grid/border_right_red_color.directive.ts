import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRightRedColorType } from '../../tailwind_map_type/flexbox_grid/border_right_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRightRedColor]',
    standalone: true
})
export class BorderRightRedColorDirective extends BaseTailwindDirective {
  borderRightRedColor = input<BorderRightRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RIGHT_RED_COLOR: this.borderRightRedColor(),
      });
    });
  }
}