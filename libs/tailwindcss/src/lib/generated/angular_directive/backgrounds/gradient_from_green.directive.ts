import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromGreenType } from '../../tailwind_map_type/backgrounds/gradient_from_green_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromGreen]',
    standalone: true
})
export class GradientFromGreenDirective extends BaseTailwindDirective {
  gradientFromGreen = input<GradientFromGreenType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_GREEN: this.gradientFromGreen(),
      });
    });
  }
}