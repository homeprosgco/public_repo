import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToGreenType } from '../../tailwind_map_type/backgrounds/gradient_to_green_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToGreen]',
    standalone: true
})
export class GradientToGreenDirective extends BaseTailwindDirective {
  gradientToGreen = input<GradientToGreenType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_GREEN: this.gradientToGreen(),
      });
    });
  }
}