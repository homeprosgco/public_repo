import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollPaddingBottomType } from '../../tailwind_map_type/layout/scroll_padding_bottom_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollPaddingBottom]',
    standalone: true
})
export class ScrollPaddingBottomDirective extends BaseTailwindDirective {
  scrollPaddingBottom = input<ScrollPaddingBottomType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_PADDING_BOTTOM: this.scrollPaddingBottom(),
      });
    });
  }
}