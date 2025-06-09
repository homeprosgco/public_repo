import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromGrayType } from '../../tailwind_map_type/backgrounds/gradient_from_gray_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromGray]',
    standalone: true
})
export class GradientFromGrayDirective extends BaseTailwindDirective {
  gradientFromGray = input<GradientFromGrayType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_GRAY: this.gradientFromGray(),
      });
    });
  }
}