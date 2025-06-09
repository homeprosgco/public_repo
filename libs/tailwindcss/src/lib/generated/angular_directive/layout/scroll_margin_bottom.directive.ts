import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollMarginBottomType } from '../../tailwind_map_type/layout/scroll_margin_bottom_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollMarginBottom]',
    standalone: true
})
export class ScrollMarginBottomDirective extends BaseTailwindDirective {
  scrollMarginBottom = input<ScrollMarginBottomType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_MARGIN_BOTTOM: this.scrollMarginBottom(),
      });
    });
  }
}