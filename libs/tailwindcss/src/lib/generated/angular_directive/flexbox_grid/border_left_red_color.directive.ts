import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderLeftRedColorType } from '../../tailwind_map_type/flexbox_grid/border_left_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderLeftRedColor]',
    standalone: true
})
export class BorderLeftRedColorDirective extends BaseTailwindDirective {
  borderLeftRedColor = input<BorderLeftRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_LEFT_RED_COLOR: this.borderLeftRedColor(),
      });
    });
  }
}