import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { ScrollPaddingType } from '../../tailwind_map_type/interactivity/scroll_padding_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[scrollPadding]',
    standalone: true
})
export class ScrollPaddingDirective extends BaseTailwindDirective {
  scrollPadding = input<ScrollPaddingType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SCROLL_PADDING: this.scrollPadding(),
      });
    });
  }
}