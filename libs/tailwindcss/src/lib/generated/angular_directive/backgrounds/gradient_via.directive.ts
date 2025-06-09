import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaType } from '../../tailwind_map_type/backgrounds/gradient_via_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientVia]',
    standalone: true
})
export class GradientViaDirective extends BaseTailwindDirective {
  gradientVia = input<GradientViaType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA: this.gradientVia(),
      });
    });
  }
}