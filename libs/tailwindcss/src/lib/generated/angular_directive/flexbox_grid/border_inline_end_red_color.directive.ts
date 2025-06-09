import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineEndRedColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_end_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineEndRedColor]',
    standalone: true
})
export class BorderInlineEndRedColorDirective extends BaseTailwindDirective {
  borderInlineEndRedColor = input<BorderInlineEndRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_END_RED_COLOR: this.borderInlineEndRedColor(),
      });
    });
  }
}