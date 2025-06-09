import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaNeutralType } from '../../tailwind_map_type/backgrounds/gradient_via_neutral_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaNeutral]',
    standalone: true
})
export class GradientViaNeutralDirective extends BaseTailwindDirective {
  gradientViaNeutral = input<GradientViaNeutralType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_NEUTRAL: this.gradientViaNeutral(),
      });
    });
  }
}