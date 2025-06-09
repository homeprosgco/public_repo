import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollPaddingTopType } from '../../tailwind_map_type/layout/scroll_padding_top_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollPaddingTop]',
    standalone: true
})
export class ScrollPaddingTopDirective extends BaseTailwindDirective {
  scrollPaddingTop = input<ScrollPaddingTopType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_PADDING_TOP: this.scrollPaddingTop(),
      });
    });
  }
}