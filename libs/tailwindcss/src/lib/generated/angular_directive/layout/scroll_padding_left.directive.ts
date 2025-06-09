import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollPaddingLeftType } from '../../tailwind_map_type/layout/scroll_padding_left_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollPaddingLeft]',
    standalone: true
})
export class ScrollPaddingLeftDirective extends BaseTailwindDirective {
  scrollPaddingLeft = input<ScrollPaddingLeftType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_PADDING_LEFT: this.scrollPaddingLeft(),
      });
    });
  }
}