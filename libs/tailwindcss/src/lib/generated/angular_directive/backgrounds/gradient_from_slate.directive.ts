import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromSlateType } from '../../tailwind_map_type/backgrounds/gradient_from_slate_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromSlate]',
    standalone: true
})
export class GradientFromSlateDirective extends BaseTailwindDirective {
  gradientFromSlate = input<GradientFromSlateType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_SLATE: this.gradientFromSlate(),
      });
    });
  }
}