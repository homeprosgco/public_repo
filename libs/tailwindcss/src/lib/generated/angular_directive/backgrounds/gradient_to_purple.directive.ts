import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToPurpleType } from '../../tailwind_map_type/backgrounds/gradient_to_purple_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToPurple]',
    standalone: true
})
export class GradientToPurpleDirective extends BaseTailwindDirective {
  gradientToPurple = input<GradientToPurpleType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_PURPLE: this.gradientToPurple(),
      });
    });
  }
}