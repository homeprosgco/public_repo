import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToPinkType } from '../../tailwind_map_type/backgrounds/gradient_to_pink_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToPink]',
    standalone: true
})
export class GradientToPinkDirective extends BaseTailwindDirective {
  gradientToPink = input<GradientToPinkType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_PINK: this.gradientToPink(),
      });
    });
  }
}