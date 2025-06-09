import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToBlueType } from '../../tailwind_map_type/backgrounds/gradient_to_blue_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToBlue]',
    standalone: true
})
export class GradientToBlueDirective extends BaseTailwindDirective {
  gradientToBlue = input<GradientToBlueType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_BLUE: this.gradientToBlue(),
      });
    });
  }
}