import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { BorderInlineStartRedColorType } from '../../tailwind_map_type/flexbox_grid/border_inline_start_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[borderInlineStartRedColor]',
    standalone: true
})
export class BorderInlineStartRedColorDirective extends BaseTailwindDirective {
  borderInlineStartRedColor = input<BorderInlineStartRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        BORDER_INLINE_START_RED_COLOR: this.borderInlineStartRedColor(),
      });
    });
  }
}