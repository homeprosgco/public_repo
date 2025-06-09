import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingCyanColorType } from '../../tailwind_map_type/borders/ring_cyan_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringCyanColor]',
    standalone: true
})
export class RingCyanColorDirective extends BaseTailwindDirective {
  ringCyanColor = input<RingCyanColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_CYAN_COLOR: this.ringCyanColor(),
      });
    });
  }
}