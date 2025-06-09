import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { OrderType } from '../../tailwind_map_type/flexbox_grid/order_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[order]',
    standalone: true
})
export class OrderDirective extends BaseTailwindDirective {
  order = input<OrderType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        ORDER: this.order(),
      });
    });
  }
}