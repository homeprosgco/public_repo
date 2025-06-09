import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromNeutralType } from '../../tailwind_map_type/backgrounds/gradient_from_neutral_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromNeutral]',
    standalone: true
})
export class GradientFromNeutralDirective extends BaseTailwindDirective {
  gradientFromNeutral = input<GradientFromNeutralType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_NEUTRAL: this.gradientFromNeutral(),
      });
    });
  }
}