import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToOrangeType } from '../../tailwind_map_type/backgrounds/gradient_to_orange_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToOrange]',
    standalone: true
})
export class GradientToOrangeDirective extends BaseTailwindDirective {
  gradientToOrange = input<GradientToOrangeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_ORANGE: this.gradientToOrange(),
      });
    });
  }
}