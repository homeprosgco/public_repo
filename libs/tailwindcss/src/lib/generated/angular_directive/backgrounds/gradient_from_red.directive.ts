import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromRedType } from '../../tailwind_map_type/backgrounds/gradient_from_red_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromRed]',
    standalone: true
})
export class GradientFromRedDirective extends BaseTailwindDirective {
  gradientFromRed = input<GradientFromRedType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_RED: this.gradientFromRed(),
      });
    });
  }
}