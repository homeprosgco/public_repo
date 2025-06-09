import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromRoseType } from '../../tailwind_map_type/backgrounds/gradient_from_rose_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromRose]',
    standalone: true
})
export class GradientFromRoseDirective extends BaseTailwindDirective {
  gradientFromRose = input<GradientFromRoseType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_ROSE: this.gradientFromRose(),
      });
    });
  }
}