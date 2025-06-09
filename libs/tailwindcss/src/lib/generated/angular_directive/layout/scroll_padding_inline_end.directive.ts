import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollPaddingInlineEndType } from '../../tailwind_map_type/layout/scroll_padding_inline_end_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollPaddingInlineEnd]',
    standalone: true
})
export class ScrollPaddingInlineEndDirective extends BaseTailwindDirective {
  scrollPaddingInlineEnd = input<ScrollPaddingInlineEndType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_PADDING_INLINE_END: this.scrollPaddingInlineEnd(),
      });
    });
  }
}