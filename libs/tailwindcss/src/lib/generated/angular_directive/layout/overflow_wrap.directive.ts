import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OverflowWrapType } from '../../tailwind_map_type/layout/overflow_wrap_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[overflowWrap]',
    standalone: true
})
export class OverflowWrapDirective extends BaseTailwindDirective {
  overflowWrap = input<OverflowWrapType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OVERFLOW_WRAP: this.overflowWrap(),
      });
    });
  }
}