import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderRedColorType } from '../../tailwind_map_type/borders/border_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderRedColor]',
    standalone: true
})
export class BorderRedColorDirective extends BaseTailwindDirective {
  borderRedColor = input<BorderRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_RED_COLOR: this.borderRedColor(),
      });
    });
  }
}