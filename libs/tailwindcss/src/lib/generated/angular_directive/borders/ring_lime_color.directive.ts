import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingLimeColorType } from '../../tailwind_map_type/borders/ring_lime_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringLimeColor]',
    standalone: true
})
export class RingLimeColorDirective extends BaseTailwindDirective {
  ringLimeColor = input<RingLimeColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_LIME_COLOR: this.ringLimeColor(),
      });
    });
  }
}