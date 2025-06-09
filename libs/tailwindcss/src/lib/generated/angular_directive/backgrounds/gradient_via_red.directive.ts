import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaRedType } from '../../tailwind_map_type/backgrounds/gradient_via_red_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaRed]',
    standalone: true
})
export class GradientViaRedDirective extends BaseTailwindDirective {
  gradientViaRed = input<GradientViaRedType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_RED: this.gradientViaRed(),
      });
    });
  }
}