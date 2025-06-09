import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromPinkType } from '../../tailwind_map_type/backgrounds/gradient_from_pink_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromPink]',
    standalone: true
})
export class GradientFromPinkDirective extends BaseTailwindDirective {
  gradientFromPink = input<GradientFromPinkType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_PINK: this.gradientFromPink(),
      });
    });
  }
}