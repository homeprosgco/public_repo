import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MaxWidthType } from '../../tailwind_map_type/sizing/max_width_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[maxWidth]',
    standalone: true
})
export class MaxWidthDirective extends BaseTailwindDirective {
  maxWidth = input<MaxWidthType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MAX_WIDTH: this.maxWidth(),
      });
    });
  }
}