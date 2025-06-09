import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollMarginRightType } from '../../tailwind_map_type/layout/scroll_margin_right_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollMarginRight]',
    standalone: true
})
export class ScrollMarginRightDirective extends BaseTailwindDirective {
  scrollMarginRight = input<ScrollMarginRightType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_MARGIN_RIGHT: this.scrollMarginRight(),
      });
    });
  }
}