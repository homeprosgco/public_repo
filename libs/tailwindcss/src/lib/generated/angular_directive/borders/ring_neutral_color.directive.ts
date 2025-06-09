import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingNeutralColorType } from '../../tailwind_map_type/borders/ring_neutral_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringNeutralColor]',
    standalone: true
})
export class RingNeutralColorDirective extends BaseTailwindDirective {
  ringNeutralColor = input<RingNeutralColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_NEUTRAL_COLOR: this.ringNeutralColor(),
      });
    });
  }
}