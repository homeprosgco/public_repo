import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingFuchsiaColorType } from '../../tailwind_map_type/borders/ring_fuchsia_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringFuchsiaColor]',
    standalone: true
})
export class RingFuchsiaColorDirective extends BaseTailwindDirective {
  ringFuchsiaColor = input<RingFuchsiaColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_FUCHSIA_COLOR: this.ringFuchsiaColor(),
      });
    });
  }
}