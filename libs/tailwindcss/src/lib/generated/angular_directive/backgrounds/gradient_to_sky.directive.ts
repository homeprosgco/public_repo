import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToSkyType } from '../../tailwind_map_type/backgrounds/gradient_to_sky_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToSky]',
    standalone: true
})
export class GradientToSkyDirective extends BaseTailwindDirective {
  gradientToSky = input<GradientToSkyType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_SKY: this.gradientToSky(),
      });
    });
  }
}