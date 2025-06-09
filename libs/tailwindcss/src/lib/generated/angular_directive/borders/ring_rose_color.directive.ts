import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingRoseColorType } from '../../tailwind_map_type/borders/ring_rose_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringRoseColor]',
    standalone: true
})
export class RingRoseColorDirective extends BaseTailwindDirective {
  ringRoseColor = input<RingRoseColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_ROSE_COLOR: this.ringRoseColor(),
      });
    });
  }
}