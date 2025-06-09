import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderTopRedColorType } from '../../tailwind_map_type/flexbox_grid/border_top_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderTopRedColor]',
    standalone: true
})
export class BorderTopRedColorDirective extends BaseTailwindDirective {
  borderTopRedColor = input<BorderTopRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_TOP_RED_COLOR: this.borderTopRedColor(),
      });
    });
  }
}