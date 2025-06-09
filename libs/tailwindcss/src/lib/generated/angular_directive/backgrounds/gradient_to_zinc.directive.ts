import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToZincType } from '../../tailwind_map_type/backgrounds/gradient_to_zinc_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToZinc]',
    standalone: true
})
export class GradientToZincDirective extends BaseTailwindDirective {
  gradientToZinc = input<GradientToZincType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_ZINC: this.gradientToZinc(),
      });
    });
  }
}