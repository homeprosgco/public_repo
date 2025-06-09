import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingStoneColorType } from '../../tailwind_map_type/borders/ring_stone_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringStoneColor]',
    standalone: true
})
export class RingStoneColorDirective extends BaseTailwindDirective {
  ringStoneColor = input<RingStoneColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_STONE_COLOR: this.ringStoneColor(),
      });
    });
  }
}