import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromSkyType } from '../../tailwind_map_type/backgrounds/gradient_from_sky_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromSky]',
    standalone: true
})
export class GradientFromSkyDirective extends BaseTailwindDirective {
  gradientFromSky = input<GradientFromSkyType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_SKY: this.gradientFromSky(),
      });
    });
  }
}