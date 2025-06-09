import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToSlateType } from '../../tailwind_map_type/backgrounds/gradient_to_slate_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToSlate]',
    standalone: true
})
export class GradientToSlateDirective extends BaseTailwindDirective {
  gradientToSlate = input<GradientToSlateType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_SLATE: this.gradientToSlate(),
      });
    });
  }
}