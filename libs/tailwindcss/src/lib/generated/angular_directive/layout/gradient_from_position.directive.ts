import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromPositionType } from '../../tailwind_map_type/layout/gradient_from_position_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromPosition]',
    standalone: true
})
export class GradientFromPositionDirective extends BaseTailwindDirective {
  gradientFromPosition = input<GradientFromPositionType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_POSITION: this.gradientFromPosition(),
      });
    });
  }
}