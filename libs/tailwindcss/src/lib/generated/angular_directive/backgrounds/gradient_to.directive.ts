import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToType } from '../../tailwind_map_type/backgrounds/gradient_to_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientTo]',
    standalone: true
})
export class GradientToDirective extends BaseTailwindDirective {
  gradientTo = input<GradientToType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO: this.gradientTo(),
      });
    });
  }
}