import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingZincColorType } from '../../tailwind_map_type/borders/ring_zinc_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringZincColor]',
    standalone: true
})
export class RingZincColorDirective extends BaseTailwindDirective {
  ringZincColor = input<RingZincColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_ZINC_COLOR: this.ringZincColor(),
      });
    });
  }
}