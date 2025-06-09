import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromOrangeType } from '../../tailwind_map_type/backgrounds/gradient_from_orange_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromOrange]',
    standalone: true
})
export class GradientFromOrangeDirective extends BaseTailwindDirective {
  gradientFromOrange = input<GradientFromOrangeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_ORANGE: this.gradientFromOrange(),
      });
    });
  }
}