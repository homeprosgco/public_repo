import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingColorType } from '../../tailwind_map_type/borders/ring_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringColor]',
    standalone: true
})
export class RingColorDirective extends BaseTailwindDirective {
  ringColor = input<RingColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_COLOR: this.ringColor(),
      });
    });
  }
}