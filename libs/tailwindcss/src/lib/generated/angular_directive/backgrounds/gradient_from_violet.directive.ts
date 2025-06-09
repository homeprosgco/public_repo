import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromVioletType } from '../../tailwind_map_type/backgrounds/gradient_from_violet_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromViolet]',
    standalone: true
})
export class GradientFromVioletDirective extends BaseTailwindDirective {
  gradientFromViolet = input<GradientFromVioletType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_VIOLET: this.gradientFromViolet(),
      });
    });
  }
}