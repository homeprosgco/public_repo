import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaLimeType } from '../../tailwind_map_type/backgrounds/gradient_via_lime_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaLime]',
    standalone: true
})
export class GradientViaLimeDirective extends BaseTailwindDirective {
  gradientViaLime = input<GradientViaLimeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_LIME: this.gradientViaLime(),
      });
    });
  }
}