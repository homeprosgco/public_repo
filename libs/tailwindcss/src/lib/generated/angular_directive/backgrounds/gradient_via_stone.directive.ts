import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { GradientViaStoneType } from '../../tailwind_map_type/backgrounds/gradient_via_stone_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[gradientViaStone]',
    standalone: true
})
export class GradientViaStoneDirective extends BaseTailwindDirective {
  gradientViaStone = input<GradientViaStoneType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        GRADIENT_VIA_STONE: this.gradientViaStone(),
      });
    });
  }
}