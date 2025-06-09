import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromYellowType } from '../../tailwind_map_type/backgrounds/gradient_from_yellow_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromYellow]',
    standalone: true
})
export class GradientFromYellowDirective extends BaseTailwindDirective {
  gradientFromYellow = input<GradientFromYellowType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_YELLOW: this.gradientFromYellow(),
      });
    });
  }
}