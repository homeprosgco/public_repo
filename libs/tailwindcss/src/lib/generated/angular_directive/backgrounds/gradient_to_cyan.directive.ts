import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToCyanType } from '../../tailwind_map_type/backgrounds/gradient_to_cyan_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToCyan]',
    standalone: true
})
export class GradientToCyanDirective extends BaseTailwindDirective {
  gradientToCyan = input<GradientToCyanType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_CYAN: this.gradientToCyan(),
      });
    });
  }
}