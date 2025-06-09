import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToRedType } from '../../tailwind_map_type/backgrounds/gradient_to_red_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToRed]',
    standalone: true
})
export class GradientToRedDirective extends BaseTailwindDirective {
  gradientToRed = input<GradientToRedType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_RED: this.gradientToRed(),
      });
    });
  }
}