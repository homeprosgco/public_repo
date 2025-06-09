import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromEmeraldType } from '../../tailwind_map_type/backgrounds/gradient_from_emerald_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromEmerald]',
    standalone: true
})
export class GradientFromEmeraldDirective extends BaseTailwindDirective {
  gradientFromEmerald = input<GradientFromEmeraldType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_EMERALD: this.gradientFromEmerald(),
      });
    });
  }
}