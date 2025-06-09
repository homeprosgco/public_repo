import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingOrangeColorType } from '../../tailwind_map_type/borders/ring_orange_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringOrangeColor]',
    standalone: true
})
export class RingOrangeColorDirective extends BaseTailwindDirective {
  ringOrangeColor = input<RingOrangeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_ORANGE_COLOR: this.ringOrangeColor(),
      });
    });
  }
}