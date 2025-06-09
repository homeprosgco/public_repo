import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaGrayType } from '../../tailwind_map_type/backgrounds/gradient_via_gray_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaGray]',
    standalone: true
})
export class GradientViaGrayDirective extends BaseTailwindDirective {
  gradientViaGray = input<GradientViaGrayType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_GRAY: this.gradientViaGray(),
      });
    });
  }
}