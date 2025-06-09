import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaAmberType } from '../../tailwind_map_type/backgrounds/gradient_via_amber_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaAmber]',
    standalone: true
})
export class GradientViaAmberDirective extends BaseTailwindDirective {
  gradientViaAmber = input<GradientViaAmberType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_AMBER: this.gradientViaAmber(),
      });
    });
  }
}