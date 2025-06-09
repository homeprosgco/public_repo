import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingIndigoColorType } from '../../tailwind_map_type/borders/ring_indigo_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringIndigoColor]',
    standalone: true
})
export class RingIndigoColorDirective extends BaseTailwindDirective {
  ringIndigoColor = input<RingIndigoColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_INDIGO_COLOR: this.ringIndigoColor(),
      });
    });
  }
}