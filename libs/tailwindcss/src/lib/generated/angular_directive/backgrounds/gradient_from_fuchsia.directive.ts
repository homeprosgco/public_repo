import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromFuchsiaType } from '../../tailwind_map_type/backgrounds/gradient_from_fuchsia_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromFuchsia]',
    standalone: true
})
export class GradientFromFuchsiaDirective extends BaseTailwindDirective {
  gradientFromFuchsia = input<GradientFromFuchsiaType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_FUCHSIA: this.gradientFromFuchsia(),
      });
    });
  }
}