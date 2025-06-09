import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToTealType } from '../../tailwind_map_type/backgrounds/gradient_to_teal_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToTeal]',
    standalone: true
})
export class GradientToTealDirective extends BaseTailwindDirective {
  gradientToTeal = input<GradientToTealType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_TEAL: this.gradientToTeal(),
      });
    });
  }
}