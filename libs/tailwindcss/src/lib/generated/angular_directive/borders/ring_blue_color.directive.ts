import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingBlueColorType } from '../../tailwind_map_type/borders/ring_blue_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringBlueColor]',
    standalone: true
})
export class RingBlueColorDirective extends BaseTailwindDirective {
  ringBlueColor = input<RingBlueColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_BLUE_COLOR: this.ringBlueColor(),
      });
    });
  }
}