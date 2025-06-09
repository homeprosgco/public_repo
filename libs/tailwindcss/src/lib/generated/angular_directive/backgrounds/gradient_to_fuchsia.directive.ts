import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToFuchsiaType } from '../../tailwind_map_type/backgrounds/gradient_to_fuchsia_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToFuchsia]',
    standalone: true
})
export class GradientToFuchsiaDirective extends BaseTailwindDirective {
  gradientToFuchsia = input<GradientToFuchsiaType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_FUCHSIA: this.gradientToFuchsia(),
      });
    });
  }
}