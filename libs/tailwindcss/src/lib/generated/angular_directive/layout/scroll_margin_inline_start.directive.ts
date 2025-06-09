import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollMarginInlineStartType } from '../../tailwind_map_type/layout/scroll_margin_inline_start_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollMarginInlineStart]',
    standalone: true
})
export class ScrollMarginInlineStartDirective extends BaseTailwindDirective {
  scrollMarginInlineStart = input<ScrollMarginInlineStartType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_MARGIN_INLINE_START: this.scrollMarginInlineStart(),
      });
    });
  }
}