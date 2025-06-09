import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToGrayType } from '../../tailwind_map_type/backgrounds/gradient_to_gray_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToGray]',
    standalone: true
})
export class GradientToGrayDirective extends BaseTailwindDirective {
  gradientToGray = input<GradientToGrayType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_GRAY: this.gradientToGray(),
      });
    });
  }
}