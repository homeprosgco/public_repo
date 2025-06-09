import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaEmeraldType } from '../../tailwind_map_type/backgrounds/gradient_via_emerald_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaEmerald]',
    standalone: true
})
export class GradientViaEmeraldDirective extends BaseTailwindDirective {
  gradientViaEmerald = input<GradientViaEmeraldType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_EMERALD: this.gradientViaEmerald(),
      });
    });
  }
}