import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientFromStoneType } from '../../tailwind_map_type/backgrounds/gradient_from_stone_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientFromStone]',
    standalone: true
})
export class GradientFromStoneDirective extends BaseTailwindDirective {
  gradientFromStone = input<GradientFromStoneType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_FROM_STONE: this.gradientFromStone(),
      });
    });
  }
}