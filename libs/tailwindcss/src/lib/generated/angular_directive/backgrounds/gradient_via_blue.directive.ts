import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaBlueType } from '../../tailwind_map_type/backgrounds/gradient_via_blue_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaBlue]',
    standalone: true
})
export class GradientViaBlueDirective extends BaseTailwindDirective {
  gradientViaBlue = input<GradientViaBlueType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_BLUE: this.gradientViaBlue(),
      });
    });
  }
}