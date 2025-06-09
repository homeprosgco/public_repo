import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderBottomRedColorType } from '../../tailwind_map_type/flexbox_grid/border_bottom_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderBottomRedColor]',
    standalone: true
})
export class BorderBottomRedColorDirective extends BaseTailwindDirective {
  borderBottomRedColor = input<BorderBottomRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_BOTTOM_RED_COLOR: this.borderBottomRedColor(),
      });
    });
  }
}