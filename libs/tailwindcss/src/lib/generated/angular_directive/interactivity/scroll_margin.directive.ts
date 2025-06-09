import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollMarginType } from '../../tailwind_map_type/interactivity/scroll_margin_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollMargin]',
    standalone: true
})
export class ScrollMarginDirective extends BaseTailwindDirective {
  scrollMargin = input<ScrollMarginType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_MARGIN: this.scrollMargin(),
      });
    });
  }
}