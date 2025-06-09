import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaTealType } from '../../tailwind_map_type/backgrounds/gradient_via_teal_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaTeal]',
    standalone: true
})
export class GradientViaTealDirective extends BaseTailwindDirective {
  gradientViaTeal = input<GradientViaTealType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_TEAL: this.gradientViaTeal(),
      });
    });
  }
}