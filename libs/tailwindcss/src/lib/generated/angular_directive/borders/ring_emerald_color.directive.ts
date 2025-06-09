import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingEmeraldColorType } from '../../tailwind_map_type/borders/ring_emerald_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringEmeraldColor]',
    standalone: true
})
export class RingEmeraldColorDirective extends BaseTailwindDirective {
  ringEmeraldColor = input<RingEmeraldColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_EMERALD_COLOR: this.ringEmeraldColor(),
      });
    });
  }
}