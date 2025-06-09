import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaRoseType } from '../../tailwind_map_type/backgrounds/gradient_via_rose_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaRose]',
    standalone: true
})
export class GradientViaRoseDirective extends BaseTailwindDirective {
  gradientViaRose = input<GradientViaRoseType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_ROSE: this.gradientViaRose(),
      });
    });
  }
}