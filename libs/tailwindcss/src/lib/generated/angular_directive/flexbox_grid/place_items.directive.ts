import { Directive, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { BaseTailwindDirective } from '../../../base_tailwind_directive/base_tailwind.directive';
import { PlaceItemsType } from '../../tailwind_map_type/flexbox_grid/place_items_class_map';

/**
 * Directive for dynamically applying Tailwind  classes.
 */
@Directive({
    selector: '[placeItems]',
    standalone: true
})
export class PlaceItemsDirective extends BaseTailwindDirective {
  placeItems = input<PlaceItemsType | undefined>();

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    
    effect(() => {
      this.updateClasses({
        PLACE_ITEMS: this.placeItems(),
      });
    });
  }
}