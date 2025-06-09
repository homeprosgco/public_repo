import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromCyanType } from '../../tailwind_map_type/backgrounds/gradient_from_cyan_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromCyan]',
    standalone: true
})
export class GradientFromCyanDirective extends BaseTailwindDirective {
  gradientFromCyan = input<GradientFromCyanType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_CYAN: this.gradientFromCyan(),
      });
    });
  }
}