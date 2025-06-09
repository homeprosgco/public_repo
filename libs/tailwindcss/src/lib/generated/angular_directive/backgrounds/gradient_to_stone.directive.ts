import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientToStoneType } from '../../tailwind_map_type/backgrounds/gradient_to_stone_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientToStone]',
    standalone: true
})
export class GradientToStoneDirective extends BaseTailwindDirective {
  gradientToStone = input<GradientToStoneType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_TO_STONE: this.gradientToStone(),
      });
    });
  }
}