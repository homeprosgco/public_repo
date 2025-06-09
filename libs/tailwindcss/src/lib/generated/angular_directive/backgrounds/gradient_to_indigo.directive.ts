import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToIndigoType } from '../../tailwind_map_type/backgrounds/gradient_to_indigo_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToIndigo]',
    standalone: true
})
export class GradientToIndigoDirective extends BaseTailwindDirective {
  gradientToIndigo = input<GradientToIndigoType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_INDIGO: this.gradientToIndigo(),
      });
    });
  }
}