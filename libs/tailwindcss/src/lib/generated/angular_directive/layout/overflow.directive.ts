import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OverflowType } from '../../tailwind_map_type/layout/overflow_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[overflow]',
    standalone: true
})
export class OverflowDirective extends BaseTailwindDirective {
  overflow = input<OverflowType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        OVERFLOW: this.overflow(),
      });
    });
  }
}