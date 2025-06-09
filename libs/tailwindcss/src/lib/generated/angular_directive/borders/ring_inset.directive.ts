import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingInsetType } from '../../tailwind_map_type/borders/ring_inset_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringInset]',
    standalone: true
})
export class RingInsetDirective extends BaseTailwindDirective {
  ringInset = input<RingInsetType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_INSET: this.ringInset(),
      });
    });
  }
}