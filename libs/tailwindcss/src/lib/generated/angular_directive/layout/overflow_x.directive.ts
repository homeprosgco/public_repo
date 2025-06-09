import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OverflowXType } from '../../tailwind_map_type/layout/overflow_x_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[overflowX]',
    standalone: true
})
export class OverflowXDirective extends BaseTailwindDirective {
  overflowX = input<OverflowXType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OVERFLOW_X: this.overflowX(),
      });
    });
  }
}