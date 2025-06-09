import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromPurpleType } from '../../tailwind_map_type/backgrounds/gradient_from_purple_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromPurple]',
    standalone: true
})
export class GradientFromPurpleDirective extends BaseTailwindDirective {
  gradientFromPurple = input<GradientFromPurpleType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_PURPLE: this.gradientFromPurple(),
      });
    });
  }
}