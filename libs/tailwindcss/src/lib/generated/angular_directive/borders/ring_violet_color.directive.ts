import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingVioletColorType } from '../../tailwind_map_type/borders/ring_violet_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringVioletColor]',
    standalone: true
})
export class RingVioletColorDirective extends BaseTailwindDirective {
  ringVioletColor = input<RingVioletColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_VIOLET_COLOR: this.ringVioletColor(),
      });
    });
  }
}