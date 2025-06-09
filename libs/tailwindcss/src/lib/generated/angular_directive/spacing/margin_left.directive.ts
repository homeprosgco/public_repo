import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { MarginLeftType } from '../../tailwind_map_type/spacing/margin_left_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[marginLeft]',
    standalone: true
})
export class MarginLeftDirective extends BaseTailwindDirective {
  marginLeft = input<MarginLeftType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        MARGIN_LEFT: this.marginLeft(),
      });
    });
  }
}