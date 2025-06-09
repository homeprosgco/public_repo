import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { RingYellowColorType } from '../../tailwind_map_type/borders/ring_yellow_color_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[ringYellowColor]',
    standalone: true
})
export class RingYellowColorDirective extends BaseTailwindDirective {
  ringYellowColor = input<RingYellowColorType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        RING_YELLOW_COLOR: this.ringYellowColor(),
      });
    });
  }
}