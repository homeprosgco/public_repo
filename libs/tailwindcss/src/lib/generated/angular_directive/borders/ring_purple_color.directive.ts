import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingPurpleColorType } from '../../tailwind_map_type/borders/ring_purple_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringPurpleColor]',
    standalone: true
})
export class RingPurpleColorDirective extends BaseTailwindDirective {
  ringPurpleColor = input<RingPurpleColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_PURPLE_COLOR: this.ringPurpleColor(),
      });
    });
  }
}