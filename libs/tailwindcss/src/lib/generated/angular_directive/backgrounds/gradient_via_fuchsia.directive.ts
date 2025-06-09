import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaFuchsiaType } from '../../tailwind_map_type/backgrounds/gradient_via_fuchsia_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaFuchsia]',
    standalone: true
})
export class GradientViaFuchsiaDirective extends BaseTailwindDirective {
  gradientViaFuchsia = input<GradientViaFuchsiaType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_FUCHSIA: this.gradientViaFuchsia(),
      });
    });
  }
}