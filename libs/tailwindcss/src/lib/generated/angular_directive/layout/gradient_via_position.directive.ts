import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaPositionType } from '../../tailwind_map_type/layout/gradient_via_position_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaPosition]',
    standalone: true
})
export class GradientViaPositionDirective extends BaseTailwindDirective {
  gradientViaPosition = input<GradientViaPositionType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_POSITION: this.gradientViaPosition(),
      });
    });
  }
}