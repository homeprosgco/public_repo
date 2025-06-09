import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingTealColorType } from '../../tailwind_map_type/borders/ring_teal_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringTealColor]',
    standalone: true
})
export class RingTealColorDirective extends BaseTailwindDirective {
  ringTealColor = input<RingTealColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_TEAL_COLOR: this.ringTealColor(),
      });
    });
  }
}