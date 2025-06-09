import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaYellowType } from '../../tailwind_map_type/backgrounds/gradient_via_yellow_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaYellow]',
    standalone: true
})
export class GradientViaYellowDirective extends BaseTailwindDirective {
  gradientViaYellow = input<GradientViaYellowType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_YELLOW: this.gradientViaYellow(),
      });
    });
  }
}