import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaSkyType } from '../../tailwind_map_type/backgrounds/gradient_via_sky_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaSky]',
    standalone: true
})
export class GradientViaSkyDirective extends BaseTailwindDirective {
  gradientViaSky = input<GradientViaSkyType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_SKY: this.gradientViaSky(),
      });
    });
  }
}