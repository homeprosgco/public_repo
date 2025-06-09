import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingPinkColorType } from '../../tailwind_map_type/borders/ring_pink_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringPinkColor]',
    standalone: true
})
export class RingPinkColorDirective extends BaseTailwindDirective {
  ringPinkColor = input<RingPinkColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_PINK_COLOR: this.ringPinkColor(),
      });
    });
  }
}