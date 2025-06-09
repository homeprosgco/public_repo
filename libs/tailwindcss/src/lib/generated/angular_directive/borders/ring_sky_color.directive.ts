import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingSkyColorType } from '../../tailwind_map_type/borders/ring_sky_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringSkyColor]',
    standalone: true
})
export class RingSkyColorDirective extends BaseTailwindDirective {
  ringSkyColor = input<RingSkyColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_SKY_COLOR: this.ringSkyColor(),
      });
    });
  }
}