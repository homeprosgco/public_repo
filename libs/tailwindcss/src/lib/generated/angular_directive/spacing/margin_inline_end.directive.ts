import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MarginInlineEndType } from '../../tailwind_map_type/spacing/margin_inline_end_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[marginInlineEnd]',
    standalone: true
})
export class MarginInlineEndDirective extends BaseTailwindDirective {
  marginInlineEnd = input<MarginInlineEndType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MARGIN_INLINE_END: this.marginInlineEnd(),
      });
    });
  }
}