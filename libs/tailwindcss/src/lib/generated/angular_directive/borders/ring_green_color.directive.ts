import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingGreenColorType } from '../../tailwind_map_type/borders/ring_green_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringGreenColor]',
    standalone: true
})
export class RingGreenColorDirective extends BaseTailwindDirective {
  ringGreenColor = input<RingGreenColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_GREEN_COLOR: this.ringGreenColor(),
      });
    });
  }
}