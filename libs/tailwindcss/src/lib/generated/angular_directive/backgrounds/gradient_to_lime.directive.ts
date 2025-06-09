import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToLimeType } from '../../tailwind_map_type/backgrounds/gradient_to_lime_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToLime]',
    standalone: true
})
export class GradientToLimeDirective extends BaseTailwindDirective {
  gradientToLime = input<GradientToLimeType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_LIME: this.gradientToLime(),
      });
    });
  }
}