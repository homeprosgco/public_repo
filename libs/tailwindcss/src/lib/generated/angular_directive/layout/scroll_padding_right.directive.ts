import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollPaddingRightType } from '../../tailwind_map_type/layout/scroll_padding_right_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollPaddingRight]',
    standalone: true
})
export class ScrollPaddingRightDirective extends BaseTailwindDirective {
  scrollPaddingRight = input<ScrollPaddingRightType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_PADDING_RIGHT: this.scrollPaddingRight(),
      });
    });
  }
}