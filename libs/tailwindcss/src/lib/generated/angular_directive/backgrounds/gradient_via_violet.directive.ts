import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaVioletType } from '../../tailwind_map_type/backgrounds/gradient_via_violet_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaViolet]',
    standalone: true
})
export class GradientViaVioletDirective extends BaseTailwindDirective {
  gradientViaViolet = input<GradientViaVioletType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_VIOLET: this.gradientViaViolet(),
      });
    });
  }
}