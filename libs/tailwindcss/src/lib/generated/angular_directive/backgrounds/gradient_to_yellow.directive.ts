import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToYellowType } from '../../tailwind_map_type/backgrounds/gradient_to_yellow_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToYellow]',
    standalone: true
})
export class GradientToYellowDirective extends BaseTailwindDirective {
  gradientToYellow = input<GradientToYellowType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_YELLOW: this.gradientToYellow(),
      });
    });
  }
}