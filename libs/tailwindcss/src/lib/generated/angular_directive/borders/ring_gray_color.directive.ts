import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingGrayColorType } from '../../tailwind_map_type/borders/ring_gray_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringGrayColor]',
    standalone: true
})
export class RingGrayColorDirective extends BaseTailwindDirective {
  ringGrayColor = input<RingGrayColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_GRAY_COLOR: this.ringGrayColor(),
      });
    });
  }
}