import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromAmberType } from '../../tailwind_map_type/backgrounds/gradient_from_amber_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromAmber]',
    standalone: true
})
export class GradientFromAmberDirective extends BaseTailwindDirective {
  gradientFromAmber = input<GradientFromAmberType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_AMBER: this.gradientFromAmber(),
      });
    });
  }
}