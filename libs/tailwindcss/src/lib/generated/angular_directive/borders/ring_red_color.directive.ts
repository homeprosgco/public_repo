import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingRedColorType } from '../../tailwind_map_type/borders/ring_red_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringRedColor]',
    standalone: true
})
export class RingRedColorDirective extends BaseTailwindDirective {
  ringRedColor = input<RingRedColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_RED_COLOR: this.ringRedColor(),
      });
    });
  }
}