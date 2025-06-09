import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromLimeType } from '../../tailwind_map_type/backgrounds/gradient_from_lime_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromLime]',
    standalone: true
})
export class GradientFromLimeDirective extends BaseTailwindDirective {
  gradientFromLime = input<GradientFromLimeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_LIME: this.gradientFromLime(),
      });
    });
  }
}