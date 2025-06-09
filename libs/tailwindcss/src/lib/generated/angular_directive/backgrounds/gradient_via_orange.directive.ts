import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaOrangeType } from '../../tailwind_map_type/backgrounds/gradient_via_orange_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaOrange]',
    standalone: true
})
export class GradientViaOrangeDirective extends BaseTailwindDirective {
  gradientViaOrange = input<GradientViaOrangeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_ORANGE: this.gradientViaOrange(),
      });
    });
  }
}