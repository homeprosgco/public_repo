import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToAmberType } from '../../tailwind_map_type/backgrounds/gradient_to_amber_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToAmber]',
    standalone: true
})
export class GradientToAmberDirective extends BaseTailwindDirective {
  gradientToAmber = input<GradientToAmberType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_AMBER: this.gradientToAmber(),
      });
    });
  }
}