import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToRoseType } from '../../tailwind_map_type/backgrounds/gradient_to_rose_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToRose]',
    standalone: true
})
export class GradientToRoseDirective extends BaseTailwindDirective {
  gradientToRose = input<GradientToRoseType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_ROSE: this.gradientToRose(),
      });
    });
  }
}