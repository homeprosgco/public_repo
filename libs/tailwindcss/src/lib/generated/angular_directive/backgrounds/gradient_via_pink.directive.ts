import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaPinkType } from '../../tailwind_map_type/backgrounds/gradient_via_pink_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaPink]',
    standalone: true
})
export class GradientViaPinkDirective extends BaseTailwindDirective {
  gradientViaPink = input<GradientViaPinkType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_PINK: this.gradientViaPink(),
      });
    });
  }
}