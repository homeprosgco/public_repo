import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToEmeraldType } from '../../tailwind_map_type/backgrounds/gradient_to_emerald_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToEmerald]',
    standalone: true
})
export class GradientToEmeraldDirective extends BaseTailwindDirective {
  gradientToEmerald = input<GradientToEmeraldType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_EMERALD: this.gradientToEmerald(),
      });
    });
  }
}