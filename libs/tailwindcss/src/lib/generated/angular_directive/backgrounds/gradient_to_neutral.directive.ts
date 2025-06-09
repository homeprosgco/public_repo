import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToNeutralType } from '../../tailwind_map_type/backgrounds/gradient_to_neutral_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToNeutral]',
    standalone: true
})
export class GradientToNeutralDirective extends BaseTailwindDirective {
  gradientToNeutral = input<GradientToNeutralType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_NEUTRAL: this.gradientToNeutral(),
      });
    });
  }
}