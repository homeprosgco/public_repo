import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromZincType } from '../../tailwind_map_type/backgrounds/gradient_from_zinc_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromZinc]',
    standalone: true
})
export class GradientFromZincDirective extends BaseTailwindDirective {
  gradientFromZinc = input<GradientFromZincType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_ZINC: this.gradientFromZinc(),
      });
    });
  }
}