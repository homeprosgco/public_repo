import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { SkewXType } from '../../tailwind_map_type/typography/skew_x_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[skewX]',
    standalone: true
})
export class SkewXDirective extends BaseTailwindDirective {
  skewX = input<SkewXType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        SKEW_X: this.skewX(),
      });
    });
  }
}