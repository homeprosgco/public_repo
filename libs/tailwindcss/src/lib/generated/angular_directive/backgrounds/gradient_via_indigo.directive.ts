import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaIndigoType } from '../../tailwind_map_type/backgrounds/gradient_via_indigo_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaIndigo]',
    standalone: true
})
export class GradientViaIndigoDirective extends BaseTailwindDirective {
  gradientViaIndigo = input<GradientViaIndigoType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_INDIGO: this.gradientViaIndigo(),
      });
    });
  }
}