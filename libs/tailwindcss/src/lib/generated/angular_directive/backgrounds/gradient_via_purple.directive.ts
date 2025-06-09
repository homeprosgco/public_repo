import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaPurpleType } from '../../tailwind_map_type/backgrounds/gradient_via_purple_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaPurple]',
    standalone: true
})
export class GradientViaPurpleDirective extends BaseTailwindDirective {
  gradientViaPurple = input<GradientViaPurpleType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_PURPLE: this.gradientViaPurple(),
      });
    });
  }
}