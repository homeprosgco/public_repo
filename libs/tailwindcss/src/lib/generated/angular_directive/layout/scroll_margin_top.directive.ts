import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollMarginTopType } from '../../tailwind_map_type/layout/scroll_margin_top_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollMarginTop]',
    standalone: true
})
export class ScrollMarginTopDirective extends BaseTailwindDirective {
  scrollMarginTop = input<ScrollMarginTopType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_MARGIN_TOP: this.scrollMarginTop(),
      });
    });
  }
}