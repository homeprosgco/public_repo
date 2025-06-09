import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { SkewYType } from '../../tailwind_map_type/typography/skew_y_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[skewY]',
    standalone: true
})
export class SkewYDirective extends BaseTailwindDirective {
  skewY = input<SkewYType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SKEW_Y: this.skewY(),
      });
    });
  }
}