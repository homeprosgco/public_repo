import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollMarginLeftType } from '../../tailwind_map_type/layout/scroll_margin_left_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollMarginLeft]',
    standalone: true
})
export class ScrollMarginLeftDirective extends BaseTailwindDirective {
  scrollMarginLeft = input<ScrollMarginLeftType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_MARGIN_LEFT: this.scrollMarginLeft(),
      });
    });
  }
}