import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaGreenType } from '../../tailwind_map_type/backgrounds/gradient_via_green_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaGreen]',
    standalone: true
})
export class GradientViaGreenDirective extends BaseTailwindDirective {
  gradientViaGreen = input<GradientViaGreenType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_GREEN: this.gradientViaGreen(),
      });
    });
  }
}