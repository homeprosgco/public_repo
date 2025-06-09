import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromTealType } from '../../tailwind_map_type/backgrounds/gradient_from_teal_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromTeal]',
    standalone: true
})
export class GradientFromTealDirective extends BaseTailwindDirective {
  gradientFromTeal = input<GradientFromTealType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_TEAL: this.gradientFromTeal(),
      });
    });
  }
}