import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingSlateColorType } from '../../tailwind_map_type/borders/ring_slate_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringSlateColor]',
    standalone: true
})
export class RingSlateColorDirective extends BaseTailwindDirective {
  ringSlateColor = input<RingSlateColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_SLATE_COLOR: this.ringSlateColor(),
      });
    });
  }
}