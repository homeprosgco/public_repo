import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OverflowYType } from '../../tailwind_map_type/layout/overflow_y_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[overflowY]',
    standalone: true
})
export class OverflowYDirective extends BaseTailwindDirective {
  overflowY = input<OverflowYType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OVERFLOW_Y: this.overflowY(),
      });
    });
  }
}