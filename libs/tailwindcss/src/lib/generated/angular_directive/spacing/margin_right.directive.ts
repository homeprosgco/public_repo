import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MarginRightType } from '../../tailwind_map_type/spacing/margin_right_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[marginRight]',
    standalone: true
})
export class MarginRightDirective extends BaseTailwindDirective {
  marginRight = input<MarginRightType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MARGIN_RIGHT: this.marginRight(),
      });
    });
  }
}