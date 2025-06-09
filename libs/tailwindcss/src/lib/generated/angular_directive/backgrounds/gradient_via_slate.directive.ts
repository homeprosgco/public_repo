import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaSlateType } from '../../tailwind_map_type/backgrounds/gradient_via_slate_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaSlate]',
    standalone: true
})
export class GradientViaSlateDirective extends BaseTailwindDirective {
  gradientViaSlate = input<GradientViaSlateType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_SLATE: this.gradientViaSlate(),
      });
    });
  }
}