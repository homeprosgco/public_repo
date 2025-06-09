import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollMarginInlineEndType } from '../../tailwind_map_type/layout/scroll_margin_inline_end_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollMarginInlineEnd]',
    standalone: true
})
export class ScrollMarginInlineEndDirective extends BaseTailwindDirective {
  scrollMarginInlineEnd = input<ScrollMarginInlineEndType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_MARGIN_INLINE_END: this.scrollMarginInlineEnd(),
      });
    });
  }
}