import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromIndigoType } from '../../tailwind_map_type/backgrounds/gradient_from_indigo_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromIndigo]',
    standalone: true
})
export class GradientFromIndigoDirective extends BaseTailwindDirective {
  gradientFromIndigo = input<GradientFromIndigoType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_INDIGO: this.gradientFromIndigo(),
      });
    });
  }
}